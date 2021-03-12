import React from 'react'
import {Link} from 'react-router-dom'

function ShopItem(props) {
  return (
    <div className="package-wrapper">
        <Link to={`/shop/${props.item.id}`} >
          <div id={`${props.item.name}-main`} className="package-img"></div>
        </Link>
        <h3 className="location-text">
          <Link to={`/shop/${props.item.id}`}>
            {props.item.name.toUpperCase()}
          </Link>
        </h3>
      
    </div>
  )
}

export default ShopItem
