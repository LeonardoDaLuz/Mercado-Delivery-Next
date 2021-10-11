import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { changeChartProductQuantityFailure, ProductRegister } from '@slices/chartSlice';
import { Product } from '@slices/productsSlice';
import { AppThunk } from '@store';
import { WritableDraft } from 'immer/dist/internal';
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
    delivery: 'preparing_shipment' | 'out_for_delivery' | 'waiting_payment',
    deliveryForecast?: string,
    createdAt: string,
    address: {
        cpf: string,
        name: string,
        cep: string,
        street: string,
        district: string,
        city: string,
        number: number,
        telephone: string,
        complement: string
    },
    payment: {
        form: "on_delivery" | "credit" | "pix" | "boleto" | "undefined",
        status: 'waiting' | 'approved' |  'payment_on_delivery',
    }

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
        savePurchaseStart: (state, action: PayloadAction<PurchasesPayload>) => {

        },
        savePurchaseSuccess: (state, action: PayloadAction<PurchasesPayload>) => {
            state[action.payload.purchase!._id] = action.payload.purchase!;
        },
        savePurchaseFailure: (state, action: PayloadAction<PurchasesPayload>) => {

        },
        addProductQuantityOnPurcrhase: (state, action: PayloadAction<{ purchaseId: string, quantity: number, productId: string }>) => {
            const purchase = state[action.payload.purchaseId];
            const productRegister = purchase.produtos[action.payload.productId];
            productRegister.quantidade += action.payload.quantity;
        },


        changeAddressStart: (state, action: PayloadAction<PurchasesPayload>) => {

        },
        changeAddressSuccess: (state, action: PayloadAction<PurchasesPayload>) => {
            state[action.payload.purchase!._id] = action.payload.purchase!;
        },
        changeAddressFailure: (state, action: PayloadAction<PurchasesPayload>) => {

        },

        confirmDeliveryPaymentStart: (state, action: PayloadAction<PurchasesPayload>) => {

        },
        confirmDeliveryPaymentSuccess: (state, action: PayloadAction<PurchasesPayload>) => {
            state[action.payload.purchase!._id] = action.payload.purchase!;
        },
        confirmDeliveryPaymentFailure: (state, action: PayloadAction<PurchasesPayload>) => {

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

export const { loadPurchasesStart, loadPurchasesSuccess, loadPurchasesFailure, purchaseCreated, savePurchaseStart, savePurchaseSuccess, savePurchaseFailure, addProductQuantityOnPurcrhase, changeAddressStart, changeAddressSuccess, changeAddressFailure, confirmDeliveryPaymentStart,    confirmDeliveryPaymentSuccess,    confirmDeliveryPaymentFailure } = purchasesSlice.actions

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

export const savePurchaseThunk = (purchrase: Purchase, callbackOnSuccess: Function, callbackOnFailure?: Function): AppThunk => {
    return async (dispatch, getState) => {

        const url = 'http://localhost:3001/purchases/' + purchrase._id;
        dispatch(savePurchaseStart({ url }));
        const user = getState().user;

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(purchrase),
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': user.token
            }
        });

        const text = await response.text();
        try {
            const data = JSON.parse(text);
            if (data._id === purchrase._id) {
                dispatch(savePurchaseSuccess({ url, purchase: data }));
                if (callbackOnSuccess)
                    callbackOnSuccess();
            } else {
                dispatch(savePurchaseFailure({ url, response: text, error: "stranger response" }));
                if (callbackOnFailure)
                    callbackOnFailure();
            }
        } catch (err: any) {
            dispatch(savePurchaseFailure({ url, response: text, error: err.stack }));
        }
    }
}


export const confirmPaymentThunk = (purchrase: Purchase, callbackOnSuccess: Function, callbackOnFailure?: Function): AppThunk => {
    return async (dispatch, getState) => {

        const url = 'http://localhost:3001/purchases/' + purchrase._id+"/confirmDeliveryPayment";
        dispatch(confirmDeliveryPaymentStart({ url }));
        const user = getState().user;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'x-access-token': user.token
            }
        });

        const text = await response.text();
        try {
            const data = JSON.parse(text);
            if (data._id === purchrase._id) {
                dispatch(confirmDeliveryPaymentSuccess({ url, purchase: data }));
                if (callbackOnSuccess)
                    callbackOnSuccess();
            } else {
                dispatch(confirmDeliveryPaymentFailure({ url, response: text, error: "stranger response" }));
                if (callbackOnFailure)
                    callbackOnFailure();
            }
        } catch (err: any) {
            dispatch(confirmDeliveryPaymentFailure({ url, response: text, error: err.stack }));
        }
    }
}


