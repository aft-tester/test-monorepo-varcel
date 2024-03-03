import { SimpleMain } from "@repo/ui/mains"
import React from "react"

export default function Page() {
    return (
        <div>
            <h1>Table Test Page</h1>
            <SimpleMain
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
            />
        </div>
    )
}