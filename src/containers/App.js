import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ShipContainer from './ShipContainer';

const Routes = () => 
    <Switch>
        <Route path='/' component={ShipContainer} exact={true} />
        <Route path='/ships/:id' component={ShipContainer} />
    </Switch>

const App = () => 
    <>
        <Navbar />
        <Routes />
        <Footer />
    </>

export default App;