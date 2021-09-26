import { combineReducers } from 'redux';
import products from '../slices/productsSlice';
import product from '../slices/productSlice';
import carrinho from '../slices/chartSlice';
import categories from '../slices/categoriesSlice';
import carousel from '../slices/carouselSlice';
import offers from './offers';

export default combineReducers({
    products,
    product,
    carrinho,
    categories,
    carousel,
    offers
});
