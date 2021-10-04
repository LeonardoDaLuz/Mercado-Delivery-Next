import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '@slices/productsSlice';
import { loadPurchasesSuccess, purchaseCreated } from '@slices/purchasesSlice';
import { AppThunk } from '@store';
import { HYDRATE } from 'next-redux-wrapper';

interface ChartState {
    produtos: {
        [key: string]: ProductRegister
    },
}

interface ChartPayload {
    url?: string,
    status?: number,
    chart?: ChartState,
    response?: string,
    error?: any,
    body?: any
}

export interface ProductRegister {
    quantidade: number,
    preco?: number,
    data?: Product
}

const initialState: ChartState = {
    produtos: {},
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
        resetChart: (state) => {
            state.produtos = {}
        },
        confirmPurchaseStart: (state, action: PayloadAction<ChartPayload>) => {

        },
        confirmPurchasSuccess: (state, action: PayloadAction<ChartPayload>) => {
            state.produtos = {}
        },
        confirmPurchaseFailure: (state, action: PayloadAction<ChartPayload>) => {

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

export const { loadChartStart, loadChartSuccess, loadChartFailure, changeChartProductQuantityStart, changeChartProductQuantitySuccess, changeChartProductQuantityFailure, addProductInChartStart, addProductInChartSuccess, addProductInChartFailure, resetChart, confirmPurchaseStart, confirmPurchasSuccess, confirmPurchaseFailure } = chartSlice.actions

export default chartSlice.reducer;


/* THUNKS: */

export const confirmPurchase = (chart: ChartState, callBackOnSuccess: Function): AppThunk => {
    return async (dispatch, getState) => {

        const url = `http://localhost:3001/chart/confirm_purchase`;
        const body = JSON.stringify(chart);

        dispatch(confirmPurchaseStart({ url, body }));
        const user = getState().user;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.token
            },
            body
        })

        const text = await response.text();

        try {
            const data = await JSON.parse(text);

            console.log('text', text);
            console.log('data', data.purchase);
            if (data['status'] === 'ok') {
                dispatch(confirmPurchasSuccess({ url, response: data }))
                dispatch(purchaseCreated({ url, purchase: data.purchase }))
                if (callBackOnSuccess)
                    callBackOnSuccess();
            } else {
                dispatch(confirmPurchaseFailure({ error: "stranger response", status: response.status, url, response: text }));
            }
        } catch (err: any) {
            dispatch(confirmPurchaseFailure({ error: err.stack, status: response.status, url, response: text }));
        }
    }
}
export const carregarCarrinho = (token: string): AppThunk => {

    return async (dispatch) => {

        const url = `http://localhost:3001/carrinho/`;

        dispatch(loadChartStart({ url }));

        let response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-access-token': token
            }

        });

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

    return async (dispatch, getState) => {
        const url = `http://localhost:3001/carrinho/addproduto/${id}/${quantidade}`;

        dispatch(addProductInChartStart({ url }));

        const { user } = getState();

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'x-access-token': user.token
            }
        });
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

        const { user } = getState();

        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'x-access-token': user.token
            }
        });
        if (response.ok) {
            let data = await response.json();
            dispatch(changeChartProductQuantitySuccess({ chart: data, url }));
        }
        else {
            dispatch(changeChartProductQuantityFailure({ url, status: response.status }));

        }
    }
}


