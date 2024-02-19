
export default function Page() {
    return (
        <div style={{alignItems: 'center'}}>
            <p>This test directory page. To go to:</p>
            <div style={{
                padding: '2em'
            }}>
            <ul>
                <li>Home page click <a href="/">here</a></li>
                <li>Api test click <a href="/test/api-test">here</a></li>
                <li>Mongo test click <a href="/test/mongo-test">here</a></li>
                <li>Table test click <a href="/test/table-test">here</a></li>
            </ul>
            </div>
        </div>
    )
}