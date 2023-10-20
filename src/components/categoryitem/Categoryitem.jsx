// import { Link } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import "./category.css"

function CategoryItem({itemName,filter=''}){


    return (
      <>
        <div className="category-item d-flex align-items-center justify-content-center">
         <p></p> <Link className="categoryName" to={`/products/${itemName}`}><p>{itemName}</p></Link>
        </div>
      </>
    );
}

export default CategoryItem;