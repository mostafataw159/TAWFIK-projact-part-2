import React from 'react'
import { NavLink } from 'react-router-dom'

function Categories() {
  return (
    <div>
          <div className="section categories related-games">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h6>Categories</h6>
            <h2>Related Games:</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <NavLink to="/shop">View All</NavLink>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>adventure</h4>
            <div className="thumb">
            <NavLink to="/shop"><img src="assets/images/wp10511315-uncharted-legacy-of-thieves-collection-wallpapers.jpg" alt="uncharted"/></NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>shooter</h4>
            <div className="thumb">
            <NavLink to="/shop"><img src="assets/images/wp13250151-fortnite-chapter-5-season-1-wallpapers.jpeg" alt="fortnite"/></NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>open world</h4>
            <div className="thumb">
            <NavLink to="/shop"><img src="assets/images/wp2880164-gta-logo-wallpaper.jpg" alt="gta"/></NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>survival</h4>
            <div className="thumb">
            <NavLink to="/shop"><img src="assets/images/wp9904842-minecraft-survival-series-wallpapers.jpg" alt="mine"/></NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg col-sm-6 col-xs-12">
          <div className="item">
            <h4>zombie</h4>
            <div className="thumb">
              <NavLink to="/shop"><img src="assets/images/wp7855227-the-walking-dead-season-1-wallpapers.jpg" alt="twd"/></NavLink>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>

    </div>
  )
}

export default Categories