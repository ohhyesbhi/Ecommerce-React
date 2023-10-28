import { Link, useParams } from "react-router-dom";
import { useState } from "react";
// css import
import "./filterproduct.css"


function Filterproduct({clickSearch,clickFilter}) {

    const {categoryName} = useParams();
    const minPriceArr = [0,10,20,50,100,200];
    const maxPriceArr = [0,10,20,50,100,200,1000];
    const [minPrice,setMinPrice] = useState("");
    const [maxPrice,setMaxPrice] = useState("");

    const [search,setSearch] = useState("")

    function handleOnClick(){
             clickSearch(search,minPrice,maxPrice)
    }


  return (
   <>
   <div className="product-list-sidebar d-flex flex-column">
        <div className="sidebar-title">Search Products in {categoryName}</div>
        <div className="sidebar-search form-group">
          <input
            type="text"
            placeholder="Search by name"
            className="form-control"
            id="searchInput"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>

        <div className="sidebar-title fw-bold">Categories</div>
        <div id="categoryList">
        <Link to="/products/electronics" className='d-flex text-decoration-none '>Electronics</Link>
         <Link to="/products/jewelery" className='d-flex text-decoration-none '>Jewelery</Link>
         <Link to="/products/men's clothing" className='d-flex text-decoration-none '>Men clothing</Link>
         <Link to="/products/women's clothing" className='d-flex text-decoration-none '>Women clothing </Link>

        </div>

        <div className="sidebar-title">Filter by price</div>
        <div className="price-filter">
          <div className="price-filter-select d-flex flex-row justify-content-between">
            <div className="form-group">
              <select name="minPrice" className="form-select" value={minPrice} id="minPrice" onChange={(e)=>setMinPrice(e.target.value)}>
                {
                  minPriceArr.map((price)=><option key={price} value={price}>{price}</option>)
                }
              </select>
            </div>
            <div className="form-group">
              <select name="maxPrice" className="form-select" id="maxPrice" value={maxPrice}  onChange={(e)=>setMaxPrice(e.target.value)}>
              {
                  maxPriceArr.map((price)=><option key={price} value={price}>{price}</option>)
                }
              </select>
            </div>
          </div>
          <div className="price-filter-title d-flex flex-row justify-content-around">
            <div id="price-filter-label-min">Min Price</div>
            <div id="price-filter-label-max">Max Price</div>
          </div>
        </div>
        <button className="btn btn-warning clear-filter" id="search"
        onClick={()=>handleOnClick()}
        >
          Search
        </button>
        <button className="btn btn-danger clear-filter" id="clear"
        onClick={()=>{
          clickFilter()
          setMaxPrice(0);
          setMinPrice(0);
          setSearch("")
        }}
        >
          Clear Filters
        </button>
      </div>
   </>
  )
}

export default Filterproduct





