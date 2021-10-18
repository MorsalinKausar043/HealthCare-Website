import React from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import About from '../about/About';
import Error from '../error/Error';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import Navbars from '../navbar/Navbars';
import Services from '../services/Services';
import Contact from "../contact/Contact";
import Login from '../login/Login';
import Signup from "../signup/Signup";
import Service from '../service/Service';
import AuthProvider from '../context/AuthProvider';
import PrivateRoute from '../privateRoute/PrivateRoute';

const Routes = () => {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Navbars/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/home" component={Home}/>
                        <Route path="/services" component={Services}/>
                        <PrivateRoute path="/service/:serviceId">
                            <Service></Service>
                        </PrivateRoute>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact} />
                        <Route path="/signin" component={Login}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="*" component={Error}/>
                    </Switch>
                    <Footer/>
                </Router> 
            </AuthProvider>
        </>
    );
};

export default Routes;