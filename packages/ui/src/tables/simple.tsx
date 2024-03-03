"use client";


const Table = ({
    requestConfig, columns, data
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
    data: any[]
}) => {
    // const { apiUri, path, params } = requestConfig
    // // const apiService = getAPIService<any>(`${apiUri}/${path}`)
    // // const [data, setData] = React.useState<any[]>([])
    // // React.useEffect(() => {
    //     apiService.get({})
    //         .then(d => setData(d.data ?? []))
    // }, [])
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