import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory, useLocation} from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import { BiLogIn, BiUserCircle } from 'react-icons/bi';
import useAuth from "../Hooks/useAuth";

const Signup = () => {
    const { SigninGoogle, SigninGithub, SigninEmailAndPassword , deploy_displayName  } = useAuth();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
    const location = useLocation();
    const redirect_location = location.state || "/home";

    console.log(redirect_location);

    const handleRegistration = () => {
        if (!email && !password && !name)
        {
            setError("Please fiil the inputBox")
        } else if (password.length < 6)
        {
            setError("please password enter password up to 6 charecter");
        }
        else
        {
            SigninEmailAndPassword(email, password , name)
                .then(() => {
                    history.push(redirect_location);
                    deploy_displayName(name);
                }).catch((error) => setError("something wrong!"))
            setError("")
            setName("");
            setEmail("");
            setPassword("");
        }
    }
    const nameBox = e => setName(e.target.value);
    const emailBox = e => setEmail(e.target.value);
    const passwordBox = (e) => setPassword(e.target.value);

    const googleSingIn = () => {
        SigninGoogle()
            .then(() => {
                history.push(redirect_location);
            });
    };

    const githubSignIn = () => {
        SigninGithub()
            .then(() => {
                history.push(redirect_location)
            });
    };

    return (
        <>
            <div className="container py-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-10 mx-auto col-md-4 shadow p-3 rounded">
                        <h3 className=" display-3 mb-2 text-primary text-center"><BiUserCircle /></h3>
                            <p className="text-danger">{error}</p>
                        <div className="d-flex flex-column">
                            <input onBlur={nameBox} className="log_input" type="name" name="name" value={name.value} placeholder="Enter Your Name" required />
                            <input onBlur={emailBox} className="log_input my-3"  name="email" value={email.value} type="email" placeholder="Enter Your Email" required />
                            <input onBlur={passwordBox} name="password" value={password.value} className="log_input" type="password" placeholder="Enter Your Password" required />
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
                            <button onClick={googleSingIn} className="btn btn-outline-primary me-3">
                                <FcGoogle/> google
                            </button>
                            <button onClick={githubSignIn} className="btn btn-outline-danger">
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