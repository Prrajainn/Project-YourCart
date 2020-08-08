import {createStore , combineReducers} from 'redux';
 const  initialState= {};
 const reducer= combineReducers({
     productList : productListr
 })
 const store = createStore(reducer, initialState)