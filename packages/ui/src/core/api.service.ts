"use client"

type FilterCondition = 'exact' | 'fitting' | 'like' | 'before' | 'after' | 'beforeInc' | 'afterInc'
type OrderDirection = 'asc' | 'desc' | 'none' | string
type APIResponse<T = any> = {
    success: boolean
    message?: string
    data?: T
}
export interface IAPIService<T = any> {
    readonly get: ({
        filter, order, paginate
    }: {
        filter?: {
            key: string
            value: string
            condition: FilterCondition
        }[],
        order?: {
            key: string
            direction?: OrderDirection
            priority?: number
        }[],
        paginate?: {
            number?: number
            size?: number
        }
    }) => Promise<APIResponse<T[]>>
    readonly getById: (id: any) => Promise<APIResponse<T>>
    readonly add: (entity: T) => Promise<APIResponse<T>>
    readonly update: (id: any, entity: T) => Promise<APIResponse<T>>
    readonly remove: (id: any) => Promise<APIResponse<null>>
    readonly delete: (id: any) => Promise<APIResponse<null>>
}

export class APIService<T = any> implements IAPIService<T> {
    /**
     *
     */
    constructor(
        protected _apiUrl: string
    ) {
        // Do nothing
    }
    private encode(...params: {
        key: string
        value: any
    }[]) {
        return this._apiUrl + '?' + params
            .filter(p => p.value)
            .map(p => `${p.key}=${encodeURIComponent(JSON.stringify(p.value))}`)
            .join('&')
    }
    get(request: {
        filter?: {
            key: string
            value: string
            condition: FilterCondition
        }[],
        order?: {
            key: string
            direction?: OrderDirection
            priority?: number
        }[],
        paginate?: {
            number?: number
            size?: number
        }
    }) {
        return fetch(this._apiUrl,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request),
            }
        ).then((res) => res.json())
            .then(r => r as APIResponse<T[]>)
    }
    getById(id: any) {
        return fetch(this.encode({ key: 'id', value: id }),
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        ).then((res) => res.json())
            .then(r => r as APIResponse<T>)
    }
    add(entity: T) {
        return fetch(this._apiUrl,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entity),
            }
        ).then((res) => res.json())
            .then(r => r as APIResponse<T>)
    }
    update(id: any, entity: T) {
        return fetch(
            this.encode({ key: 'id', value: id }),
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(entity),
            })
            .then((res) => res.json())
            .then(r => r as APIResponse<T>)
    }
    delete(id: any) {
        return fetch(
            this.encode({ key: 'id', value: id }),
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then((res) => res.json())
            .then(r => r as APIResponse<null>)
    }
    remove(id: any) {
        return fetch(
            this.encode({ key: 'id', value: id }, { key: 'type', value: true }),
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            .then((res) => res.json())
            .then(r => r as APIResponse<null>)
    }
}

export type APIServiceStore = {
    create: <T = any>(
        key: string,
        apiUrl: string
    ) => void
    createCustom: <
    T,
    S extends (IAPIService<T> & APIService<T>)>(
        key: string,
        service: S
    ) => void
    get: <T = any>(key: string) => IAPIService<T>
}

export const apiServiceStore: APIServiceStore = ((): APIServiceStore => {
    const services: { [key: string]: [IAPIService<any>, APIService<any>] } = {}
    const create = <T = any>(
        key: string,
        apiUrl: string
    ) => {
        const ser = new APIService<T>(apiUrl)
        services[key] = [ser as IAPIService<T>, ser]
    }
    const createCustom1 = <
        T,
        S extends APIService<T>>(
            key: string,
            service: S
        ) => {
        services[key] = [service as IAPIService<T>, service]
    }
    const getService = <T = any>(key: string) => {
        const ser = services[key]
        if (!ser || !(ser[1] instanceof APIService))
            throw new Error('Service is not initialized')
        return ser[0] as IAPIService<T>
    }
    return {
        create: create,
        createCustom: createCustom1,
        get: getService
    }
})()

export function getAPIService<T=any>(apiUrl: string): IAPIService<T> {
    return new APIService<T>(apiUrl)
}
