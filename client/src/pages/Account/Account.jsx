import React from 'react';
import './style.scss';
// import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom'
const Account = () => {
    // const navigate = useNavigate();

    // const cart = useSelector(state => state.cart);
    return (
        <div className='my_account'>
            <div className="my_account_wrapper">
                <h2 className='my_account_header'> My Account</h2>
                <div className="delivery_details">
                    <h3> 1. Default Delivery Details</h3>
                    <form action="" className="form">
                        <div className="input_div">
                            <label htmlFor="">Name : </label>
                            <input type="text" />
                        </div>
                        <div className="input_div">
                            <label htmlFor="">Email : </label>
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
                    <h3> 2. Change Password</h3>
                    <form action="" className="change_password form">
                        <div className="input_divs">
                            <div className="input_div input_div_">
                                <label htmlFor="">State :</label>
                                <input type="text" />
                            </div>
                            <div className="input_div input_div_">
                                <label htmlFor="">State :</label>
                                <input type="text" />
                            </div>
                            <div className="input_div input_div_">
                                <label htmlFor="">State :</label>
                                <input type="text" />
                            </div>
                        </div>
                        <button className="change_password_btn">submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Account