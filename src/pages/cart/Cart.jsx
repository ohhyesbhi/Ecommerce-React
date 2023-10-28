import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import uniqid from 'uniqid';
// css import 
import "./cart.css"
// component import
import Cartproducts from '../../components/cartproducts/Cartproducts'
import { addProductQuantity, getParticularProducts } from '../../apis/fakestoreApi';
import usercontext from "../../contextApi/usercontext"
import cartcontext from '../../contextApi/cartcontext';


function Cart() {

    
    const {user,setUser} = useContext(usercontext)
    const [products,setProducts] = useState([])
    const {cart,setCart} = useContext(cartcontext);
    let price = 0
    useEffect(()=>{
        console.log(cart,"cartssss")
         downloadCartProducts(cart)
    },[cart])

    async function downloadCartProducts(cart){
         if(!cart || !cart.products) return;

         const productQuantityMapping = {};
         cart.products.forEach(product => {
            productQuantityMapping[product.productId] = product.quantity;
         })
         console.log(productQuantityMapping,"quantiy")
         const productsPromise = cart.products.map(product => axios.get(getParticularProducts(product.productId)));
         const productPromiseResponse = await axios.all(productsPromise);
         const downloadProducts = productPromiseResponse.map(product => ({...product.data,quantity:productQuantityMapping[product.data.id]}))
         setProducts(downloadProducts)
    }

    async function onProductUpdate(productId,quantity){
          if(!user) return 

          const response = await axios.put(addProductQuantity(),{
            userId : user.id,
            productId , quantity
          })

          setCart({...response.data})
    }
   
 
  return (
    <>
    <div className="container" id='cart'>
            <div className="row">
                <h2 className="cart-title text-center">Your cart</h2>
                <div className="cart-wrapper d-flex flex-row">
                    <div className="order-details d-flex flex-column" id="orderDetails">
                    <div className="order-details-title">Order Details</div>
                    {
                        products.map((item)=>{
                            price=price+(item.price)*(item.quantity)
                            const id = uniqid()
                            return (
                                <>
                                <Cartproducts
                                 key={id} 
                                 Id={item.id}
                                 title = {item.title}
                                 price={item.price} 
                                 image={item.image} 
                                 quantity={item.quantity}
                                 onRemove={()=>onProductUpdate(item.id,0)}
                                 />
                                </>
                            )
                        })
                    }
           
                        
                    </div>

                    <div className="price-details d-flex flex-column" id="priceDetails">
                        <div className="price-details-box">

                 

                            <div className="price-details-title fw-bold">Price Details</div>
                            <div className="price-details-data">
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Price</div>
                                    <div id="total-price">₹{price}</div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Discount</div>
                                    <div>₹{price<100 ? 0 : 100}</div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Delivery Charges</div>
                                    <div>FREE</div>
                                </div>
                                <div className="price-details-item d-flex flex-row justify-content-between">
                                    <div>Total</div>
                                    <div id="net-price">₹{(price-100)<0?price:price-100}</div>
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
