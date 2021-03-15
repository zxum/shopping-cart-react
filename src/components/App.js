import React, {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Navbar from './Navbar'
import Product from './Product'



function App() {

  let [cart, setCart] = useState({})

  function handleAddToCart(item) {
    let newCart = cart
    if (item.id in cart) {
      newCart[item.id] = newCart[item.id] + 1
      setCart(newCart)
    } else {
      newCart[item.id] = 1 
      setCart(newCart)
    }
  }

  function handleIncrementQuantity(id) {
    console.log("Incrementing")
    let newCart = cart 
    newCart[id] = newCart[id] + 1 
    setCart({...newCart})
    console.log({cart})
  }

  function handleDecrementQuantity(id) {
    console.log("Decrementing")
    let newCart = cart 
    if(newCart[id] === 1) {
      delete newCart[id] 
    } else {
      newCart[id] = newCart[id] - 1
    }
    setCart({...newCart})
  }

  function handleRemoveItem(id) {
    let newCart = cart 
    delete newCart[id]
    setCart({...newCart})
  }

  return (
    <BrowserRouter>
      <div className="main">
        <Navbar /> 
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/shop" component={Shop}/>
          <Route path="/shop/:id" 
                render={(props)=>(<Product {...props} 
                handleAddToCart={handleAddToCart} />)} />
          <Route path="/cart" 
                render={(props)=>(<Cart {...props} 
                cart={cart} 
                handleDecrementQuantity={handleDecrementQuantity} 
                handleIncrementQuantity={handleIncrementQuantity}
                handleRemoveItem={handleRemoveItem} />)}/> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
