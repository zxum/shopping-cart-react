import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="flex-nav">
        <div className="flex-group">
          <Link to='/'>HOME</Link>
          <Link to='/shop'>SHOP</Link>
        </div>
        <h1 className="logo">WANDERFUL</h1>
          <Link to='/cart'>CART</Link>
      </div>
    </nav>
  )
}

export default Navbar
