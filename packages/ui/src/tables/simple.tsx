"use client";


const Table = ({
    columns, data
}: {
    columns: {
        name: string
        key: string
    }[]
    data: any[]
}) => {
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