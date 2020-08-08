import {createStore , combineReducers} from 'redux';
 const  initialState= {};
 const reducer= combineReducers({
     productList : productListrr
 })
 const store = createStore(reducer, initialState)