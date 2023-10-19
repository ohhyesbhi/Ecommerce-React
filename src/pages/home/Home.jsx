import {useState, useEffect } from "react";
import { getAllCtegories} from "../../apis/fakestoreApi";
import axios from "axios"
import CategoryItem from "../../components/categoryitem/Categoryitem";
import Image from "../../assets/2209_w048_n005_340b_p1_339.jpg"


// css import
import "./home.css"

function Home() {
    const [categories,setCategories] = useState([]);

   async function downloadCategories(){
      const response = await axios.get(getAllCtegories());
      setCategories(response.data)
      console.log(response.data,"key")
   }


  useEffect(()=>{
     downloadCategories()
  },[])
  return (
    <>
    <div className="container">
        <div className="row">
          <h2 className="home-title text-center">Welcome to Shop Cart</h2>
          <div
            className="category-list d-flex flex-row justify-content-between align-items-center"
            id="categoryList"
            style={{marginTop:"2rem"}}
           >
            <CategoryItem itemName="All Products"  />
            {
              categories.map((items,i)=> <CategoryItem itemName={items} filter={items} key={i} />)
            }
           
          </div>
          <div className="img">
            <img style={{width:"100%"}} src={Image}/>
          </div>
          <div className="category-title text-center">
            Select a category to start Shopping
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
