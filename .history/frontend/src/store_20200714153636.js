import {createStore , combineReducers} from 'redux';
 const  initialState= {};
 const reducer= combineReducers({
     productList : productListReduce,
 })
 const store = createStore(reducer, initialState);