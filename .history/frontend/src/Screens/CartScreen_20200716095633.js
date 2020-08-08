import React, { useEffect } from 'react';
import { addToCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
function CartScreen(props) {
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;

    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }

    }, []
    )
    return <div className="cart">
        <div className="cart-list">
            <ul className="cart-list-container">
                <li>
                    <h3>
                        Shopping Cart
                        </h3>
                    <div>
                        Price
                         </div>
                </li>
                {
                    cartItems.length === 0 ?
                        <div>
                            Cart Is Empty
                         </div> :
                        cartItems.map(item =>
                            <li>
                                <div className="cart-image">
                                    <img src={item.image} alt="product image" />
                                </div>
                                <div className="cart-name">
                                    <div>
                                        <Link to={"/product/" + item.product}>
                                            {item.name}
                                        </Link>

                                    </div>

                                    <div>
                                        Qty :
                                    <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                                            {[...Array(item.countInStock).keys()].map(x =>
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                            )}
                                        </select>
                                        <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                                            Delete
                    </button>
                                    </div>
                                </div>
                                <div className="cart-price">
                                    ${item.price}
                                </div>

                            </li>
                        )
                }


            </ul>

        </div>
        <div className="cart-action">
            <h3>
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)}  items)
    :
$ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h3>
            <button className="button primary full width" disabled={cartItems.length === 0}>
                Proceed To Checkout
</button>

        </div>
         Cart Screen
     </div>
}
export default CartScreen; 