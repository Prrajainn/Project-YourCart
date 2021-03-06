const { default: Axios } = require("axios");
const { ADD_TO_CART } = require("../constants/cartConstants");

const addToCart =  (productId, qty) =>   async (dispatch) => {
    try {
        const {data} = await  Axios.get("/api/products/" + productId);
 dispatch({type  : ADD_TO_CART ,payload : {
     product : data._id,
     name  : data.name,
     image  : data.image,
     price  : data.price,
     countInStock : data.countInStock,
     qty
 }      } )
    } catch (error) {
        
    }
}
