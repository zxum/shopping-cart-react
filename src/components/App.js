import React, {useState} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'
import Navbar from './Navbar'
import Product from './Product'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()



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
    toast(`Added ${capitalize(item.name)} package to cart`)
  }

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function handleIncrementQuantity(item) {
    let id = item.id
    let newCart = cart 
    newCart[id] = newCart[id] + 1 
    setCart({...newCart})
    toast(`Increased quantity of ${capitalize(item.name)} packages to ${cart[id]}`)
  }

  function handleDecrementQuantity(item) {
    let id = item.id
    let newCart = cart 
    if(newCart[id] === 1) {
      delete newCart[id] 
    } else {
      newCart[id] = newCart[id] - 1
    }
    setCart({...newCart})
    toast(`Reduced quantity of ${capitalize(item.name)} packages to ${cart[id]}`)
  }

  function handleRemoveItem(item) {
    let id = item.id
    let newCart = cart 
    delete newCart[id]
    setCart({...newCart})
    toast(`Removed ${capitalize(item.name)} package from cart!`)
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
