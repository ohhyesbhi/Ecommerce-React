import { Link } from "react-router-dom"
// css import
import "./productbox.css"

function Productbox({id,productImage,name,price}) {
  console.log(id)
  return (
   <>
   <Link to={`/product/${id}`} className="product-item text-decoration-none d-inline-block">
          <div className="product-img">
            <img src={productImage} alt="" />
          </div>
          <div className="product-name text-center">{name.substring(0,15)+"..."}</div>
          <div className="product-price text-center">{"₹"+price}</div>
        </Link>
   </>
  )
}

export default Productbox
