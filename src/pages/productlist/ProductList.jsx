import Productbox from "../../components/productbox/Productbox"
import "./productlist.css"

import Image from "../../assets/wepik-export-20230815191001RxUw.png"

function ProductList() {
  return (
<>
 <div className="container">
    <div className="row">
    <h2 className="product-list-title text-center">All products</h2>
    <div className="product-list-wrapper d-flex flex-row">
       {/**list of products */}
       <div className="product-list-box" id="productList">
          <Productbox productImage={Image} name={"dummy"} price={1000}/>
       </div>
    </div>
    </div> 
 </div>
</>
  )
}

export default ProductList
