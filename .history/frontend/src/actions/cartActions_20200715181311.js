const { default: Axios } = require("axios")

const addToCart =  (productId, qty) =>   as (dispatch) => {
    try {
        const {data} = await  Axios.get("/api/products/" + productId);

    } catch (error) {
        
    }
}
