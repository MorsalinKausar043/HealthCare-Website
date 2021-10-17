import React from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import Footer from '../footer/Footer';
import Home from '../home/Home';
import Navbars from '../navbar/Navbars';

const Routes = () => {
    return (
        <>
            <Router>
                <Navbars/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                </Switch>
                <Footer/>
           </Router> 
        </>
    );
};

export default Routes;