import "./productdetails.css"

function ProductDetails() {
  return (
    <>
    <div id="productDetailsPage"> 
     <div className="container">
            <div className="row">
                <div className="product-details-wrapper d-flex justify-content-between align-items-start flex-row">
                    <div className="product-img d-flex">
                        <img src="https://www.aristobrat.in/cdn/shop/products/ClassicShirt_FrenchBlue1_1080x.jpg?v=1667207840" alt="product image" id="product-img"/>
                    </div>

                    <div className="product-details-box d-flex flex-column">
                        <div id="productDetails">
                            
                            <div className="product-name" id="product-name">{/*pdDetails.title*/}</div>
                            <div className="product-price fw-bold" id="product-price">{/*pdDetails.price*/}</div>
                            <div className="product-description">
                                <div className="product-description-title fw-bold">{/*pdDetails.title*/}</div>
                                <div className="product-description-data" id="product-description-data">
                                    {/* {pdDetails.description} */}
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
