import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart';

function Header() { 
  const {
    items,
    totalUniqueItems,
    updateItemQuantity,
  } = useCart();
const initialValue = 0;
const total = items.reduce((accumulator,item) => accumulator + item.quantity, initialValue)

  return (
    <div>
          <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                { /* <!-- ***** Logo Start ***** -->*/}
                    <Link to="/home" className="logo">
                        <img src="assets\images\shield_8959554.png"alt="" style={{width:"99px"}}></img>
                    </Link>
                    { /* <!-- ***** Logo End ***** -->*/}
                  { /* <!-- ***** Menu Start ***** -->*/}
                    <ul className="nav">
                      <li>
                        <NavLink to="/home" className='is_active' role="tab"  aria-selected="true">Home</NavLink>
                      </li>
                      <li>
                      <NavLink to="/games" role="tab"  aria-selected="true">games </NavLink>
                      </li>
                      <li>
                        <NavLink to="/detail" role="tab"  aria-selected="true">Game Details</NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop" role="tab"  aria-selected="true">Gameshop</NavLink>
                      </li>
                      <li>
                        <NavLink to="/contact" role="tab"  aria-selected="true" style={{marginRight:"-14px"}}>Contact Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/sign" id='sign-in' role="tab"  aria-selected="true">Sign In</NavLink>
                      </li>
                       <li>
                        <NavLink to="/cart" role="tab"  aria-selected="true">
                          <img src='assets\images\cart.png' style={{width:'55px',height:"44px",borderRadius:"18px"}}/>
                          <span class="badge badge-success badge-css">
                          {items.reduce((total, item)=>total+(item.quantity),0)}
                          </span>
                          </NavLink>
                      </li> 
                  </ul>   
                    <Link className='menu-trigger'>
                        <span>Menu</span>
                    </Link>
                     { /*  ***** Menu End ******/}
                </nav>
            </div>
        </div>
    </div>
  </header>
    </div>
  )
}

export default Header