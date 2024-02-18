export default async function Page() {
    const result = await (
        await fetch(`${process.env.API_URL}/api/webapiserver?origin=doc`, {
            next: { revalidate: 1 }
        })
    ).json()
    const text = JSON.stringify(result, null, 2)
    return (
        <div>
            <h1>Test Page</h1>
            <p>This the text page</p>
            <button style={{
                minWidth: '20em',
                minHeight: '20em',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <pre>{text}</pre>
            </button>
        </div>
    )
}