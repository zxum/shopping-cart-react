import React from 'react'
import {Link} from 'react-router-dom'
import catalog from '../data/catalog.json'

function Cart(props) {
  let cart = props.cart
  console.log(props)
  let requestImageFiles = require.context('../images',true ,/.jpg$/) 

  let totalPrice = Object.keys(cart).reduce((total, id) => {
    let product = catalog.find(i => i.id == id)
    let quantity = cart[id]
    let price = product.price * quantity
    return total + price 
  },0)

  let totalQuantity = Object.values(cart).reduce((total, num) => {return total + num},0)

  let productRows = Object.keys(cart).map(id => {
    let product = catalog.find(i => i.id == id)
    let quantity = cart[id]

    return (
      <tr className="product-row">
        <td>
          <div className="product-name-cell">
            <Link to={process.env.PUBLIC_URL + `/shop/${id}`}>
              <img className="product-icon" src={requestImageFiles("./"+product.imgs[0]).default}/>
            </Link>
            <Link to={process.env.PUBLIC_URL + `/shop/${id}`}> 
              <span>{product.name.toUpperCase()}</span>
            </Link>
          </div>
        </td>
        <td className="center-align">
          <p>${product.price * quantity}</p>
          <small>${product.price} x {quantity}</small>
        </td>
        <td className="quantity-display center-align">
          <i className="fas fa-caret-up" onClick={()=>{props.handleIncrementQuantity(product)}}></i>
          <p>{quantity}</p>
          <i className="fas fa-caret-down" onClick={()=>{props.handleDecrementQuantity(product)}}></i>
        </td>
        <td className="center-align">
          <i className="fas fa-trash-alt" onClick={()=>{props.handleRemoveItem(product)}}></i>
        </td>
      </tr>
    )
  })

  return (
    <div className="cart-main">
      <div className="cart-wrapper">
        <table>
          <tr className="headings">
            <th className="wide-col">Destination</th>
            <th className="center-align">Price</th>
            <th className="center-align">Quantity</th>
            <th className="center-align">Remove</th>
          </tr>
          {productRows}
          <tr className="total-row">
            <td className="right-align">Total</td>
            <td className="center-align">${totalPrice}</td>
            <td className="center-align">{totalQuantity}</td>
            <td></td>
          </tr>
        </table>
      </div>
      <button className="btn rounded brown">CHECKOUT</button>
    </div>
  )
}

export default Cart
