import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import produce from 'immer';
import { combinePathWithQuery2 } from 'utils/combinePathWithQuery';

const initialState = {
    status: 'IDLE',
    loadingStarted: null,
    mainSearch: [],
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        loadMoreProductsStart: (state) => {
            state.status = "LOADING";
        },
        loadMoreProductsSuccess: (state, action) => {
            const currentKey = combinePathWithQuery2(action.payload.path, action.payload.query);
            let previousProductList = state[currentKey];
            previousProductList = previousProductList === undefined ? [] : previousProductList;
            state[currentKey] = previousProductList.concat(action.payload.data);
            state.status = 'SUCCESS';
        },
        loadMoreProductsFailure: (state) => {
            state.status = 'FAILURE';
        },
        resetProductList: (state) => {
            Object.keys(state.mainSearch).forEach(key => state.mainSearch[key] = []);
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

export const loadMoreProducts = (path, query, quantity) => {
    return async (dispatch, getState) => {

        let currentLoadedProducts = getState().products[combinePathWithQuery2(path, query)];

        if (currentLoadedProducts === undefined)
            currentLoadedProducts = [];

        const slicesFrom = currentLoadedProducts.length;

        //Montando a url de pesquisa q será interpretada pelo backend.
        let url = "http://localhost:3001" + "/search" + combinePathWithQuery2(path + '/' + slicesFrom + "/" + (slicesFrom + quantity), query);

        //fazendo as requisições e a emissão os actions.
        await dispatch(loadMoreProductsStart({ url }));

        const response = await fetch(url);

        try {
            const data = await response.json();
            dispatch(loadMoreProductsSuccess({ data, path, query, url }));
        } catch (err) {
            dispatch(loadMoreProductsFailure({ error: err.message, status: response.status, url }));
        }
    }
}

export const reloadProductList = (path, query, quantidade) => {
    return async (dispatch, getState) => {
        dispatch(resetProductList());
        dispatch(loadMoreProducts(path, query, quantidade));
    }
}

