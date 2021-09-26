import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import produce from 'immer';
import { combinePathWithQuery2 } from 'utils/combinePathWithQuery';


const initialState = {
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

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        loadProductSuccess: (state, action) => {
            Object.assign(state, action.payload.data);
        },
        loadProductStart: () => { },
        loadProductFailure: (state, action) => {
        },


        updateProductSuccess: (state, action) => {
            Object.assign(state, action.payload.data);
        },
        updateProductStart: (state, action) => { },
        updateProductFailure: (state, action) => { },



        likeProductSuccess: (state, action) => {
            Object.assign(state, action.payload.data);
        },
        likeProductStart: (state, action) => { },
        likeProductFailure: (state, action) => { },



        deleteProductSuccess: (state, action) => {
            Object.assign(state, initialState);
        },

        deleteProductStart: (state, action) => { },
        deleteProductFailure: (state, action) => { }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload);
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

export const loadProduct = (id, callback) => {

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
        } catch (err) {
            dispatch(loadProductFailure({ error: err.message, url }));
        }
    }
}

export const likeProduct = (id) => {

    return dispatch => {

        const url = `http://localhost:3001/like/${conta}/${id}`;
        dispatch(likeProductStart({ url }));

        const conta = 0;
        fetch(url, { method: 'POST' })
            .then(body => body.json())
            .then(data => {
                dispatch(likeProductSuccess({ data, url }));
            });
    }
}

export const updateProduct = (editedProduct, callBackOnSuccess, callbackOnFail) => {
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


export const deleteProduct = (product, callBackOnSuccess, callbackOnFail) => {
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
                console.error(UPDATE_PRODUCT_FAILURE, data.result);
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
