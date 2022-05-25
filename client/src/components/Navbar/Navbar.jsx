import React from 'react'
import './style.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart);
    const user = false;
    return (
        <div className='navbar'>
            <div className="navbar_wrapper">
                <div className="logo" onClick={() => {
                    navigate('/')
                }}>
                    <img src="images/seadawg.png" alt="" />
                </div>
                <div className="navbar_right">
                    {
                        user
                            ? <button className="btn">logout</button>
                            : <button className="btn" onClick={()=>navigate('/login')}>login</button>
                    }
                    <div className="cart_icon" onClick={()=>{
                        navigate('cart')
                    }}><FaShoppingCart /> <span className="cart_count">{cart.quantity}</span></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar