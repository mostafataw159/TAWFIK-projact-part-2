import React from 'react'
import { NavLink } from 'react-router-dom'

function Pageselected() {
  return (
    <div>
                <div class="page-heading header-text">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h3>selected games</h3>
          <span class="breadcrumb"><NavLink to="/home">Home / </NavLink> selected</span>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Pageselected