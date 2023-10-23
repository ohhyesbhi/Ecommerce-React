// import { Link } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "./category.css"

function CategoryItem({itemName,filter=''}){


    return (
      <>
      <Link style={{textDecoration:"none",color:"black", fontWeight:"bold"}} to={`/products/${itemName}`}>
        <div className="category-item d-flex align-items-center justify-content-center">
         <p >{itemName}</p>
        </div>
        </Link> 
      </>
    );
}

export default CategoryItem;