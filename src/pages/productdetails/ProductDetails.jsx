import { useParams } from "react-router-dom"
import "./productdetails.css"
import { useEffect, useState } from "react";
import { productDetails } from "../../apis/fakestoreApi";
import axios from "axios";

function ProductDetails() {

    const {id} = useParams();
    const [pdDetails,setPdDetails] = useState([])

    useEffect(()=>{
      downloadProductDetails()
    },[id])

   async function downloadProductDetails(){
      const response = await axios.get(productDetails(id))
      setPdDetails(response.data)
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

                        <div className="product-details-action btn btn-primary text-decoration-non" >Add to cart</div>
                        <a href="cart.html" id="goToCartBtn" className="product-details-action btn btn-warning text-decoration-none">
                            Go to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default ProductDetails
