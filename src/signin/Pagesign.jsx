import React from 'react'
import { NavLink } from 'react-router-dom'

function Pagesign() {
  return (
    <div>
          <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>sign in</h3>
          <span class="breadcrumb"><NavLink to="/home">Home /</NavLink> sign in</span>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Pagesign