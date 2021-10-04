import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductRegister } from '@slices/chartSlice';
import { Product } from '@slices/productsSlice';
import { AppThunk } from '@store';
import { HYDRATE } from 'next-redux-wrapper';

interface PurchasesState {
    [key: string]: Purchase
}

interface PurchasesPayload {
    url?: string,
    status?: number,
    purchases?: Purchase[],
    purchase?: Purchase,
    response?: string,
    error?: any,
}

export type Purchase = {
    _id: string,
    produtos: { [key: string]: ProductRegister }
    account_id: string,
    payment: 'waiting' | 'approved' | 'payment_on_delivery',
    delivery: 'preparing_shipment' | 'out_for_delivery' | 'waiting_payment',
    deliveryForecast?: string,
    createdAt: string

}

const initialState: PurchasesState = {};


export const purchasesSlice = createSlice({
    name: 'purchases',
    initialState,
    reducers: {
        loadPurchasesStart: (state, action: PayloadAction<PurchasesPayload>) => {
        },
        loadPurchasesSuccess: (state, action: PayloadAction<PurchasesPayload>) => {
            for (let purchase of action.payload.purchases!) {
                state[purchase._id] = purchase;
            }
        },

        loadPurchasesFailure: (state, action: PayloadAction<PurchasesPayload>) => {
        },
        purchaseCreated: (state, action: PayloadAction<PurchasesPayload>) => {
            state[action.payload.purchase!._id] = action.payload.purchase as Purchase
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

export const { loadPurchasesStart, loadPurchasesSuccess, loadPurchasesFailure, purchaseCreated } = purchasesSlice.actions

export default purchasesSlice.reducer;


/* THUNKS: */
export const loadPurchasesThunk = (): AppThunk => {
    return async (dispatch, getState) => {
        const url = "http://localhost:3001/purchases";
        dispatch(loadPurchasesStart({ url }));

        const user = getState().user;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.token
            }
        });

        const text = await response.text();

        try {
            const data = JSON.parse(text);

            if (Array.isArray(data)) {
                dispatch(loadPurchasesSuccess({ purchases: data, url, response: text }))
            } else {
                dispatch(loadPurchasesFailure({ url, error: "stranger response", response: text }))
            }
        } catch (error: any) {
            dispatch(loadPurchasesFailure({ url, error: error.stack, response: text }))

        }
    }
}


