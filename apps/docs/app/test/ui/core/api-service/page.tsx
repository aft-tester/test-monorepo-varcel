import { APIService, getAPIService } from "./data-getter"
import { SimpleTable } from "@repo/ui/tables"
import React from "react"

export default function Page() {
    const apiService = new APIService<any>(`${process.env.API_URL}/api/movies`)
    let data: any[] = []
    apiService.get({})
        .then(d => data = d.data ?? [])
    return (
        <div>
            <h1>Table Test Page</h1>
            <SimpleTable
                requestConfig={{
                    apiUri: process.env.API_URL,
                    path: "api/movies"
                }}
                columns={[
                    {
                        name: 'Id',
                        key: '_id'
                    },
                    {
                        name: 'Account',
                        key: 'account_id'
                    },
                    {
                        name: 'Limit',
                        key: 'limit'
                    },
                    {
                        name: 'Products',
                        key: 'products',
                    },
                ]}
                data={data}
            />
        </div>
    )
}