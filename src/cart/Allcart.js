import { CartProvider, useCart } from "react-use-cart";
import React from "react";
import Apicart from "./Apicart";
import Header from "../Header";
import { Link, NavLink } from "react-router-dom";
import Pagegameshop from "./Pagegameshop";
import ScrollToTop from "react-scroll-to-top";
import Footercart from "./Footercart";

function Page() {
  const { addItem } = useCart();

  return (
    <div>

<div className="section trending">
<div className="container">
<div className="row trending-box">
<div className="col-lg-6">
          <div className="section-heading">
            <h6>TOP GAMES FOR PS</h6>
            <h2>order cd Games:</h2>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="main-button">
            <NavLink to="/shop" className='active'>View All</NavLink>
          </div>
        </div>
{Apicart.map((item) => (
                            <div className="col-lg-4 col-md-4 align-self-center mb-30 trending-items col-md-4 my-3 adv" >
                                <div className="item">
                                    <div className="thumb">
                                        <Link to="/detail">
                                            <img src={item.images[1]} alt="api"style={{height:"355px"}} /></Link>
                                        <span className="price"><em>{item.discountPercentage}$</em>{item.price}$</span>
                                    </div>
                                    <div className="down-content">
                                        <span className="category">{item.category}</span>
                                        <h4>{item.title}</h4>
                                        <button onClick={() => addItem(item)} className="api-button"><i class="fa-solid fa-gamepad" style={{color: "#00bfff;"}}></i></button>
                                    </div>
                                </div>
                            </div>
                            ))}
                             <div className="row">
        <div className="col-lg-12">
          <ul className="pagination">
          <li><a href="#"> &lt; </a></li>
            <li><NavLink to="/games"className="is_active" >1</NavLink></li>
            <li><a href="#"> &gt; </a></li>
          </ul>
        </div>
</div>
</div>
</div>
      </div>
      </div>
  );
}



function Allcart() {
  return (
    

    <CartProvider>
        <Header/>
        <Pagegameshop/>
      <Page />
      <Footercart/>
    </CartProvider>


  );
}
export default Allcart