"use client"

import React from "react"
import { getAPIService } from "../core/api.service"
import Table from "../tables/simple"

const Main = ({
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
    const { apiUri, path } = requestConfig
    const apiService = getAPIService(`${apiUri}/${path}`)
    const [data, setData] = React.useState<any[]>([])
    React.useEffect(() => {
        apiService.get({})
            .then(d => {
                debugger
                setData(d.data ?? [])
            })
    }, [])
    return (
        <Table
            columns={columns}
            data={data}
        />
    )
}

export default Main