import React from 'react'
import Header from '../Header'
import Pageselected from './Pageselected'
import { CartProvider, useCart } from 'react-use-cart';
import Footerselected from './Footerselected';
import { NavLink } from 'react-router-dom';


function Cart() {
    

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

const initialValue = 0;
const total = items.reduce((accumulator,item) => accumulator + item.price * item.quantity, initialValue)

    if (isEmpty) return <h4 className='text-center mt-5'>Your cart is empty <br></br>go to gameshop to get your games. </h4>;

    return (
        <>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className='thead-game '>
                                <tr>
                                    <th scope="col">Games</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">delete</th>
                                </tr>
                            </thead>
                            <tbody className="tbody-cart">
                                {items.map((item) => (
                                    <tr key={item.id}>
                                        <th scope="row">
                                            <div className="d-flex align-items-center">
                                                <img src={item.images[1]} className="img-fluid me-5 rounded-circle game-img" style={{ maxWidth: "80px", maxHeight: "80px;" }} alt="" />
                                            </div>
                                        </th>
                                        <td>
                                        <p className="mb-1 mt-4 title-cart ">{item.title}</p>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">{item.price}$</p>
                                    </td>
                                    <td>
                                        <div className="input-group quantity mt-4" style={{ width: "78px;" }}>
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-minus rounded-circle bg-light border" 
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                    <i className="fa fa-minus" ></i>
                                                </button>
                                            </div>
                                            <input type="text" className="form-control form-control-sm text-center border-0" value={item.quantity} />
                                            <div className="input-group-btn">
                                                <button className="btn btn-sm btn-plus rounded-circle bg-light border"
                                                 onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                    <i className="fa fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0 mt-4">{item.price*item.quantity}$</p>
                                    </td>
                                    <td>
                                        <button className="btn btn-md rounded-circle bg-light border mt-4"onClick={() => removeItem(item.id)}>

                                            <i className="fa fa-times text-danger"></i>
                                        </button>
                                    </td>
                                       
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-5 ">
                       <NavLink to="/shop" className=" btn-danger rounded-pill px-4 py-3 ml-4">Back To Gameshop</NavLink>
              </div> 
                   
                
                    <div className="row g-4 justify-content-end total-cart">
                        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                            <div className="bg-light rounded">
                                <div className="p-4">
                                    <h1 className="display-6 mb-4">cash <span className="fw-normal">Total</span></h1>
                                    <div className="d-flex justify-content-between mb-4">
                                        <h5 className="mb-0 me-4">total price:</h5>
                                        <p className="mb-0">{items.reduce((total, item)=>total+(item.price*item.quantity),0)}$</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <h5 className="mb-0 me-4">Shipping</h5>
                                        <div className="">
                                            <p className="mb-0"> $5.00</p>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-end">Shipping to egypt.</p>
                                </div>
                                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                                    <p className="mb-0 pe-4">{items.reduce((total, item)=>total+(item.price*item.quantity),0)+5}$</p>
                                </div>
                                <NavLink to="/total" className="btn btn-success rounded-pill px-4 py-3 text-uppercase mb-4 ms-4">confirm payment</NavLink>
                            </div>
                        </div>
                    </div>  
                    
                </div>
            </div>
        </>
    );
}



function Allselected() {
    return (
        <div>
            <CartProvider>
                <Header />
                <Pageselected />
                <Cart />
                <Footerselected/>
            </CartProvider>
        </div>
    )
}

export default Allselected