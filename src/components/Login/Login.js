import { auth } from "../../Firebase"
import React, { useRef } from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const emailref = useRef();
    const passowrdref = useRef();
    const navigate = useNavigate();

    const login = () => {
        auth
            .signInWithEmailAndPassword(emailref.current.value, passowrdref.current.value)
            .then(auth => {
                navigate("/")
            })
            .catch(error => alert(error.message))
    }

    const signup = () => {

        auth
            .createUserWithEmailAndPassword(emailref.current.value, passowrdref.current.value)
            .then((auth) => {
                // it successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    // history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }


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
                        <input type="text" ref={emailref} />
                        <label>password</label>
                        <input type="password" ref={passowrdref} />
                        <button onClick={login} type="Submit">Sign in</button>
                    </div>
                    <p>By continuing, you agree to Amazon's<span> Conditions of Use and Privacy Notice.</span></p>
                    <h3>New to Amazon?</h3>
                    <button onClick={signup} className='sign_up_button'>Create Your Amazon Account</button>
                </div>

            </div>
        </>
    )
}

export default Login