import React from 'react'
import { NavLink } from 'react-router-dom'

function Pageheader() {
  return (
    <div>
          <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>Games</h3>
          <span class="breadcrumb"><NavLink to="/home">Home /</NavLink> Games</span>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Pageheader