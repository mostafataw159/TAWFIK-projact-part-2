import React from 'react'
import { NavLink } from 'react-router-dom'

function Pagecontect() {
  return (
    <div><div className="page-heading header-text">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3>Contact Us</h3>
          <span className="breadcrumb"><NavLink to="/home">Home / </NavLink> Contact Us</span>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Pagecontect