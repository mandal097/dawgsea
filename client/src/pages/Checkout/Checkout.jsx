import React from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
  const navigate = useNavigate();

  const cart = useSelector(state => state.cart);
  return (
    <div className='checkout'>
      <div className="checkout_wrapper">
        <h2 className='chekout_header'>Checkout</h2>
        <div className="delivery_details">
          <h3> 1. delivery Details</h3>
          <form action="" className="form">
            <div className="input_div">
              <label htmlFor="">Name : </label>
              <input type="text" />
            </div>
            <div className="input_div">
              <label htmlFor="">Name : </label>
              <input type="text" />
            </div>
            <div className="input_div textarea">
              <label htmlFor="">Address : </label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="input_div">
              <label htmlFor="">Phone Number :</label>
              <input type="number" />
            </div>
            <div className="input_div">
              <label htmlFor="">Pincode : </label>
              <input type="number" />
            </div>
            <div className="input_div">
              <label htmlFor="">State :</label>
              <input type="text" />
            </div>
            <div className="input_div">
              <label htmlFor="">District: </label>
              <input type="text" />
            </div>
          </form>
          <h3> 2. Review Cart Items & Pay</h3>

          <div className="review_cart">
            <ul>
              {
                cart.products.map((product, ind) => (
                  <li >
                    <p className="product_name"><b>1.</b>{product.title}</p>
                    <div className="product_price">
                      <p>₹ {product.price * product.quantity}</p>
                    </div>
                  </li>
                ))
              }
              <hr />
              <li >
                <p className="product_name cart_total"><b>Total</b></p>
                <div className="product_price">
                  <b>₹ {cart.total}</b>
                </div>
              </li>
              <div className="ctc_buttons_">
                <button className="edit_cart" onClick={() => navigate('/cart')}>Edit Cart</button>
                <button className="edit_cart pay_btn">Pay</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout