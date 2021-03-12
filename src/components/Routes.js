import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Navbar from './Navbar'


function Routes() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar /> 
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/shop" component={Shop}/>
          <Route path="/cart" component={Cart}/> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
