import React from 'react'
import { Link } from 'react-router-dom'
import Cartproducts from '../../components/cartproducts/Cartproducts'
import "./cart.css"

function Cart() {
  return (
    <>
    <div className="container" id='cart'>
            <div className="row">
                <h2 className="cart-title text-center">Your cart</h2>
                <div className="cart-wrapper d-flex flex-row">
                    <div className="order-details d-flex flex-column" id="orderDetails">
                    <div className="order-details-title">Order Details</div>
                        <Cartproducts/>
                        <Cartproducts/>
           
                        
                    </div>

                    <div className="price-details d-flex flex-column" id="priceDetails">
                        <div className="price-details-box">

                 

                            <div className="price-details-title fw-bold">Price Details</div>
                            <div className="price-details-data">
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Price</div>
                                    <div id="total-price"></div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Discount</div>
                                    <div>10</div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Delivery Charges</div>
                                    <div>FREE</div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Total</div>
                                    <div id="net-price"></div>
                                </div>
                            </div>

                        </div>
                        <div className="price-details-btn-group">
                           <Link to="/"> 
                            <a className="continue-shopping-btn btn btn-info text-decoration-none">
                                Continue Shopping
                            </a>
                            </Link> 
                            
                            <a className="checkout-btn btn btn-primary text-decoration-none" style={{marginLeft:"1rem"}}>
                                Checkout
                            </a>
                     
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cart
