export default function queryObjToQueryString(queryObj) {
    const urlSearchParams = new URLSearchParams();
    Object.keys(queryObj).forEach(key => {
        urlSearchParams.append(key, queryObj[key]);
    })
    
    return urlSearchParams.toString();
}