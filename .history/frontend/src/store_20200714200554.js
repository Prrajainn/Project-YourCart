import {createStore , combineReducers, compose, applyMiddleware,c} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducer/productReducers';
 const  initialState= {};
 const reducer= combineReducers({
     productList : productListReducer,
 })
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
 const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
 export default store;