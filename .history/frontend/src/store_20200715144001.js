import {createStore , combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';
 const  initialState= {};
 const reducer= combineReducers({
     productList : productListReducer,
     produ
 })
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
 const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
 export default store;  