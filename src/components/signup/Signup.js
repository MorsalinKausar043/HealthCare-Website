import React from 'react';
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import { BiLogIn , BiUserCircle } from 'react-icons/bi';

const Signup = () => {
    return (
        <>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-10 mx-auto col-md-4 shadow p-3 rounded">
                        <h3 className=" display-3 mb-2 text-primary text-center"><BiUserCircle/></h3>
                        <div className="d-flex flex-column">
                            <input className="log_input" type="name" placeholder="Enter Your Name" required />
                            <input className="log_input my-3" type="email" placeholder="Enter Your Email" required />
                            <input className="log_input" type="password" placeholder="Enter Your Password" required />
                        </div>
                        <div className="d-flex  justify-content-around align-items-center my-3">
                            <NavLink className="sign_up text-secondary" to="signin">Alreay Register!</NavLink>
                            <button className="text-secondary forget_text">forget password</button>
                        </div>
                        <div className="text-center mb-3">
                            <button className="btn btn-primary"><BiLogIn/> Sign Up</button>
                        </div>
                        <div className="text-center">
                            <p className="text-secondary text-center"><small>or Log with</small></p>
                            <button className="btn btn-outline-primary me-3">
                                <FcGoogle/> google
                            </button>
                            <button className="btn btn-outline-danger">
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