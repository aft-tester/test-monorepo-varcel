"use client";

import React, { useState } from 'react'
import { getAPIService } from '../core/api.service';

const Table = async ({
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
    const apiService = getAPIService<any>(`${apiUri}/${path}`)
    // const [data, setData] = useState<any[]>([])
    const data: any[] = await apiService.get({})
            .then((r) => r.data ?? [])
    return (
        <table>
            <tr style={{
                textAlign: 'center',
                verticalAlign: 'middle',
                fontStyle: 'italic',
                fontSize: '1.25em',
                maxWidth: '10em'
            }}>
                {columns.map(c => (<td>{c.name}</td>))}
            </tr>
                {data.map(r => (
                    <tr>
                        {columns.map(c => (
                            <td>{r[c.key]}</td>
                        ))}
                    </tr>
                ))}
        </table>
    )
}

export default Table