const { default: Axios } = require("axios")

const addToCart =  (productId, qty) =>   async (dispatch) => {
    try {
        const {data} = await  Axios.get("/api/products/" + productId);
 dispatch({type  : CART_ADD_ITEM ,payload : {
     product : data._id,
     name  : data.name,
     image  : data.image,
     price  : data.price,
     countInStock : data.countI,
 }      } )
    } catch (error) {
        
    }
}
