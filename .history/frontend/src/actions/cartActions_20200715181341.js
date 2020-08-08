const { default: Axios } = require("axios")

const addToCart =  (productId, qty) =>   async (dispatch) => {
    try {
        const {data} = await  Axios.get("/api/products/" + productId);
 dispatch
    } catch (error) {
        
    }
}
