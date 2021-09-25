import waitFor from "./waitFor";


test('wait for', async () => {
    let teste;

    setTimeout(() => { teste = 'definido' }, 1000);

    waitFor(() => teste);

    expect(teste).toBeUndefined();


})

test('wait for 2', async () => {
    let teste;

    setTimeout(() => { teste = 'definido' }, 1000);

    await waitFor(() => teste);

    expect(teste).toBe('definido');


})