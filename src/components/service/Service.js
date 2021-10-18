import React from 'react';
import { useParams } from 'react-router';
import useGetApiData from '../Hooks/useGetApiData';
import ServiceBanner from './ServiceBanner';

const Service = () => {

    const services = useGetApiData();
    const { serviceId } = useParams();
    

    return (
        <>
            {
                services.filter(crrElm => crrElm.id === parseInt(serviceId)).map(val => <ServiceBanner key={val.id} value={val}/>)
            }
        </>
    );
};

export default Service;