const { default: Axios } = require("axios")

const addToCart =  (productId, qty) =>   (dispatch) => {
    try {
        const {data} = await  Axios.get("/api/products/" + )
    } catch (error) {
        
    }
}
