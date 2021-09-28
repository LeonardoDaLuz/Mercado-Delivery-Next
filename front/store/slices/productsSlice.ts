import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import produce from 'immer';
import { combinePathWithQuery2 } from 'utils/combinePathWithQuery';
import { ParsedUrlQuery } from 'querystring';
import { AppThunk } from 'store';
export type ProductsState = {
    status: string,
    searchs: {
        [key: string]: Search
    },

}

export interface Search {
    url: string,
    found: Product[]
}

export interface Product {
    _id: string,
    img: string,
    indice: number,
    codigo: number,
    likes: number[],
    offer: {
        time_range: {
            starts: string,
            ends: string
        },
        off_price: number,
        type: "week" | "day" | "month",
        enabled: boolean
    },
    imgs: Array<string>,
    price: number,
    description: string,
    categories: Array<string>,
    title: string,
    stock: any
}

export interface PayloadType {
    data?: Product[],
    path?: string,
    query?: ParsedUrlQuery,
    url?: string,
    error?: any,
    status?: number
}

const initialState: ProductsState = {
    status: 'IDLE',
    searchs: {},
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadMoreProductsStart: (state, action: PayloadAction<PayloadType>) => {
            state.status = "LOADING";
        },
        loadMoreProductsSuccess: (state: ProductsState, action: PayloadAction<PayloadType>) => {
            const currentKey = combinePathWithQuery2(action.payload.path, action.payload.query);

            const search = state.searchs[currentKey];
            let previousProductList = search.found;

            previousProductList = previousProductList || [];
            search.found = previousProductList.concat(action.payload.data || []);
            state.status = 'SUCCESS';

        },
        loadMoreProductsFailure: (state, action: PayloadAction<PayloadType>) => {
            state.status = 'FAILURE';
        },
        resetProductList: (state) => {
            //  Object.keys(state.mainSearch).forEach(key => state.mainSearch[key] = []);
        },
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.products,
            };
        },
    },
})

export const { loadMoreProductsStart, loadMoreProductsSuccess, loadMoreProductsFailure, resetProductList } = productsSlice.actions

export default productsSlice.reducer;


/* THUNKS: */

export const loadMoreProducts = (path: string, query: ParsedUrlQuery, quantity: number): AppThunk => {
    return async (dispatch, getState) => {

        let currentLoadedProducts = getState().products.searchs[combinePathWithQuery2(path, query)]?.found || [];

        const slicesFrom = currentLoadedProducts.length;

        //Montando a url de pesquisa q será interpretada pelo backend.
        let url = "http://localhost:3001" + "/search" + combinePathWithQuery2(path + '/' + slicesFrom + "/" + (slicesFrom + quantity), query);

        //fazendo as requisições e a emissão os actions.
        await dispatch(loadMoreProductsStart({ url }));

        const response = await fetch(url);

        try {
            const data = await response.json();
            dispatch(loadMoreProductsSuccess({ data, path, query, url }));
        } catch (err: any) {
            dispatch(loadMoreProductsFailure({ error: err.message, status: response.status, url }));
        }
    }
}

export const reloadProductList = (path: string, query: ParsedUrlQuery, quantidade: number): AppThunk => {
    return async (dispatch, getState) => {
        dispatch(resetProductList());
        dispatch(loadMoreProducts(path, query, quantidade));
    }
}

