export async function GET(req: Request, { params }: { params: { slug: string[] } }) {
    const paramsIn = {
        headers: [] as any[],
        params: {
            slug: params.slug,
            query: [] as any[],
        }
    }
    const url = new URL(req.url)
    url.searchParams.forEach(p => {
        paramsIn.params.query.push(p)
    })
    return Response.json(paramsIn, { status: 201 })
}