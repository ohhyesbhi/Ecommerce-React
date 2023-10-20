import Productbox from "../../components/productbox/Productbox"
import "./productlist.css"
import Filterproduct from "../../components/filterproduct/Filterproduct"
import axios from "axios"
import { getAllProducts, getParticularCategory } from "../../apis/fakestoreApi"
import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"


function ProductList() {
  
  const [productList,setProductList] = useState([])
  const {categoryName}= useParams();

  async function downloadLists(){
    console.log(categoryName,"name")
    if(categoryName == "All Products"){
     const response = await axios.get(getAllProducts())
     setProductList(response.data)
    }else{
      const response = await axios.get(getParticularCategory(categoryName))
      setProductList(response.data)
    }
  }

  
  useEffect(()=>{
    downloadLists()
  },[categoryName])

  return (
<>
 <div className="container" style={{marginTop:"1rem"}}>
    <div className="row">
    <h2 className="product-list-title text-center">{categoryName}</h2>
    <div className="product-list-wrapper d-flex flex-row">
      <Filterproduct/>
       {/**list of products */}
       <div className="product-list-box" id="productList">
        {
          productList.map((items)=>{
            return (
              <>
               <Productbox productImage={items.image} name={items.title} price={items.price}/>
              </> 
            )
          })
        }
       </div>
    </div>
    </div> 
 </div>
</>
  )
}

export default ProductList
