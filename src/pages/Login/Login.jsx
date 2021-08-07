
import React, { useState } from 'react';
import '../Login/_Login.scss';
import {AiFillEye, RiEyeCloseFill} from 'react-icons/all';

const Login = () => {
    const [isVisibility, setvisibility] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const handleClick = () => {
        setvisibility(!isVisibility);
    }

    const passwordInput = (event) => {
        setPasswordValue(event.target.value);
    }
    const emailInput = (event) => {
        setEmailValue(event.target.value)
    }
    console.log(emailValue);
    const submitHandler = (event) => {
        event.preventDefault();

        setEmailValue('');
        setPasswordValue('');
    }
    return (
        <div className="login">
            <h3 className="login-heading">Sign in to admin panel</h3>
            <div className="login-form">
                <form >
                    <div className="form-group">
                        <label htmlFor="Email" className="form-label">E-Mail</label>
                        <input type="email" className="form-control" placeholder="Email manzilingizni kiriting" value={emailValue} onChange={emailInput} />
                        <div id="emailHelp" className="form-text">Please, enter a valid e-mail address</div>
                    </div>
                    <div className="form-group form-password">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type={isVisibility ? "text" : "password"} value={passwordValue} name="" id="" className="form-control" placeholder="Your password" onChange={passwordInput}/>
                        <div className="login-icons">
                            <AiFillEye className={`icon ${isVisibility ? "active-show" : 'active-hidden'}`} onClick={handleClick} />
                            <RiEyeCloseFill className={`icon ${isVisibility ? 'active-hidden' : 'active-show'}`} onClick={handleClick} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="keep me" className="form-label">
                            <input type="checkbox" name="" id="" />  <small className="text-muted">Keep me signed in</small>
                        </label>
                    </div>

                    <button type="submit" className="submitBtn btn" onSubmit={submitHandler}>Sign in</button>
                </form>
            </div>
          
        </div>
    )
}

export default Login;