import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@slices/productsSlice';
import { AppThunk } from '@store';
import { HYDRATE } from 'next-redux-wrapper';

interface ChartState {
    conta: number
    produtos: {
        [key: string]: ProductRegister
    },
    status: string
}

interface ChartPayload {
    url?: string,
    status?: number,
    chart?: ChartState
}

interface ProductRegister {
    quantidade: number,
    preco?: number,
    data?: Product
}

const initialState: ChartState = {
    produtos: {},
    conta: -1,
    status: 'IDLE'
};


export const chartSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        loadChartStart: (state, action: PayloadAction<ChartPayload>) => {
        },
        loadChartSuccess: (state, action: PayloadAction<ChartPayload>) => {
            Object.assign(state, action.payload.chart)
        },
        loadChartFailure: (state, action: PayloadAction<ChartPayload>) => {
        },
        changeChartProductQuantityStart: (state, action: PayloadAction<ChartPayload>) => {
        },
        changeChartProductQuantitySuccess: (state, action: PayloadAction<ChartPayload>) => {
            Object.assign(state, action.payload.chart)
        },
        changeChartProductQuantityFailure: (state, action: PayloadAction<ChartPayload>) => {
        },
        addProductInChartStart: (state, action: PayloadAction<ChartPayload>) => {
        },
        addProductInChartSuccess: (state, action: PayloadAction<ChartPayload>) => {
            Object.assign(state, action.payload.chart)
        },
        addProductInChartFailure: (state, action: PayloadAction<ChartPayload>) => {
        },


    },
   /* extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.carrinho,
            };
        },
    },*/
})

export const { loadChartStart, loadChartSuccess, loadChartFailure, changeChartProductQuantityStart, changeChartProductQuantitySuccess, changeChartProductQuantityFailure, addProductInChartStart, addProductInChartSuccess, addProductInChartFailure } = chartSlice.actions

export default chartSlice.reducer;


/* THUNKS: */


export const carregarCarrinho = (id: string, quantidade: number): AppThunk => {

    return async dispatch => {

        const url = `http://localhost:3001/carrinho/`;

        dispatch(loadChartStart({ url }));

        let response = await fetch(url, { method: 'GET' });

        if (response.ok) {
            let data = await response.json();
            dispatch(loadChartSuccess({ chart: data, url }));
        }
        else {
            let data = await response.text();
            dispatch(loadChartFailure({ status: response.status, url }));

        }
    }
}

export const adicionarProdutoAoCarrinho = (id: string, quantidade: number): AppThunk => {

    return async dispatch => {
        const url = `http://localhost:3001/carrinho/addproduto/${id}/${quantidade}`;

        dispatch(addProductInChartStart({ url }));

        let response = await fetch(url, { method: 'POST' });
        if (response.ok) {
            let data = await response.json();
            dispatch(addProductInChartSuccess({ chart: data, url }));
        }
        else {
            dispatch(addProductInChartFailure({ url, status: response.status }));

        }
    }
}

export const editarQuantidadeDoProdutoAoCarrinho = (id: string, quantidade: number | string): AppThunk => {

    return async (dispatch, getState) => {

        quantidade = parseInt(quantidade as string);
        if (isNaN(quantidade))
            quantidade = 0;

        let carrinhoData = getState().carrinho;

        if (carrinhoData.produtos[id] === undefined)
            carrinhoData.produtos[id] = {
                quantidade: quantidade,
                preco: 25,
               
            }
        else
            carrinhoData.produtos[id].quantidade = quantidade;
        
        const url = `http://localhost:3001/carrinho/modificarQuantidadeProduto/${id}/${quantidade}`;

        dispatch(changeChartProductQuantityStart({ url }));

        let response = await fetch(url, { method: 'POST' });
        if (response.ok) {
            let data = await response.json();
            dispatch(changeChartProductQuantitySuccess({ chart: data, url }));
        }
        else {
            dispatch(changeChartProductQuantityFailure({ url, status: response.status }));

        }
    }
}


