export default function queryObjToQueryString() {
    const urlSearchParams = new URLSearchParams();
    Object.keys(query).forEach(key => {
        urlSearchParams.append(key, query[key]);
    })
    
    return urlSearchParams.toString();
}