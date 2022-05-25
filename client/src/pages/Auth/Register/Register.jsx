import React, { useState } from 'react'
import './register.scss'
import { useNavigate } from 'react-router-dom';
import FormFooter from '../FormFooter';
import axios from 'axios';
import { appUrl } from '../../../config/appUrl';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const navigate = useNavigate();
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [showPass, setShowPass] = useState(false);
    const [loading, setLoading] = useState(false);

    const handlePassHide = () => {
        switch (showPass) {
            case false:
                setShowPass(true);
                break
            case true:
                setShowPass(false);
                break;
            default:
                setShowPass(false)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            toast.error('Please fill all the fields');
        } else {
            try {
                setLoading(true)
                const url_ = appUrl.url;
                const url = `${url_}/user/registration`
                const userDetails = {
                    name: name,
                    email: email,
                    password
                }
                const options = {
                    url: url,
                    method: 'POST',
                    headers: {},
                    data: userDetails
                }
                await axios(options)
                toast.success('Registered Successfully');
                setLoading(false)
                setTimeout(() => {
                    navigate('/login')
                }, 1200);
            } catch (error) {
                setLoading(false)
                toast.error('Something went wrong')
            }
        }
    }
    return (
        <div className='register'>
            <ToastContainer style={{ fontSize: '1.7rem' }} />
            <form className="register_form" onSubmit={handleSubmit}>
                <div className="img_logo">
                    <img src="images/seadawg.png" alt="" />
                </div>
                <h2 className="header">Create A New Account</h2>
                <div className="input_div" >
                    <label htmlFor="">Name : </label>
                    <input
                        type="text"
                        placeholder='write your name here'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input_div">
                    <label htmlFor="">Email : </label>
                    <input
                        type="email"
                        placeholder='write your email here'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input_div">
                    <label htmlFor="">Password : </label>
                    <input
                        type={showPass ? 'text' : 'password'}
                        placeholder='write your password here'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="hide_show">
                    {
                        showPass
                            ? <span onClick={handlePassHide}><AiOutlineEyeInvisible /></span>
                            : <span onClick={handlePassHide}><AiOutlineEye /></span>
                    }
                </div>
                <button className="register_btn" type='submit'>{loading ? "loading.." : 'Sign Up'}</button>
                <div className="create_account">
                    <p>Already have an Account &nbsp; <span onClick={() => navigate('/login')}>Sign In</span></p>
                </div>
                <FormFooter />
            </form>
        </div>
    )
}

export default Register;