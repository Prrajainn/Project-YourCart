import React from 'react' ;
import data from '../data';
function HomeScreen(props){
return  <ul className="products" >
{
   data.products.map( product =>  <li>
     <div className="product">
       <img className="product-image" src={product.image} alt="T-shirt"></img>
       <div className="product-name">
   <Link to={}>{product.name}</a>
       </div>
       <div className="product-brand">{product.brand}</div>
       <div className="product-price " >{product.price}</div>
 </div>
   </li>)
}

</ul>

}
export default HomeScreen;