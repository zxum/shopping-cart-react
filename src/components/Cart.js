import React from 'react'

function Cart() {
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
          <tr className="product-row">
            <td>
              <div className="product-name-cell">
                <img className="product-icon"/>
                <span>SPAIN</span>
              </div>
            </td>
            <td className="center-align">
              $500
            </td>
            <td className="quantity-display center-align">
              <i class="fas fa-caret-up"></i>
              <p>1</p>
              <i class="fas fa-caret-down"></i>
            </td>
            <td className="center-align">
              <i class="fas fa-trash-alt"></i>
            </td>
          </tr>
          <tr className="total-row">
            <td className="right-align">Total</td>
            <td className="center-align">$500</td>
            <td className="center-align">1</td>
            <td></td>
          </tr>
        </table>
      </div>
      <button className="btn rounded brown">CHECKOUT</button>
    </div>
  )
}

export default Cart
