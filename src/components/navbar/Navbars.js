import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navbar.css";

const Navbars = () => {

    const NavLogo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Aj6YJGu37ABK_i0WSh1Mpl0d34lvot84RQ&usqp=CAU";

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink to="/">
                        <img src={NavLogo} className="nav_logo" alt="navbar-logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-md-3 mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-dark" to="/contact">Contact us</NavLink>
                        </li>
                        </ul>
                        <div className="ms-auto">
                            <NavLink className="btn btn-outline-danger me-3" to="/signin">Sign In</NavLink>
                            <NavLink className="btn btn-danger" to="/signup">Sign Up</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbars;