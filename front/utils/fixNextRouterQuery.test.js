import fixNextRouterQuery from "./fixNextRouterQuery";

const window = {};

test('fix next router query', () => {

    const router = {
        query: {
            testea: 'abacaxi'

        },
        pathname: 'http://localhost:3000/editProduct/[id]'
    }

    window.location = {
        href: 'http://localhost:3000/editProduct/606d1ab6a0df091220a423d0?testea=1&testeb=2'
    }

    fixNextRouterQuery(router, window);

    //   expect(router.query['testea']).toBe('1');
    expect(router.query['id']).toBe('606d1ab6a0df091220a423d0');
    expect(router.query['testeb']).toBe('2');
    expect(router.query['testea']).toBe('abacaxi');
})


test('fix next router query 2', () => {
    const router = {
        query: {

        },
        pathname: 'http://localhost:3000/editProduct/[id]'
    }

    window.location = {
        href: 'http://localhost:3000/editProduct/606d1ab6a0df091220a423d0'
    }

    fixNextRouterQuery(router, window);

    //   expect(router.query['testea']).toBe('1');
    expect(router.query['id']).toBe('606d1ab6a0df091220a423d0');
})

test('fix next router query 3', () => {
    const router = {
        query: {
            id: 'abacate'
        },
        pathname: 'http://localhost:3000/editProduct/[id]'
    }

    window.location = {
        href: 'http://localhost:3000/editProduct/606d1ab6a0df091220a423d0'
    }

    fixNextRouterQuery(router, window);

    //   expect(router.query['testea']).toBe('1');
    expect(router.query['id']).toBe('abacate');
})