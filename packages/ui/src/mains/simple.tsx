"use client"

import React from "react"
import { getAPIService } from "../core/api.service"
import Table from "../tables/simple"

const Main = async ({
    requestConfig, columns
}: {
    requestConfig: {
        apiUri?: string
        path?: string
        params?: {
            [key: string]: any
        }
    },
    columns: {
        name: string
        key: string
    }[]
}) => {
    const { apiUri, path, params } = requestConfig
    const apiService = getAPIService(`${apiUri}/${path}`)

    const data = await apiService.get({})
        .then(d => d.data ?? [])
    return (
        <Table
            columns={columns}
            data={data}
        />
    )
}

export default Main