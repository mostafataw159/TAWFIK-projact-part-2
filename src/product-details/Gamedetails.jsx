import React from 'react'
import { CartProvider, } from "react-use-cart";
import { Link } from "react-router-dom";

function Gamedetails() {
  return (
    <div>
        <div className="single-product section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="left-image">
            <img src="assets/images/Assassin's Creed IV.jfif" alt="assissan"/>
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <h4>Assassins creed®: black flag®</h4>
          <span className="price text-success"><em className='text text-danger'>$65</em> $38</span>
          <p>this games is talking about assassin his name is edward kenwy in englend he fight againest templeres because they killed peaple to take their grounds and their houses to themselfs so he fight for glory and his grounds and his peaple.</p>
          <form id="qty" action="/success">
            <button type="submit"><i class="fa-solid fa-download" style={{color: "#00ff2a;"}}></i> download</button>
          </form>
          <ul>
            <li><span>Game ID:</span> AC'BF</li>
            <li><span>Genre:</span> <a href="/games">adventure</a>, <a href="/games">open world</a>, <a href="/games">fight</a></li>
            <li><span>Multi-tags:</span> <a href="#">assassinate</a>, <a href="#">pirate</a>, <a href="#">swords fight</a></li>
          </ul>
        </div>
        <div className="col-lg-12">
          <div className="sep"></div>
        </div>
        
      </div>
    </div>
  </div>
    </div>
  )
}

export default Gamedetails
   