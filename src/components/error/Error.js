import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink ,  useHistory } from 'react-router-dom';
import "./error.css";

const Error = () => {

    const error_image = "https://i.ibb.co/7kwZ6Dc/download.png";
    const history = useHistory();

    // const HandleGoBack = () => history.goBack();
    
    return (
        <>
           <div className="container py-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 text-center">
                        <div>
                            <figure>
                                <img src={error_image} className="error_image" alt="error_images" />
                            </figure>
                        </div>
                        <div>
                            <NavLink className="btn btn-primary me-3" to="/">Home</NavLink>
                            <Button variant="primary" onClick={_=> history.goBack()}>Go Back</Button>
                        </div>
                    </div>
               </div>
           </div> 
        </>
    );
};

export default Error;