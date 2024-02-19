import { mongoClientPromise } from "./mongo"

export interface Controller<T = any> {
    get: () => Promise<[T | T[], {
        status: number
    }]>
}

function getMongoClientController(): Controller {
    return {
        get: async () => {
            let message: string | undefined = undefined
            let success = true
            const response = await mongoClientPromise
                .then(r => {
                    success = true
                    return r
                })
                .catch(e => {
                    success = false
                    message = e.message
                    return null
                })
            return [{
                success: success || !response,
                message: message
            }, {
                status: success || !response ? 200 : 500
            }]
        }
    }
}

function getMovieController(): Controller {
    return {
        get: async () => {
            try {
                const clientContext = await mongoClientPromise
                const tb = clientContext.getDb(1).getCollection(1)
                const res = await tb.find({}, { limit: 10 }).toArray()
                return [{ success: true, data: res }, { status: 201 }]
            } catch (ex: any) {
                return [{ success: false, message: ex.message }, { status: 500 }];
            }
        }
    }
}

export const controllers: { [key: string]: Controller } = {
    mongo: getMongoClientController(),
    movies: getMovieController()
}