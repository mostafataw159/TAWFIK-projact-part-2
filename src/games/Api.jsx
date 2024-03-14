
import React, { Component } from 'react'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'


export class Api extends Component {
    state = {
        persons: []
    }
    componentDidMount() {
      axios.get("/assets/js/api.json")
          .then((item) => {
                this.setState(
                    {
                        persons: item.data
                    }
                    )
            })
    }
    render() {
        return (
            <div>
                <div className="section trending">
                    <div className="container">
                    <div className="row">
        <div className="col-lg-6">
          <div className="section-heading">
          <h6>this just a api site okay :)</h6> 
            <h3>download games:</h3>
           
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <NavLink to="/games">View All</NavLink>
          </div>
          </div>
                        <div className="row trending-box">

                            {this.state.persons.map((item) => (
                            <div className="col-lg-4 col-md-4 align-self-center mb-30 trending-items col-md-4 my-3 adv" >
                                <div className="item">
                                    <div className="thumb">
                                        <NavLink to="/detail">
                                            <img src={item.images[1]} alt=""style={{height:"355px"}} /></NavLink>
                                        <span className="price"><em>{item.discountPercentage}$</em>{item.price}$</span>
                                    </div>
                                    <div className="down-content">
                                        <span className="category">{item.category}</span>
                                        <h4>{item.title}</h4>
                                        <NavLink to="/success"><i class="fa-solid fa-download" style={{color: "#00ff2a;"}}></i></NavLink>
                                    </div>
                                </div>
                            </div>
                            ))}
 <div className="row">
        <div className="col-lg-12">
          <ul className="pagination">
          <li><a href="/games"> &lt; </a></li>
            <li><NavLink to="/games"className="is_active" >1</NavLink></li>
            <li><a href="/games"> &gt; </a></li>
          </ul>
        </div>
      </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Api