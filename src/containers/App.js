import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
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
    </>

export default App;