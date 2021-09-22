export default function prettyJSONStringify(obj) {
    return <pre>{JSON.stringify(obj, null, 2)}</pre>
}