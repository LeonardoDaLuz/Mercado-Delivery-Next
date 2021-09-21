import { storeWrapper } from '../';


export function quantosDesseForamAdicionadosAoCarrinho(id) {

    console.log(storeWrapper);

    return 0;

    const store = storeWrapper.initialState;

    let { carrinho } = store.getState();

    if(carrinho===undefined)
        return 0;

    let registroProduto = store.getState().carrinho.produtos[id];

    if (registroProduto == undefined)
        return 0;

    return registroProduto.quantidade;
}

export function custoTotalNoCarrinho() {

    return 0;

    const store = storeWrapper.initialState;

    let custo = 0;
    let {carrinho} = store.getState(); 
    for (var key in carrinho.produtos) {
        let prod = carrinho.produtos[key];
        custo += (parseFloat(prod.data.price) * parseInt(prod.quantidade));
    }
    return custo.toFixed(2);
}

export function quantosProdutosTemNoCarrinho() {
    
return 0;
    const store = storeWrapper.initialState;

    let qty = 0;
    for (var key in store.getState().carrinho.produtos) {
        qty += store.getState().carrinho.produtos[key].quantidade;
    }
    return qty;
}

