import React from 'react';
import { MdLocalHospital } from 'react-icons/md';
import { FaFacebookSquare , FaWhatsappSquare } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin, AiFillGoogleCircle } from 'react-icons/ai';
import "./footer.css";

const Footer = () => {

    const footer_image1 = "https://i.ibb.co/LCFYkjV/images-1.jpg";
    const footer_image2 = "https://i.ibb.co/tMD9D2c/images.jpg";
    const footer_image3 = "https://i.ibb.co/LCbKMqT/photo-1519494080410-f9aa76cb4283-1.jpg";

    return (
        <div className="container-fluid bg-dark py-5 px-2 px-md-5 text-light">           
            <div className="row">
                <div className="col-10 col-md-4 text-center order-3 order-md-1">
                    <MdLocalHospital className="text-danger display-1" />
                    <p className="text-light">
                    <span className="text-danger display-6 fw-bold">P</span>hasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat accumsan sed. Vivamus vel tristique nibh.
                    </p>
                    <div>
                        <FaFacebookSquare className=" social_icon"/>
                        <FaWhatsappSquare className=" social_icon mx-3"/>
                        <AiOutlineTwitter className=" social_icon"/>
                        <AiFillLinkedin className=" social_icon mx-3"/>
                        <AiFillGoogleCircle className=" social_icon"/>
                    </div>
                </div>
                <div className="col-10 col-md-4 my-3 my-md-0 order-1 order-md-2">
                    <h2 className="mb-3"><span className="text-danger fw-bold">L</span>atest News</h2>
                    <div className="d-flex align-items-center">
                        <div className="me-2">
                            <img src={footer_image1} className="footer_image" alt="footer-img" />
                        </div>
                        <div>
                            <p className="m-0">A big discovery for medicine</p>
                            <span><small className="text-danger">Dec 02, 2017</small></span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center my-3">
                        <div className="me-2">
                            <img src={footer_image2} className="footer_image" alt="footer-img" />
                        </div>
                        <div>
                            <p className="m-0">A big discovery for medicine</p>
                            <span><small className="text-danger">Dec 02, 2017</small></span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="me-2">
                            <img src={footer_image3} className="footer_image" alt="footer-img" />
                        </div>
                        <div>
                            <p className="m-0">A big discovery for medicine</p>
                            <span><small className="text-danger">Dec 02, 2017</small></span>
                        </div>
                    </div>
                </div>
                <div className="col-10 col-md-4 order-2 order-md-3">
                    <h3><span className="fw-bold text-danger">U</span>SEFULL LINKS</h3>
                    <ul>
                        <li className="useful_list">FAQ</li>
                        <li className="useful_list">Book Appionment</li>
                        <li className="useful_list">Contact</li>
                        <li className="useful_list">Testimonial</li>
                        <li className="useful_list">Doctor</li>
                        <li className="useful_list">Our Partners</li>
                        <li className="useful_list">Emergency</li>
                        <li className="useful_list">Nurse</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;