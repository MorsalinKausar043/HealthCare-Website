import React from 'react';
import useGetApiData from '../Hooks/useGetApiData';
import Homeservices from './Homeservices';

const Services = () => {

    const services = useGetApiData();

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <h2><span className="fw-bold text-danger display-6 title">S</span>ervices</h2>
                    {
                        services.map(crrElm => <Homeservices key={crrElm.id} service={crrElm}/>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;