import React from 'react'

function CartItem(props) {
  return (
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
        <i className="fas fa-caret-up"></i>
        <p>1</p>
        <i className="fas fa-caret-down"></i>
      </td>
      <td className="center-align">
        <i className="fas fa-trash-alt"></i>
      </td>
    </tr>
  )
}

export default CartItem
