function cartReducer(state = {cartItems : []  },   action) {
    switch(action.type){
        case ADD_TO_CART :
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);
            if(product)[

               return {...state,cart}  state.cartItems.map(x => x.product === product.product? product : x;)
            ]
            case ADD_TO_CART :
                case ADD_TO_CART :
    }
}