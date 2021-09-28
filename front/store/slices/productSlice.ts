import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '@store';
import { HYDRATE } from 'next-redux-wrapper';

interface Product {
    _id: string,
    title: string,
    categories: string[],
    description: string,
    imgs: string[],
    price: number,
    stock: number,
    offer: {
        time_range: {
            starts: number,
            ends: number
        },
        off_price: number,
        enabled: boolean
    }
}

const initialState: Product = {
    _id: '',
    title: '',
    categories: [],
    description: '',
    imgs: [],
    price: 0,
    stock: 1,
    offer: {
        time_range: {
            starts: 0,
            ends: 0
        },
        off_price: 0,
        enabled: false
    }
};

interface ProductPayload {
    data?: Product,
    url: string,
    error?: string,
    status?: number
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loadProductSuccess: (state, action: PayloadAction<ProductPayload>) => {
            Object.assign(state, action.payload.data);
        },
        loadProductStart: (state,  action: PayloadAction<ProductPayload>) => { },
        loadProductFailure: (state,  action: PayloadAction<ProductPayload>) => {
        },


        updateProductSuccess: (state, action: PayloadAction<ProductPayload>) => {
            Object.assign(state, action.payload.data);
        },
        updateProductStart: (state, action: PayloadAction<ProductPayload>) => { },
        updateProductFailure: (state, action) => { },



        likeProductSuccess: (state, action: PayloadAction<ProductPayload>) => {
            Object.assign(state, action.payload.data);
        },
        likeProductStart: (state, action: PayloadAction<ProductPayload>) => { },
        likeProductFailure: (state, action) => { },



        deleteProductSuccess: (state, action: PayloadAction<ProductPayload>) => {
            Object.assign(state, initialState);
        },

        deleteProductStart: (state, action: PayloadAction<ProductPayload>) => { },
        deleteProductFailure: (state, action: PayloadAction<ProductPayload>) => { }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            //console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload.product,
            };
        },
    },
})

export const { loadProductStart, loadProductFailure, loadProductSuccess, updateProductStart, updateProductSuccess, updateProductFailure, deleteProductSuccess, deleteProductStart, deleteProductFailure, likeProductStart, likeProductSuccess, likeProductFailure } = productSlice.actions

export default productSlice.reducer;


/* THUNKS: */

export const loadProduct = (id: string, callback: Function): AppThunk => {

    return async dispatch => {

        const url = 'http://localhost:3001/product/' + id;
        dispatch(loadProductStart({ url }));

        const response = await fetch(url);
        try {
            const data = await response.json();
            //   console.log('okok', data)
            if ("title" in data) {
                dispatch(loadProductSuccess({ data, url }));
            } else {
                dispatch(loadProductFailure({ error: "product not found", url }));
            }
        } catch (err: any) {
            dispatch(loadProductFailure({ error: err.message, url }));
        }
    }
}

export const likeProduct = (id: string): AppThunk => {

    return dispatch => {
        
        const conta = 0;
        const url = `http://localhost:3001/like/${conta}/${id}`;
        dispatch(likeProductStart({ url }));


        fetch(url, { method: 'POST' })
            .then(body => body.json())
            .then(data => {
                dispatch(likeProductSuccess({ data, url }));
            });
    }
}

export const updateProduct = (editedProduct: Product, callBackOnSuccess: Function, callbackOnFail: Function): AppThunk => {
    return async dispatch => {

        const url = 'http://localhost:3001/product/' + editedProduct._id;

        dispatch(updateProductStart({ url }));

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',

            },
            body: JSON.stringify(editedProduct)
        });

        if (response.ok) {
            let data = await response.json();
            if (data.result && data.result.ok) {
                dispatch(updateProductSuccess({ data, url }));

                if (callBackOnSuccess)
                    callBackOnSuccess();
            } else {
                dispatch(updateProductFailure({ data: data.product, url }));
                //   console.error(UPDATE_PRODUCT_FAILURE, data.result);
                if (callBackOnSuccess)
                    callBackOnSuccess();
            }

        } else {
            dispatch(updateProductFailure({ status: response.status }));
            //    console.error(response.status);
            if (callbackOnFail)
                callBackOnSuccess();
        }
    }
}


export const deleteProduct = (product: Product, callBackOnSuccess: Function, callbackOnFail: Function): AppThunk => {
    return async dispatch => {

        const url = 'http://localhost:3001/product/' + product._id;

        dispatch(deleteProductStart({ url }));

        let response = await fetch(url, { method: 'DELETE' });

        if (response.ok) {
            let data = await response.json();
            if (data.result && data.result.ok) {
                dispatch(deleteProductSuccess({ url }));
                if (callBackOnSuccess)
                    callBackOnSuccess();
            } else {
                dispatch(deleteProductFailure({ data: data.product, url }));

                if (callBackOnSuccess)
                    callBackOnSuccess();
            }

        } else {
            dispatch(deleteProductFailure({ status: response.status, url }));
            console.error(response.status);
            if (callbackOnFail)
                callBackOnSuccess();
        }
    }
}
