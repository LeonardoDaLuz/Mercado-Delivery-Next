import { ParsedUrlQuery } from 'querystring';

export function combinePathWithQuery(path: string, query: string) {

    if (path.charAt(path.length - 1) === '?') {
        path = path.replace('?','')
    }

    if (path.charAt(path.length - 1) !== '/') {
        path += '/';
    }

    if (query.charAt(0) !== '?') {
        query = '?' + query;
    }

    return path+query;
}

export function combinePathWithQuery2(path: string, query: ParsedUrlQuery) {

    const urlSearchParams = new URLSearchParams();
    Object.keys(query).forEach((key: string) => {
        urlSearchParams.append(key, query[key] as string);
    })    

    return path+'?'+urlSearchParams.toString();
}