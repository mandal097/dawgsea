import React, { useEffect, useState } from 'react';
import './style.scss';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'
import { appUrl } from '../../config/appUrl';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cartRedux';


const Product = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = location.pathname.split('/')[2];

  // products data
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  // arrays
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [inService, setInService] = useState(false);

  const [pin, setPin] = useState();

  // check serviceablity
  const checkPin = () => {
    const pins = [1111, 2222, 3333, 4444, 5555, 6666];
    pins.includes(parseInt(pin))
      ? setInService(true)
      : setInService(false);
  }


  // controll quantity
  const handleQuantity = (type) => {
    if (type === 'decr') {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }



  const addToCart = () => {
    // update our cart
    dispatch(addProduct({ ...product, quantity, color, size }))
    setTimeout(() => {
      navigate('/cart')
    }, 1000);

  }

  useEffect(() => {
    const fetchProducts = async () => {
      const url = appUrl.url;
      const fetchedProducts = await axios.get(`${url}/products/find/${id}`)
      // console.log(fetchedProducts.data);
      setProduct(fetchedProducts.data)
      setSizes(fetchedProducts.data.size)
      setColors(fetchedProducts.data.color)
    }
    fetchProducts()
  }, [id])
  return (
    <div className='product_page'>
      <div className="product_page_wrapper">
        <div className="product_desc">
          <div className="product_left_img">
            <img src={product.img} alt="" />
          </div>
          <div className="product_right_dec">
            <h5 className='brand'>Sea Dawg</h5>
            <h3 className="product_title">{product.title}</h3>
            <p className="desc">{product.desc}</p>
            <div className="products_filter">
              <div className="color">
                <span className="color_text">Colors :</span>
                {
                  colors.map((color, ind) => (
                    <div className="colors" key={ind} style={{
                      backgroundColor: color
                    }} onClick={() => setColor(color)}></div>
                  ))
                }
              </div>
              <div className="size">
                <h4 className="sizes">Sizes :</h4>
                <select name="" id="" onChange={(e) => setSize(e.target.value)}>
                  {
                    sizes.map((size, ind) => (
                      <option value={size} key={ind}>{size}</option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="ctc_btns">
              <h4 className='product_price'>₹ {product.price}</h4>
              <button className="add_to_cart ctc_btn" onClick={addToCart}>Add to Cart</button>
              <button className="buy_know ctc_btn">Buy Know</button>
            </div>

            <div className="product_quantity">
              {/* <span>Quantity :</span> */}
              <div onClick={() => handleQuantity('decr')}><AiOutlineMinusCircle /></div>
              <div className='cart_counter'><span>Quantity : {quantity}</span></div>
              <div onClick={() => handleQuantity('inre')}><AiOutlinePlusCircle /></div>
            </div>

            <div className="note"><p>Note : Please check your pincode if it is serviceable , then order the products</p></div>
            <div className="check_serviceabilty">
              <input type="text" placeholder='Type your pincode' onChange={(e) => setPin(e.target.value)} onKeyUp={checkPin} />
              <button className="check_btn" onClick={checkPin}>Check</button>
            </div>
            <div className="service_message">
              {
                (pin && inService) && <p style={{ color: 'green' }}>Yupp! Pincode is in service</p>
              }
              {
                (pin && !inService) && <p style={{ color: 'red' }}>Sorry! this pincode is not in service</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product