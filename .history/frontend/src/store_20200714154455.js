import {createStore , combineReducers, compose, applyMiddleware} from 'redux';
imp
import { productListReducer } from './reducer/productReducers';
 const  initialState= {};
 const reducer= combineReducers({
     productList : productListReducer,
 })
 const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
 export default store;