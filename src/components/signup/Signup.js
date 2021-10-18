import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import { BiLogIn, BiUserCircle } from 'react-icons/bi';
import useAuth from "../Hooks/useAuth";

const Signup = () => {
    const { SigninGoogle , SigninGithub , SigninEmailAndPassword , updateProfiles } = useAuth();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleRegistration = () => {
        if (!email && !password && !name)
        {
            setError("Please fiil the inputBox")
        }
        else
        {
            SigninEmailAndPassword(email, password);
            setError("")
            updateProfiles(name);
            setName("");
            setEmail("");
            setPassword("");
        }
    }
    const nameBox = e => setName(e.target.value);
    const emailBox = e => setEmail(e.target.value);
    const passwordBox = (e) => {
        const passwords = e.target.value;
        if (passwords.length > 6)
        {
            setPassword(passwords)
            setError("")
        }
        else
        {
            setError("please password enter password up to 6 charecter");
        }
    };

    return (
        <>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-10 mx-auto col-md-4 shadow p-3 rounded">
                        <h3 className=" display-3 mb-2 text-primary text-center"><BiUserCircle /></h3>
                            <p className="text-danger">{error}</p>
                        <div className="d-flex flex-column">
                            <input onBlur={nameBox} className="log_input" type="name" placeholder="Enter Your Name" required />
                            <input onBlur={emailBox} className="log_input my-3" type="email" placeholder="Enter Your Email" required />
                            <input onBlur={passwordBox} className="log_input" type="password" placeholder="Enter Your Password" required />
                        </div>
                        <div className="d-flex  justify-content-around align-items-center my-3">
                            <NavLink className="sign_up text-secondary" to="signin">Alreay Register!</NavLink>
                            <button className="text-secondary forget_text">forget password</button>
                        </div>
                        <div className="text-center mb-3">
                            <button onClick={handleRegistration} className="btn btn-primary"><BiLogIn/> Sign Up</button>
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

export default Signup;