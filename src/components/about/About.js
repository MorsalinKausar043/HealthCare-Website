import React from 'react';
import "./about.css";

const About = () => {
    const about_image = "https://i.ibb.co/QX8t0sS/empty-hospital-room-with-nobody-it-having-single-bed-482257-4443.jpg";
    return (
        <>    
            <div className="row">
                <div className="col">
                    <div className="about_header p-1 py-md-3 px-md-5">
                        <h1><span className="text-danger fw-bold">A</span>bout <span className="text-danger fw-bold">U</span>s</h1>
                        <p>Home / About us</p>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 order-2 order-md-1 d-flex flex-column justify-content-center">
                        <h1 className="fw-light">We Offer</h1>
                        <h2 className="fw-bold text-dark">Fast & Reliable</h2>
                        <h1 className="mini_title">Medical & HealthCare Solutions to Our Patients</h1>
                        <p>Pellentesque vitae ultrice posuere. Praesent justo laoret dignis ectus etiam ipsum habitant tristique nam est. Donec venentse euvarius cursus massa metus adipiscing ante. Nulla aculis. Donec lorem metus lobortis eu laci nid nec ipsum dignissim sed duil vamas.</p>
                    </div>
                    <div className="col-10 mx-auto col-md-6 order-1 order-md-2">
                        <figure>
                            <img className="img-fluid shadow rounded" src={about_image} alt="about_section_images" />
                        </figure>        
                    </div>
                </div>
            </div>        
        </>
    );
};

export default About;