import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="home-main">
      <div className="box-wrapper">
        <h1 className="splash-text">NOT ALL WHO WANDER ARE LOST</h1>
        <Link to={process.env.PUBLIC_URL + "/shop"}>
        <button className="btn rounded orange">SEE EXPERIENCES</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
