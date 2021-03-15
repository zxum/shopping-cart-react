import React from 'react'
import catalog from '../data/catalog.json'

function Product(props) {
  // console.log(props)
  let productId = props.match.params.id
  let product = catalog.find(item => item.id == productId)
  // console.log(product)

  let requestImageFiles = require.context('../images',true,/.jpg$/) 

  return (
    <div className="product-main">
      <div className="product-wrapper">
        <div className="photos">
          {/* {
            product.imgs.map(image => (
              // console.log(image)
              <img key={image} src={requestImageFiles("./"+image).default} className="product-photo" />
            ))
          } */}
          <img key={product.imgs[0]} src={requestImageFiles("./"+product.imgs[0]).default} className="product-photo" />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h3 className="product-name">{product.name.toUpperCase()}</h3>
            <div className="product-block">
              <p className="product-details">Itinerary</p>
                <ul>
                  {product.itinerary.map(item=> <li>{item}</li>)} 
                </ul>

              <p className="product-details">Includes</p>
                <ul>
                  {product.includes.map(item=> <li>{item}</li>)}
                </ul>

              <p className="product-details">Duration</p>
              <ul>
                <li>{`${product.duration.days} days, ${product.duration.nights} nights`}</li>
              </ul>
            </div>
            <div className="product-price">
              <p>{`$${product.price}`} <span>per person</span></p>     
          </div>
          </div>
        </div>
      </div>

      <div className="add-to-cart">
        <button className="btn rounded brown" onClick={()=>{props.handleAddToCart(product)}}>ADD TO CART</button>
      </div>
      {/* <div className="background-tree"></div> */}
    </div>
  )
}

export default Product
