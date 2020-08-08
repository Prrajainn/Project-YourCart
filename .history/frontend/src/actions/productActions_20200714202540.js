const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } = require("../constants/productConstants");
const { default: Axios } = require("axios");

const listProduct = () => async  (dispatch) => {
  try {
    dispatch({ type : PRODUCT_LIST_REQUEST});
    const {data} = await axios.get("/api/products");
    dispatch({type : PRODUCT_LIST_SUCCESS, payload : data })
  }
catch(console.error();) {

}
}