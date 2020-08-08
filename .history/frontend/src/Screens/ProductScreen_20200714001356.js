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
        <div className="details-image">
            <img src={product.image } alt="Pr">  </img>
        </div>
    </div>
}
export default ProductScreen;