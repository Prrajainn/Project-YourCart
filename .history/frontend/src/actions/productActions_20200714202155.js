const { PRODUCT_LIST_REQUEST } = require("../constants/productConstants")

const listProduct = () =>  (dispatch) => {
    dispatch(PRODUCT_LIST_REQUEST);
    
}