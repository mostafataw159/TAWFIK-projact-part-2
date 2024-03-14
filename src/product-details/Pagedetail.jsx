import React from 'react'
import { NavLink } from 'react-router-dom'

function Pagedetail() {
  return (
    <div>
        
  <div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3>Assassin'creed black flag</h3>
          <span className="breadcrumb"><NavLink to="/home">Home/ </NavLink>   <NavLink to="/shop">Gameshop/ </NavLink>  Assasin Creed</span>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Pagedetail