import {controllers} from "../../../core/controllers"


export async function GET(req: Request, { params }: { params: { slug: string[] } }) {
    const paramsIn = {
        headers: [] as any[],
        params: {
            slug: params.slug,
            query: [] as any[],
        }
    }
    const parNames = ['firstParam', 'secondParam']
    const url = new URL(req.url)
    parNames.forEach(p => {
        paramsIn.params.query.push([p, url.searchParams.get(p)])
    })
    const controller = controllers[params.slug[0] ?? '']
    let res: any[] | undefined = undefined
    if(controller) {
        const res= await controller.get()
        return Response.json(...res)
    }
    return Response.json(paramsIn, { status: 201 })
}
export async function PATCH(req: Request, { params }: { params: { slug: string[] } }) {
    const paramsIn = {
        headers: [] as any[],
        params: {
            slug: params.slug,
            query: [] as any[],
        }
    }
    const parNames = ['firstParam', 'secondParam']
    const url = new URL(req.url)
    parNames.forEach(p => {
        paramsIn.params.query.push([p, url.searchParams.get(p)])
    })
    const controller = controllers[params.slug[0] ?? '']
    let res: any[] | undefined = undefined
    if(controller) {
        const res= await controller.get()
        return Response.json(...res)
    }
    return Response.json(paramsIn, { status: 201 })
}