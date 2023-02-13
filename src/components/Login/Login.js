import React from 'react'
import "./Login.css"

const Login = () => {
    return (
        <>
            <div className='login'>
                <div className='image_container'>
                    <img src='https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png' />
                </div>
                <div className='sign_up'>
                    <h1>Sign In</h1>
                    <div className='form'>
                        <label>Email or mobile phone number</label>
                        <input type="text" />
                        <label>password</label>
                        <input type="password" />
                        <button type="Submit">Sign in</button>
                    </div>
                    <p>By continuing, you agree to Amazon's<span> Conditions of Use and Privacy Notice.</span></p>
                    <h3>New to Amazon?</h3>
                    <button className='sign_up_button'>Create Your Amazon Account</button>
                </div>

            </div>
        </>
    )
}

export default Login