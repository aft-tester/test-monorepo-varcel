import { ApiTest } from "@repo/ui/api-test"
export default function Page() {

    return (
        <div>
            <h1>Api Test Page</h1>
            <ApiTest
                apiUri={process.env.API_URL}
                path="api/random"
                params={{
                    firstParam: 'firstVal',
                    secondParam: 'secondVal'
                }}
            />
        </div>
    )
}