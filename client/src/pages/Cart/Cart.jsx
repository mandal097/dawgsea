import React from 'react'
import './style.scss';
import { useSelector, useDispatch } from 'react-redux'
import { deleteCart, decreaseQuantity, increaseQuantity } from '../../redux/cartRedux'
import { useNavigate } from 'react-router-dom';
import {
    AiOutlineMinusCircle,
    AiOutlinePlusCircle,
    AiFillDelete
} from 'react-icons/ai'
const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart);

    const decreQuantity = (ind) => {
        dispatch(decreaseQuantity(ind))
    }

    const increQuantity = (ind) => {
        dispatch(increaseQuantity(ind))
    }
    const clearCart = () => {
        dispatch(deleteCart())
    }

    return (
        <div className='cart_page'>
            <div className="cart_page_wrapper">
                <div className="top_header">
                    <h2>Your Bag</h2>
                    <hr />
                </div>
                <div className="cart_">
                    <div className="cart_left">
                        <div className="cart_details">
                            <button className="continue_shopping" onClick={() => navigate('/')}>continue shopping</button>
                            <div className="bag_count">Shopping Bag ( {cart.products.length} )</div>
                            <button className="continue_shopping" onClick={clearCart}> <AiFillDelete /> Clear Cart </button>
                        </div>
                        <br />
                        <hr />
                        <div className="cart_items">
                            {
                                cart.products.map((product, ind) => (
                                    // <CartItem key={product._id} product={product} removeCart={removeCart} />
                                    <>
                                        <div className='cart_item' key={ind}>
                                            <div className="cart_img">
                                                <img src={product.img} alt="img" />
                                            </div>
                                            <div className="details_">
                                                <span className="product_name"><b>Product :</b>{product.title}</span>
                                                <span className="product_id"><b>Product Id :</b>{product._id}</span>
                                                <span className="product_color" style={{ backgroundColor: product.color }}></span>
                                                <span className="product_size"><b>Size :</b> {product.size}</span>
                                            </div>
                                            <div className="cart_controllers">
                                                <div onClick={() => decreQuantity(ind)}><AiOutlineMinusCircle /></div>
                                                <div className='cart_counter'>Quantity :<span>{product.quantity}</span></div>
                                                <div onClick={() => increQuantity(ind)}><AiOutlinePlusCircle /></div>
                                            </div>
                                            <div className="cart_price_">
                                                <b>Price : </b><span> {product.price}  &times; {product.quantity} = {product.price * product.quantity}</span>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                ))
                            }
                        </div>
                    </div>
                    <div className="cart_summary">
                        <h4 className="summary_title">ORDER SUMMARY</h4>
                        <div className="summary_item">
                            <h5 className="summary_text">Subtotal</h5>
                            <span className="summary_item_price">₹ {cart.total} </span>
                        </div>
                        <div className="summary_item">
                            <h5 className="summary_text">Estimated Shipping</h5>
                            <span className="summary_item_price">₹ 40</span>
                        </div>
                        <div className="summary_item">
                            <h5 className="summary_text">Shipping Discount</h5>
                            <span className="summary_item_price"> - ₹ 40</span>
                        </div>
                        <div className="summary_item up-line">
                            <h5 className="summary_text total">Total</h5>
                            <span className="summary_item_price total"> ₹ {cart.total}</span>
                        </div>
                        <button className="checkout_cart" onClick={()=>navigate('/checkout')}>Checkout Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart