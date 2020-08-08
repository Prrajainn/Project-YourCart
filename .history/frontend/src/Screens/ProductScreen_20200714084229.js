import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data';
function ProductScreen(props) {
    console.log(props.match.params.id);
    const product = data.products.find(x => x._id === props.match.params.id);
    return <div  >
        <div cl>
            <Link to="/" > Go Back To Results </Link>
        </div>
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
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button > Add To Cart</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}
export default ProductScreen;