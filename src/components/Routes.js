import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Navbar from './Navbar'


function Routes() {
  return (
    <BrowserRouter>
      <Navbar /> 
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/shop" component={Shop}/>
        <Route path="/cart" component={Cart}/> 
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
