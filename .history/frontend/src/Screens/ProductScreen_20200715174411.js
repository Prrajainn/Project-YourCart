import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state =>  state.productDetails);
    const {product, loading , error  } = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return ( ) => {
            //
        };

    }, [ ] );
    const handleAddToCart = () =


    return <div  >
        <div className="back-to-result">
            <Link to="/" > Go Back To Results </Link>
        </div>
{loading?  <div> loading... </div> :
error ?  <div> {error} </div>:
(
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="Product Did Not load Successfully Please Hard Load"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                    <h3> Price : {product.price}</h3>
                    </li>
                </ul>

            </div>
            <div className="details-action">
                <ul>
                    <li>
                        Price : {product.price}
                    </li>
                    <li>
                        Status : {product.status}
                    </li>
                    <li>
                        Qty: <select value={qty} onChange={ ( e) =>  {setQty(e.target.value)}   }  >
                            {[...Array(product.countInStock).keys()].map(x =>  
                                <option  key={x+1} value= {x+1}>  {x+1}</option>)}
                        </select>
                    </li>
                    <li>
                        <button className="button" > Add To Cart</button>
                    </li>
                </ul>
            </div>
        </div>)}
    </div>
}
export default ProductScreen;