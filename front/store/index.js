import { createWrapper } from "next-redux-wrapper";
import { configureStore } from '@reduxjs/toolkit'
import products from './slices/productsSlice';
import product from './slices/productSlice';
import carrinho from './slices/chartSlice';
import categories from './slices/categoriesSlice';
import carousel from './slices/carouselSlice';

const makeStore = () => {

    const store = configureStore({
        reducer: {
            products,
            product,
            carrinho,
            categories,
            carousel
        }
    });

    return store;
};

export const storeWrapper = createWrapper(makeStore, { debug: false });