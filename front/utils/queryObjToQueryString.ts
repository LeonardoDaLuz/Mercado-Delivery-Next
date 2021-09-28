import { ParsedUrlQuery } from 'querystring';

export default function queryObjToQueryString(queryObj: ParsedUrlQuery) {
    const urlSearchParams = new URLSearchParams();
    Object.keys(queryObj).forEach(key => {
        urlSearchParams.append(key, queryObj[key] as string);
    })
    
    return urlSearchParams.toString();
}