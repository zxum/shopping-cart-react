import React from 'react'
import catalog from '../data/catalog.json'
import ShopItem from './ShopItem'

function Shop() {

  return (
    <div className="shop-main">
      <div className="box-wrapper">
        <h1 className="title-text">DESTINATIONS</h1>
        <div className="row">
          <div className="column">
          <div className="package-wrapper">
            <ShopItem item={catalog[0]}/>
          </div>
          </div>
          <div className="column">
            <ShopItem item={catalog[1]}/>
          </div>
          <div className="column">
            <ShopItem item={catalog[2]}/>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <ShopItem item={catalog[3]}/>
          </div>
          <div className="column">
            <ShopItem item={catalog[4]}/>
          </div>
          <div className="column">
            <ShopItem item={catalog[5]}/>
          </div>
        </div>
      </div>
      <div className="background-tree"></div>
    </div>
  )
}

export default Shop
