import {createStore , combineReducers, compose} from 'redux';
import { productListReducer } from './reducer/productReducers';
 const  initialState= {};
 const reducer= combineReducers({
     productList : productListReducer,
 })
 const store = createStore(reducer, initialState, compose);
 export default store;