import React from 'react';
import './style.scss';
import { MdSend } from 'react-icons/md';
import { useNavigate } from 'react-router-dom'
const Footer = () => {
    const navigate = useNavigate()
    return (
        <div className='footer'>
            <div className="footer_wrapper">
                <div className="footer_desc desc">
                    <div className="logo">
                        <img src="images/seadawg.png" alt="" />
                    </div>
                    <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo in officiis, iste molestias neque rem eos sunt voluptatem veritatis at iure reprehenderit earum nam a optio?</p>
                </div>
                <div className="footer_desc links">
                    <ul>
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>Terms</li>
                    </ul>
                </div>
                <div className="footer_desc links">
                    <ul>
                        <li onClick={()=>navigate('/myaccount')}>My Account</li>
                        <li onClick={()=>navigate('/orders')}>Orders</li>
                        <li  onClick={()=>navigate('/cart')}>Cart</li>
                    </ul>
                </div>
                <div className="footer_desc newsletter">
                    <p className="subscribe">Subscribe to our Newsletter</p>
                    <div className="input_div">
                        <input type="email" name="" id="" />
                        <button><MdSend /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer