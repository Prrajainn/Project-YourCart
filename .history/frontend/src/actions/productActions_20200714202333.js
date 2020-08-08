const { PRODUCT_LIST_REQUEST } = require("../constants/productConstants");
const { default: Axios } = require("axios");

const listProduct = () => async  (dispatch) => {
    dispatch(PRODUCT_LIST_REQUEST);
    const {data} = await axios.get("/api/products");
    dispatch({})

}