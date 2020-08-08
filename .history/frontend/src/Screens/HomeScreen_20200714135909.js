import React, { useState, useEffect } from 'react' ;
import {Link} from   'react-router-dom';
import data from '../data';
import axios from 'axios';
a
function HomeScreen(props){
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async() => {
      const data = await
    }
    return () =>{
      //
    };

  }, [] )
return  <ul className="products" >
{
   data.products.map( product =>  <li>
     <div className="product">
     <Link to={'/product/' + product._id }><img className="product-image" src={product.image} alt="T-shirt"></img></Link>
       
       <div className="product-name">
   <Link to={'/product/' + product._id }>{product.name}</Link>
       </div>
       <div className="product-brand">{product.brand}</div>
       <div className="product-price " >{product.price}</div>
 </div>
   </li>)
}

</ul>

}
export default HomeScreen;