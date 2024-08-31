import React from 'react'
import './SignInSignUp.css'

import user_icon from '../Assests/user.png'
import email_icon from '../Assests/email.png'
import password_icon from '../Assests/padlock.png'



export const SignInSignUp = () => {
  return (
    <div className='container'>
        <div className='header'>
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" />
            </div>

            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" />
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" />
            </div>

        </div>

        <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>

        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <dive className="submit">Sign In</dive>
        </div>

    </div>
  )
}
