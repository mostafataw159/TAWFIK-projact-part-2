import React from 'react'
import { NavLink } from 'react-router-dom'

function Shop() {
  return (
    <div>
         <div className="section cta">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <div className="shop">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h6>my website</h6>
                  <h2>Go Pre-Order Buy & Get Best <em>Prices</em> For You!</h2>
                </div>
                <p>get the best games ever for ps4 if you pre-order from 3/3/2024 to 15/3/2024 you will get 50% off for any game.</p>
                <div className="main-button">
                  <NavLink to="/shop">order games now</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 offset-lg-2 align-self-end">
          <div className="subscribe">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h6>BIG OFFER FOR YOU</h6>
                  <h2>Get Up To $100 Off Just <em>Subscribe </em>to my channel in youtube</h2>
                  <h6 id="channel">this mostafa tawfik channel the real one wolves killer.</h6>
                </div>
                <div className="search-input">
                  <form id="subscribe" action="http://www.youtube.com/@wolveskiller7367" target='_blank'>
                    <button type="submit">Subscribe Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Shop