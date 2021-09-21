import { applyMiddleware, createStore } from 'redux';
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const makeStore = () => {
    // Create store
//    const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));
    
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
  
    // Return store
    return store;
};
  
export const storeWrapper = createWrapper(makeStore, { debug: false });