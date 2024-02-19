import { Collection, Db, MongoClient } from "mongodb"

export type TbConfig = {
    id?: number
    notation?: string
    name: string

}
export type DbConfig = TbConfig & {
    tables?: TbConfig[]
}

export type MongoContext = {
    client: MongoClient
    getDb: (idorNotation: number | string) => {
        db: Db,
        getCollection: <TDoc extends Document = any>(idorNotation: number | string) => Collection<TDoc>
    }
}

export function getMongoServerContext({
    connectionString, config, envType, options
}: {
    connectionString?: string
    config?: string
    envType?: string
    options?: any
}): Promise<MongoContext> {
    if (!connectionString) {
        throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
    }
    let dbConfigs: DbConfig[]
    try {
        if (!config) throw new Error('internal') // to skip to catch
        dbConfigs = JSON.parse(config) as DbConfig[]
    } catch (ex: any) {
        throw new Error('Invalid/Missing environment variable: "DB_CONFIG"')
    }
    let client
    let clientPromise: Promise<MongoClient>

    if (envType === "development") {
        // In development mode, use a global variable so that the value
        // is preserved across module reloads caused by HMR (Hot Module Replacement).
        let globalWithMongo = global as typeof globalThis & {
            _mongoClientPromise?: Promise<MongoClient>
        }

        if (!globalWithMongo._mongoClientPromise) {
            client = new MongoClient(connectionString, options)
            globalWithMongo._mongoClientPromise = client.connect()
        }
        clientPromise = globalWithMongo._mongoClientPromise
    } else {
        // In production mode, it's best to not use a global variable.
        client = new MongoClient(connectionString, options)
        clientPromise = client.connect()
    }
    return clientPromise
        .then(r => ({
            client: r,
            getDb: (idorNotation: number | string) => {
                const dbConfig = dbConfigs
                    .filter(d =>
                        (typeof (idorNotation) === 'number' && idorNotation === d.id)
                        || (typeof (idorNotation) === 'string' && idorNotation === d.notation))[0]
                if (!dbConfig)
                    throw new Error(`Missing environment database argument : "${idorNotation}"`)
                const db = r.db(dbConfig.name)
                return {
                    db: db,
                    getCollection: <TDoc extends Document = any>(idorNotation: number | string) => {
                        const tbConfig = dbConfig?.tables
                            ?.filter(t =>
                                (typeof (idorNotation) === 'number' && idorNotation === t.id)
                                || (typeof (idorNotation) === 'string' && idorNotation === t.notation))[0]
                        if (!tbConfig)
                            throw new Error(`Missing environment database table argument : "${dbConfig.notation ?? dbConfig.id
                                }::${idorNotation}"`)
                        return db.collection<TDoc>(tbConfig.name)
                    }
                }
            }
        }))
}

export const mongoClientPromise: Promise<MongoContext> = getMongoServerContext({
    connectionString: process.env.MONGODB_URI,
    config: process.env.DB_CONFIG,
    envType: process.env.NODE_ENV,
})
