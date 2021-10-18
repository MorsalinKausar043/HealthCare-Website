import React from 'react';

const ServiceBanner = ({value:{title,body,image}}) => {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-10 col-md-4 mx-auto">
                        <figure>
                            <img src={image} className="img-fluid shadow rounded" alt="service_details_benner_img" />
                        </figure>
                    </div>
                    <div className="col-10 col-md-8 mx-auto">
                        <h3>{title}</h3>
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceBanner;