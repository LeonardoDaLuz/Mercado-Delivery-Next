import type { NextRouter } from 'next/router';

export function getUrlPathWithoutQuery(router: NextRouter) {
    const splited = router.asPath.split('?');
        
    return splited[0];
}