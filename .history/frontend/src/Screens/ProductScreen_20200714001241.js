import React from 'react' ;
import data from '../data';
function ProductScreen(props){
    console.log(props.match.params.id)
const product =  data.products.find(x=>  x._id === props.match.params.id)
    return  <div  > 
    <div>
        <Link to="/" > Go Back To Results </Link>
    </div>
    <div className="details"> </div>
        <div className="de"></div>
    </div>
}
export default ProductScreen;