import React from 'react'
import catalog from '../data/catalog.json'

function Shop() {
  let data = catalog
  console.log(data)

  return (
    <div className="shop-main">
      <div className="box-wrapper">
        <h1 className="title-text">EXPERIENCES</h1>
        <div className="row">
          <div className="column">
            <div className="package-wrapper">
              <div id="croatia-main" className="package-img"></div>
              <h3 className="location-text">CROATIA</h3>
            </div>
          </div>
          <div className="column">
            <div className="package-wrapper">
              <div id="italy-main" className="package-img"></div>
              <h3 className="location-text">ITALY</h3>
            </div>
          </div>
          <div className="column">
            <div className="package-wrapper">
              <div id="poland-main" className="package-img"></div>
              <h3 className="location-text">POLAND</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="package-wrapper">
              <div id="portugal-main" className="package-img"></div>
              <h3 className="location-text">PORTUGAL</h3>
            </div>
          </div>
          <div className="column">
            <div className="package-wrapper">
              <div id="slovenia-main" className="package-img"></div>
              <h3 className="location-text">SLOVENIA</h3>
            </div>
          </div>
          <div className="column">
            <div className="package-wrapper">
              <div id="spain-main" className="package-img"></div>
              <h3 className="location-text">SPAIN</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="background-tree"></div>
    </div>
  )
}

export default Shop
