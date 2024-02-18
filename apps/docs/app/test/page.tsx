import { ApiTest } from "@repo/ui/api-test"
export default function Page() {

    return (
        <div>
            <h1>Test Page</h1>
            <p>This the test page</p>
            <p>In</p>
            <p>{process.env.API_URL}</p>
            <ApiTest apiUrl={`${process.env.API_URL}/api/webapiserver`}></ApiTest>
        </div>
    )
}