import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import { configureStore, ThunkAction, Dispatch } from '@reduxjs/toolkit'
import products from './slices/productsSlice';
import product from './slices/productSlice';
import carrinho from './slices/chartSlice';
import categories from './slices/categoriesSlice';
import carousel from './slices/carouselSlice';
import user from './slices/userSlice';

import {createStore, AnyAction, Store, Action} from 'redux';

const makeStore = () => {

    const store = configureStore({
        reducer: {
            products,
            product,
            carrinho,
            categories,
            carousel,
            user
        }
    });

    return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;


export const storeWrapper = createWrapper<AppStore>(makeStore, { debug: false });

