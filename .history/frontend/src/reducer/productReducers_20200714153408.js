 function productListReducer(state= {product: []}, action  ){
      switch (action.type) {
case  PRODUCT_LIST_REQUEST :
return {loading : true}
case  PRODUCT_LIST_SUCCESS :
    return {loading: false , product: action.payload};
    case  PRODUCT_LIST_FAIL :
        ret
      }
 }