const { default: Axios } = require("axios")

const addToCart =  (productId, qty) =>   async (dispatch) => {
    try {
        const {data} = await  Axios.get("/api/products/" + productId);
 dispatch({type  : CART_ADD_ITEM ,payload : {
     product : data._id,
     name  : data.name,
     name  : data.name,
     name  : data.pr,
     name  : data.countIn,
 }      } )
    } catch (error) {
        
    }
}
