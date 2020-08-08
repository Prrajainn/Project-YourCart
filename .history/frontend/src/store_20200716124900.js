import {createStore , combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { userSigninReducer } from './reducers/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
 const  initialState= {cart: {cartItems}} ;
 const reducer= combineReducers({
     productList : productListReducer,
     productDetails : productDetailsReducer,
     cart : cartReducer
     userSignin : user
 })
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;
 const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));
 export default store;  