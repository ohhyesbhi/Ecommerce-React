import { Link, useParams } from "react-router-dom"
import "./productdetails.css"
import { useEffect, useState } from "react";
import { productDetails } from "../../apis/fakestoreApi";
import axios from "axios";
import cartcontext from "../../contextApi/cartcontext";
import { useContext } from "react";

function ProductDetails() {

    const {id} = useParams();
    const [pdDetails,setPdDetails] = useState([])
    const {cart,setCart} = useContext(cartcontext) 

    useEffect(()=>{
      downloadProductDetails()
    },[id])

   async function downloadProductDetails(){
      const response = await axios.get(productDetails(id))
      setPdDetails(response.data)
   }

   function onAddingProduct(){
        setCart({...cart, products:[...cart.products,id]})
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

                        <div className="product-details-action btn btn-primary text-decoration-non" onClick={onAddingProduct}>Add to cart</div>
                        <Link to="/cart" id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
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
