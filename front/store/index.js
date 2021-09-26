import { applyMiddleware, createStore } from 'redux';
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit'

const makeStore = () => {

    const store = configureStore({ reducer: rootReducer });
    
   // const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  
    return store;
};
  
export const storeWrapper = createWrapper(makeStore, { debug: false });