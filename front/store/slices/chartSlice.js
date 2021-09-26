import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import { combinePathWithQuery2 } from 'utils/combinePathWithQuery';
import { nestedPropertySeletor } from '/utils/nestedPropertySelector'

const initialState = {
    produtos: {},
};


export const chartSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        loadChartStart: (state) => {
        },
        loadChartSuccess: (state, action) => {
            Object.assign(state, action.payload.data)
        },
        loadChartFailure: (state) => {
        },
        changeChartProductQuantityStart: (state) => {
        },
        changeChartProductQuantitySuccess: (state, action) => {
            Object.assign(state, action.payload.data)
        },
        changeChartProductQuantityFailure: (state) => {
        },
        addProductInChartStart: (state) => {
        },
        addProductInChartSuccess: (state, action) => {
            Object.assign(state, action.payload.data)
        },
        addProductInChartFailure: (state) => {
        },


    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.carrinho,
            };
        },
    },
})

export const { loadChartStart, loadChartSuccess, loadChartFailure, changeChartProductQuantityStart, changeChartProductQuantitySuccess, changeChartProductQuantityFailure, addProductInChartStart, addProductInChartSuccess, addProductInChartFailure } = chartSlice.actions

export default chartSlice.reducer;


/* THUNKS: */


export const carregarCarrinho = (id, quantidade) => {

    return async dispatch => {

        const url = `http://localhost:3001/carrinho/`;

        dispatch(loadChartStart({ url }));

        let response = await fetch(url, { method: 'GET' });

        if (response.ok) {
            let data = await response.json();
            dispatch(loadChartSuccess({ data, url }));
        }
        else {
            let data = await response.text();
            dispatch(loadChartFailure({ response: data, status: response.status, url }));

        }
    }
}

export const adicionarProdutoAoCarrinho = (id, quantidade) => {

    return async dispatch => {
        const url = `http://localhost:3001/carrinho/addproduto/${id}/${quantidade}`;

        dispatch(addProductInChartStart({ url }));

        let response = await fetch(url, { method: 'POST' });
        if (response.ok) {
            let data = await response.json();
            dispatch(addProductInChartSuccess({ data }));
        }
        else {
            dispatch(addProductInChartFailure({ url, status: response.status }));

        }
    }
}

export const editarQuantidadeDoProdutoAoCarrinho = (id, quantidade) => {

    return async (dispatch, getState) => {

        quantidade = parseInt(quantidade);
        if (isNaN(quantidade))
            quantidade = 0;

        let carrinhoData = getState().carrinho;

        if (carrinhoData.produtos[id] === undefined)
            carrinhoData.produtos[id] = {
                quantidade: quantidade,
                preco: 25,
                data: { preco: 0 }
            }
        else
            carrinhoData.produtos[id].quantidade = quantidade;
        
        const url = `http://localhost:3001/carrinho/modificarQuantidadeProduto/${id}/${quantidade}`;

        dispatch(changeChartProductQuantityStart({ url }));

        let response = await fetch(url, { method: 'POST' });
        if (response.ok) {
            let data = await response.json();
            dispatch(changeChartProductQuantitySuccess({ data }));
        }
        else {
            dispatch(changeChartProductQuantityFailure({ url, status: response.status }));

        }
    }
}


