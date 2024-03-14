import React from 'react'
import { NavLink } from 'react-router-dom'

function Mostplay() {
  return (
    <div>
        <div className="section most-played">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h5>TOP GAMES FOR PS</h5>
            <h2>Most Played:</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <NavLink to="/shop">View All</NavLink>
          </div>
        </div>

        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <NavLink to="/detail"><img src="assets/images/wp10899270-spider-man-remastered-wallpapers.jpg" alt="spiderman"/></NavLink>
            </div>
            <div className="down-content">
                <span className="category">superhero</span>
                <h4>marvel'spiderman</h4>
                <NavLink to="/shop">Explore</NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <NavLink to="/detail"><img src="assets/images/top-game-02.jpg" alt="PUBG"/></NavLink>
            </div>
            <div className="down-content">
                <span className="category">shooter</span>
                <h4>PUBG</h4>
                <NavLink to="/shop">Explore</NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <NavLink to="/detail"><img src="assets/images/top-game-03.jpg" alt=""/></NavLink>
            </div>
            <div className="down-content">
                <span className="category">battle royale</span>
                <h4>Apex legends</h4>
                <NavLink to="/shop">Explore</NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <NavLink to="/detail"><img src="assets\images\wp13386043-resident-evil-4-remake-4k-android-wallpapers.jpg" alt="resident evil"/></NavLink>
            </div>
            <div className="down-content">
                <span className="category">survival</span>
                <h4>resident evil 4</h4>
                <NavLink to="/shop">Explore</NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <NavLink to="/detail"><img src="assets/images/wp13489010-elden-ring-pc-wallpapers.png" alt="elden ring"/></NavLink>
            </div>
            <div className="down-content">
                <span className="category">open world</span>
                <h4>Elden ring</h4>
                <NavLink to="/shop">Explore</NavLink>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-6 col-sm-6">
          <div className="item">
            <div className="thumb">
              <NavLink to="/detail"><img src="assets/images/wp13002074-stray-cat-game-wallpapers.jpg" alt="stray"/></NavLink>
            </div>
            <div className="down-content">
                <span className="category">adventure</span>
                <h4>stray</h4>
                <NavLink to="/shop">Explore</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Mostplay