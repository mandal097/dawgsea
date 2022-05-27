import React, { useState } from 'react';
import './style.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { appUrl } from '../../config/appUrl';
const Checkout = () => {
  const navigate = useNavigate();

  const cart = useSelector(state => state.cart);
  // console.log(cart);
  // const items = cart.map(c=>)



  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [pinCode, setPinCode] = useState();
  const [state, setState] = useState();
  const [district, setDistrict] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !address || !phoneNo || !pinCode || !state || !district) {
      toast.error('Please fill all the fields');
    } else {
      try {
        const url_ = appUrl.url;
        const url = `${url_}/order/new`

        const reqObj = {
          name,
          email,
          address,
          phoneNo,
          pinCode,
          state,
          district,
          // orderItems: [{
          //   productId: cart._id,
          //   quantity:cart.quantity,
          //   price:cart.price
          // }
          // ]
          orderItems: cart,
          itemsPrice: cart.total,
          taxPrice: 40,
          shippingPrice: 100,
          totalPrice: cart.total + 100,

        }
        const authToken = localStorage.getItem('token')
        const options = {
          url: url,
          method: 'POST',
          headers: {
            token: `Bearer ${authToken}`
          },
          data: reqObj
        }
        const res = await axios(options)
        console.log(res);
        toast.success('Order Placed Successfully');
      } catch (error) {
        toast.error('Something went wrong');
      }
    }

  }

  return (
    <div className='checkout'>
      <ToastContainer style={{ fontSize: '1.8rem' }} />
      <div className="checkout_wrapper">
        <h2 className='chekout_header'>Checkout</h2>
        <div className="delivery_details">
          <h3> 1. delivery Details</h3>
          <form action="" className="form">
            <div className="input_div">
              <label htmlFor="">Name : </label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input_div">
              <label htmlFor="">Email : </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_div textarea">
              <label htmlFor="">Address : </label>
              <textarea
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <div className="input_div">
              <label htmlFor="">Phone Number :</label>
              <input
                type="number"
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div className="input_div">
              <label htmlFor="">Pincode : </label>
              <input
                type="number"
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <div className="input_div">
              <label htmlFor="">State :</label>
              <input
                type="text"
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="input_div">
              <label htmlFor="">District: </label>
              <input
                type="text"
                onChange={(e) => setDistrict(e.target.value)}
              />
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
                <button className="edit_cart pay_btn" onClick={handleSubmit}>Pay</button>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout