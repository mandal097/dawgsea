import React, { useState } from 'react';
import './forgotpassword.scss';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import 'react-toastify/dist/ReactToastify.css';
import { BiArrowBack } from 'react-icons/bi';
import FormFooter from '../FormFooter';
import axios from 'axios';
import { appUrl } from '../../../config/appUrl'
const ForgotPassword = () => {
    const [nextStep, setNextStep] = useState(false);
    const navigate = useNavigate();

    // sending otp
    const [email, setEmail] = useState();
    const [loading, setLoading] = useState(false);

    // reseting password
    const [password, setPassword] = useState();
    // const [cpassword, setCpassword] = useState();
    const [otp, setOtp] = useState();

    const [showPass, setShowPass] = useState(false);

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

    const sendOtp = async (e) => {
        e.preventDefault();
        const url_ = appUrl.url;
        if (!email) {
            toast.error('Please Enter Your Email Id');
        } else {
            try {
                setLoading(true)
                const url = `${url_}/user/send-otp`
                const details = {
                    email: email
                }
                const options = {
                    url: url,
                    method: 'POST',
                    headers: {},
                    data: details
                }

                const res = await axios(options);
                if (res.data.status === 'success') {
                    toast.success('Check your Email');
                    setTimeout(() => {
                        // navigate(`/forgot-password/${email}`)
                        setNextStep(true)
                    }, 2000);
                } else {
                    toast.error('Email not Registered')
                }
                setLoading(false)
            } catch {
                toast.error('Something went wrong')
            }
        }
    }



    const resetPassword = async (e) => {
        e.preventDefault();
        if (!email || !password || !otp) {
            toast.error('Please fill all the fields');
        }
        try {
            setLoading(true)
            const url_ = appUrl.url;
            const url = `${url_}/user/forgot-password`
            const details = {
                email: email,
                password: password,
                otp: otp
            }
            const options = {
                url: url,
                method: 'POST',
                headers: {},
                data: details
            }

            const res = await axios(options);
            console.log(res);
            if (res.data.status === 'success') {
                toast.success('Successfully changed your password');
                setTimeout(() => {
                    navigate('/login')
                }, 1200);
            } else {
                toast.error('Wrong Otp')
            }
            setLoading(false)
        } catch {
            toast.error('Something went wrong')
        }
    }


    return (
        <div className='forgot_password'>
            <ToastContainer style={{ fontSize: '1.7rem' }} />
            {
                nextStep

                    ?

                    <form className="forgot_password_form" onSubmit={resetPassword}>
                        <div className="back" onClick={() => setNextStep(false)}><BiArrowBack /></div>
                        <div className="img_logo">
                            <img src="images/seadawg.png" alt="" />
                        </div>
                        <h2 className="header">Enter Your Email For Otp</h2>
                        <div className="input_divs">
                            <input
                                type={showPass ? 'text' : 'password'}
                                placeholder='New password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className="hide_show">
                                {
                                    showPass
                                        ? <span onClick={handlePassHide}><AiOutlineEyeInvisible /></span>
                                        : <span onClick={handlePassHide}><AiOutlineEye /></span>
                                }
                            </div>
                            {/* <input
                                type="text"
                                placeholder='Confirm New password'
                                onChange={(e) => setCpassword(e.target.value)}
                            /> */}
                            <input
                                type="number"
                                placeholder='Enter Otp'
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <div className="otp_message">
                                <p>Enter the otp that have sent to your email</p>
                            </div>
                        </div>
                        <button className="forgot_password_btn" type='submit'>Reset password</button>
                        <FormFooter />
                    </form>

                    :
                    <form className="forgot_password_form" onSubmit={sendOtp}>
                        <div className="img_logo">
                            <img src="images/seadawg.png" alt="" />
                        </div>
                        <h2 className="header">Enter Your Email For Otp</h2>
                        <div className="input_divs">
                            <input
                                type="email"
                                placeholder='write your email here'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <button className="forgot_password_btn" type='submit'>{loading ? "Sending Otp" : 'Sumbit'}</button>
                        <div className="create_account">
                            <p>Don't have an Account &nbsp; <span onClick={() => navigate('/register')}>Sign Up</span></p>
                        </div>
                        <FormFooter />
                    </form>
            }
        </div>
    )
}

export default ForgotPassword