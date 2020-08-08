import {createStore , combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'react-thunk';
import { productListReducer } from './reducer/productReducers';
 const  initialState= {};
 const reducer= combineReducers({
     productList : productListReducer,
 })
 const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
 export default store;