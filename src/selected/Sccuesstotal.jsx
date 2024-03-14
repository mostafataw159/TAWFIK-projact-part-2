import React from 'react'
import Header from '../Header'
import { NavLink } from 'react-router-dom'
import Footerselected from './Footerselected'


function Sccuesstotal() {
  return (
    <div>
      <Header/>
      <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
        </div>
      </div>
    </div>
  </div>
  <div className='container'>
    <div className='row'>
      <div className='col-12'>
   <h2 className='text-center download'>you order is successfully published we will contect you very soon and shipping your games. </h2>
  <h6 className='text-center mt-4'>this a lot of game you can try else go back now to tawfik and download others. </h6>
   <NavLink to="/home" className="btn btn-danger tawfik">Back To TAWFIK Website</NavLink>
 </div> 
 </div>
 </div>
 
 <div className="section trending">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
            <h6>Trending</h6>
            <h2>Trending Games:</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <NavLink to="/shop">View All</NavLink>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="item">
            <div className="thumb">
              <NavLink to="/detail"><img src="assets\images\cyberpunck.jpeg" className='img-fluid' alt=""/></NavLink>
              <span className="price"><em>70$</em>$55</span>
            </div>
            <div className="down-content">
              <span className="category">open world</span>
              <h4>cyberpunk 2077 </h4>
              <NavLink to="/success"><i class="fa-solid fa-download" style={{color: "#00ff2a;"}}></i></NavLink>
                    </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="item">
            <div className="thumb">
            <NavLink to="/detail"><img src="assets/images/wp9904842-minecraft-survival-series-wallpapers.jpg" className='img-fluid' alt=""/></NavLink>
             <span className="price">$15</span>
            </div>
            <div className="down-content">
              <span className="category">survival</span>
              <h4>minecraft</h4>
              <NavLink to="/success"><i class="fa-solid fa-download" style={{color: "#00ff2a;"}}></i></NavLink>
                  </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="item">
            <div className="thumb">
            <NavLink to="/detail"><img src="assets/images/wp9628633-dark-souls-1-wallpapers.jpg" className='img-fluid' alt=""/></NavLink>
                 <span className="price"><em>$54</em>$34</span>
            </div>
            <div className="down-content">
              <span className="category">adventure</span>
              <h4>dark souls </h4>
              <NavLink to="/success"><i class="fa-solid fa-download" style={{color: "#00ff2a;"}}></i></NavLink>
               </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="item">
            <div className="thumb">
            <NavLink to="/detail"><img src="assets/images/wp11824925-dying-light-definitive-edition-wallpapers.jpg" className='img-fluid' alt=""/></NavLink>
               <span className="price">$52</span>
            </div>
            <div className="down-content">
              <span className="category">zombie game</span>
              <h4>dying light 2</h4>
              <NavLink to="/success"><i class="fa-solid fa-download" style={{color: "#00ff2a;"}}></i></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<Footerselected/>
    </div>
   
  )
}

export default Sccuesstotal