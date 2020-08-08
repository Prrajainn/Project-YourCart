import {createStore , combineReducers, compose, applyMiddleware} from 'redux';
import { productListReducer } from './reducer/productReducers';
 const  initialState= {};
 const reducer= combineReducers({
     productList : productListReducer,
 })
 const store = createStore(reducer, initialState, compose(applyMiddleware()));
 export default store;