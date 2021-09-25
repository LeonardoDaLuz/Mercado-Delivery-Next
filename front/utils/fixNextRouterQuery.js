export default function fixNextRouterQuery(router, _window) {
    
    const __window = _window? _window : typeof window !== 'undefined' ? window : undefined;

    if (typeof __window === 'undefined')
        return;
    
    let url = __window.location.href;

    const [path, searchParamString] = url.split('?');

    if (searchParamString) {

        const urlSearchParams = new URLSearchParams(searchParamString);
        const keys = [...urlSearchParams.keys()];

        for (let key of keys) {
            if (!router.query[key])
                router.query[key] = urlSearchParams.get(key);
        }
    }

    const lastPathKey = router.pathname.split('/').pop();
    const slug = lastPathKey.includes('[') ? lastPathKey.substring(1, lastPathKey.length - 1) : undefined;

    if (slug) {
        if (!router.query[slug]) {
            router.query[slug] = path.split('/').pop();
        }
    }

}