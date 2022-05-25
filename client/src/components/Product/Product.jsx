import React from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom'
const Product = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div className='product'>
            <div className="product_img" onClick={()=>{
                navigate(`product/${product._id}`)
            }}>
                <img src={product.img} alt="" />
            </div>
            <div className="product_desc">
                <span className="product_name">{product.title}</span>
                <span className="price">₹ {product.price}</span>
                <button className="add_to_cart">Add to Cart</button>
            </div>
        </div>
    )
}

export default Product