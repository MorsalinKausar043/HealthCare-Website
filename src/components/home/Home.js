import React from 'react';
import { NavLink } from 'react-router-dom';
import doctor_img_1 from "../../images/doctor-with-co-workers-analyzing-x-ray_1098-581.jpg";
import doctor_img_2 from "../../images/successful-medical-team_329181-9252.jpg";
import doctor_img_3 from "../../images/successful-medical-team_329181-9254.jpg";
import useGetApiData from '../Hooks/useGetApiData';
import Homeservices from '../services/Homeservices';
import "./home.css";

const Home = () => {

    const services = useGetApiData();
    const btn_theme = ">>";

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src={doctor_img_1} className="d-block banner_image" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>MED CENTER Changing Lives, Right Here</h5>
                        <p>Med Center Health offers more access to innovative healthcare. More locations. More lives made better. Right here.</p>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src={doctor_img_2} className="d-block banner_image" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Welcome to Medica Health Center</h5>
                        <p>Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={doctor_img_3} className="d-block banner_image" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Phasellus at nunc orci. Donec ipsum metus,</h5>
                        <p>Pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat.</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <h2><span className="fw-bold text-danger display-6">O</span>ur <span className="fw-bold text-danger display-6">S</span>ervices</h2>
                    {
                        services.slice(0,6).map(crrElm => <Homeservices key={crrElm.id} service={crrElm}/>)
                    }
                </div>
                <div className="text-end">
                    <NavLink className="see_more_btn" to="/services">See More {btn_theme}</NavLink>
                </div>
            </div>
        </>
    );
};

export default Home;