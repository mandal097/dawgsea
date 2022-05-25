import React, { useState } from 'react';
import './login.scss';
import 'react-toastify/dist/ReactToastify.css';
import FormFooter from '../FormFooter';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux'
import axios from 'axios';
import { appUrl } from '../../../config/appUrl';
import { ToastContainer, toast } from 'react-toastify';
import { loginFailure, loginStart, loginSuccess } from "../../../redux/userRedux"
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPass, setShowPass] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const isFetching = useSelector(state => state.user.isFetching)

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
        e.preventDefault()
        if (!email || !password) {
            toast.error('Please fill all the fields');
        } else {
            dispatch(loginStart());
            try {
                const url_ = appUrl.url;
                const res = await axios.post(`${url_}/user/login`, { email, password });
                dispatch(loginSuccess(res.data.user))
                localStorage.setItem('token', res.data.token)
                // console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data.user))
                toast.success('Logged In Successfully');
            } catch (error) {
                dispatch(loginFailure())
                toast.error('Invalid Credentials');
            }
        }
    }
    return (
        <div className='login'>
            <ToastContainer style={{ fontSize: '1.8rem' }} />
            <form className="login_form" onSubmit={handleSubmit}>
                <div className="img_logo">
                    <img src="images/seadawg.png" alt="" />
                </div>
                <h2 className="header">Sign In To Your Account</h2>
                <div className="input_divs">
                    <input
                        type="email"
                        placeholder='write your email here'
                        onChange={(e) => setEmail(e.target.value)}
                    />
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
                <button className="login_btn" type='submit'>{isFetching ? 'Logging In' :'Sign In'}</button>
                <div className="create_account">
                    <p>Don't have an Account &nbsp; <span onClick={() => navigate('/register')}>Sign Up</span></p>
                </div>
                <div className="forgot_password_">
                    <p onClick={() => navigate('/forgot-password')}>Forgot Password</p>
                </div>
                <FormFooter />
            </form>
        </div>
    )
}

export default Login