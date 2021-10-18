import React from 'react';
import "./services.css";

const Homeservices = ({ service }) => {
    
    const { title, body, image } = service;

    return (
        <>
            <div className="col-10 mx-auto col-md-4 mx-3 my-3">
            <div className="card-deck shadow rounded">
                <div className="card border-0">
                    <img className="card-img-top" src={image} alt="Card_image"/>
                    <div className="card-body">
                            <h5 className="card-title">{title.slice(0,40)}</h5>
                            <p className="card-text">{body.slice(0,200)}</p>
                    </div>
                    <div className="card-footer border-0">
                        <button className="btn btn-outline-danger">Read More</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Homeservices;