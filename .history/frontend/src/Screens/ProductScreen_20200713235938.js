import React from 'react' ;
import data from '../data';
function ProductScreen(props){
    console.log(props.match.params.id)
const product =  data.products.find(x=>  x._id)
    return  <div>ProductScreen</div>
}
export default ProductScreen;