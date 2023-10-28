import { Link, useParams } from "react-router-dom"
import { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// css import
import "./productdetails.css"
// components import
import { addProductToCart, productDetails } from "../../apis/fakestoreApi";
import cartcontext from "../../contextApi/cartcontext";
import usercontext from "../../contextApi/usercontext"

function ProductDetails() {

    const {id} = useParams();
    const [pdDetails,setPdDetails] = useState([])
    const {cart,setCart} = useContext(cartcontext) 
    const {user,setUser} = useContext(usercontext)
    const userId = (user)?user.id:undefined
    console.log(user,"user")

    useEffect(()=>{
      downloadProductDetails()
    },[id])

   async function downloadProductDetails(){
      const response = await axios.get(productDetails(id))
      setPdDetails(response.data)
   }

  async function onAddingProduct(){
    const response = await axios.put(addProductToCart(),{
            userId:user.id,
            productId:id
         })
console.log(response,"response")
         setCart({...response.data})
   }

  return (
    <>
    <div id="productDetailsPage" > 
     <div className="container">
            <div className="row">
                <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                    <div className="product-imgg d-flex">
                        <img src={pdDetails.image} alt="product image" id="product-img"/>
                    </div>

                    <div className="product-details-box d-flex flex-column">
                        <div id="productDetails">
                            
                            <div className="product-name" id="product-name">{pdDetails.title}</div>
                            <div className="product-price fw-bold" id="product-price">{pdDetails.price+"$"}</div>
                            <div className="product-description">
                                <div className="product-description-title fw-bold">{pdDetails.title}</div>
                                <div className="product-description-data" id="product-description-data">
                                    {pdDetails.description}
                                </div>
                            </div>
                        </div>
                        {
                          (user)?<div className="product-details-action btn btn-primary text-decoration-non" onClick={onAddingProduct}>Add to cart</div>
                        :
                        <div className="product-details-action btn btn-primary text-decoration-non">Add to cart</div>
                        
                        }
                          
                        
                        
                        <Link to={`/cart/${userId}`} id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
                            Go to cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default ProductDetails
