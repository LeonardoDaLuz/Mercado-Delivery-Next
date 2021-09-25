export default async function waitFor(getterFunction) {    
    while (getterFunction() === undefined) {
        await new Promise((resolve) => {
            setTimeout(() => resolve(), 32);
        })
    }
}