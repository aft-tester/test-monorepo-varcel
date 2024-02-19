import { ApiTest } from "@repo/ui/api-test"
export default function Page() {

    return (
        <div>
            <h1>Mongo Test Page</h1>
            <ApiTest
                apiUri={process.env.API_URL}
                path="api/mongo"
            />
        </div>
    )
}