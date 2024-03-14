import React from 'react'
import { Link } from 'react-router-dom'
function Banner() {
  return (
    <div>
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="caption header-text">
                <h4>Welcome To TAWFIK Website.</h4>
                <h2>BE THE BEST GAMER EVER AND BE PRO</h2>
                <p>this website let you download games or you can get a cd games ps4 or ps5 and it will shipping to any place in the world to play and have fun. </p>
                <div className="search-input">
                  <form id="search" action="/shop">
                    <input type="text" placeholder="Type Something" id='searchText' name="searchKeyword" onkeypress="handle" />
                    <Link to="/shop" className='link' role="button">Search Now</Link>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1">
              <div className="right-image">
                <Link to='/detail'> <img src="assets/images/Assassin's Creed IV.jfif" alt="assissan'creed" /></Link>
                <span className="price">$38</span>
                <span className="offer">-30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner