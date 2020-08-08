import {createStore , combineReducers} from 'redux';
 const  initialState= {};
 const reducer= combineReducers({
     productList : prod
 })
 const store = createStore(reducer, initialState)