import React, { useState } from 'react'
import SignUpScreen from './SignUpScreen'
import './Login.css'

const Login = () => {

    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginScreen">
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
                <button onClick={() => setSignIn(true)} className="loginScreen__button">Sign In</button>
                <div className="loginScreen__gradient"/>
                <div className="loginScreen__body">
                    {signIn ? (
                        <SignUpScreen/>
                    ) : (
                        <>
                        <h1>Unlimited films, TV Shows and more.</h1>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                        <h3>
                        Ready to watch? Enter your email to create or restart your membership.
                        </h3>
                        <div className="loginScreen__input">
                            <form>
                                <input type="email" placeholder="Email Address"/>
                                <button onClick={() => setSignIn(true)} className="loginScreen__getStarted">GET STARTED</button>
                            </form>
                        </div>
                    </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
