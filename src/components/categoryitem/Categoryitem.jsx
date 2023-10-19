// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./category.css"

function CategoryItem({itemName,filter=''}){

console.log("filter",filter)

const redirectlink = `/products?category=${filter}`
    return (
      <>
        <div className="category-item d-flex align-items-center justify-content-center">
          <Link to="/products"><p>{itemName}</p></Link>
        </div>
      </>
    );
}

export default CategoryItem;