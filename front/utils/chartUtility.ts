export function quantosProdutosTemNoCarrinho(carrinho: any) {

    let qty = 0;
    for (var key in carrinho.produtos) {
        qty += carrinho.produtos[key].quantidade;
    }
    return qty;
}

export function custoTotalNoCarrinho(carrinho: any) {
    
    let custo = 0;

    for (var key in carrinho.produtos) {
        let prod = carrinho.produtos[key];
        custo += (parseFloat(prod.data.price) * parseInt(prod.quantidade));
    }
    return custo.toFixed(2);
}

export function howManyOfTheseWereAddedToTheCart(carrinho: any, id: string) {

    if(carrinho===undefined)
        return 0;

    let registroProduto = carrinho.produtos[id];

    if (registroProduto == undefined)
        return 0;

    return registroProduto.quantidade;
}