import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="flex-nav">
        <div className="flex-group">
          <Link to={process.env.PUBLIC_URL + '/'}>HOME</Link>
          <Link to={process.env.PUBLIC_URL + '/shop'}>SHOP</Link>
        </div>
        <h1 className="logo">WANDERFUL</h1>
          <Link to={process.env.PUBLIC_URL + '/cart'}>CART</Link>
      </div>
    </nav>
  )
}

export default Navbar
