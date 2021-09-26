import { storeWrapper } from '../';


export function quantosProdutosTemNoCarrinho() {

return 0;
    const store = storeWrapper.initialState;

    let qty = 0;
    for (var key in store.getState().carrinho.produtos) {
        qty += store.getState().carrinho.produtos[key].quantidade;
    }
    return qty;
}

