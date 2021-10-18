import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import { BiLogIn , BiUserCircle } from 'react-icons/bi';
import "./login.css";
import useAuth from '../Hooks/useAuth';

const Login = () => {

    const { SigninGoogle, SigninGithub , SigninEmailAndPassword } = useAuth()
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const RegistrationHandle = () => {
        SigninEmailAndPassword(email, password)
        setPassword("");
        setEmail("");

    }

    const emailBox = (e) => setEmail(e.target.value);
    const passwordBox = (e) => setPassword(e.target.value);


    return (
        <>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-10 mx-auto col-md-4 shadow p-3 rounded">
                        <h3 className=" display-3 mb-2 text-primary text-center"><BiUserCircle/></h3>
                        <div className="d-flex flex-column">
                            <input onBlur={emailBox} className="log_input" type="email" placeholder="Enter Your Email" required />
                            <input onBlur={passwordBox} className="mt-3 log_input" type="password" placeholder="Enter Your Password" required />
                        </div>
                        <div className="d-flex  justify-content-around align-items-center my-3">
                            <NavLink className="sign_up text-secondary" to="signup">SignUp Now</NavLink>
                            <button className="text-secondary forget_text">forget password</button>
                        </div>
                        <div className="text-center mb-3">
                            <button onClick={RegistrationHandle} className="btn btn-primary"><BiLogIn/> Sign In</button>
                        </div>
                        <div className="text-center">
                            <p className="text-secondary text-center"><small>or Log with</small></p>
                            <button onClick={SigninGoogle} className="btn btn-outline-primary me-3">
                                <FcGoogle/> google
                            </button>
                            <button onClick={SigninGithub} className="btn btn-outline-danger">
                                <GoMarkGithub/> github
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;