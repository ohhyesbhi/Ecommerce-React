import axios from "axios"
import { useEffect,useState } from "react"
import { Link, useParams } from "react-router-dom"
// css import
import "./productlist.css"
// component import
import Filterproduct from "../../components/filterproduct/Filterproduct"
import Productbox from "../../components/productbox/Productbox"
import { getAllProducts, getParticularCategory } from "../../apis/fakestoreApi"


function ProductList() {
  
  const [productList,setProductList] = useState([])
  const {categoryName}= useParams();
  const [state,setState] = useState(false)
  

  async function downloadLists(){
    setState(false)
    if(categoryName == "All Products"){
     const response = await axios.get(getAllProducts())
     setProductList(response.data)
    }else{
      const response = await axios.get(getParticularCategory(categoryName))
      console.log(categoryName,"name")
      setProductList(response.data)
    }
  }
  
  useEffect(()=>{
    downloadLists()
  },[categoryName])

  
  function onClickSearch(search,minPrice,maxPrice){
          let minimumPrice = +minPrice
          let maximumPrice = +maxPrice
  

          if(minimumPrice > maximumPrice){
            alert("minimum price cannot be greater than maximum price")
          }
          // getting filtered from search and prices
          else if(search != "" && search != " "){
            const text = search.toLowerCase();
            const filteredSeachedProducts = productList.filter((items)=>{
              const name = items.title.toLowerCase().split(" ");
              console.log(name)
              let value = false

              name.filter((item)=>{
                console.log(item,text)
                if(item == text && item != "" && item != " "){
                       value = true;
                       return
                }
              })

              if(value == true){
                console.log(items)
                return items
              }
              
            })

            if(maxPrice != 0){
            const priceFilter = filteredSeachedProducts.filter((item)=>{
              if(item.price <= maxPrice && item.price >= minPrice){
                return item
              }
            })
            setProductList(priceFilter)
          }else{
            setProductList(filteredSeachedProducts)
          }
          }
          else{
            const priceFilter = productList.filter((item)=>{
              if(item.price <= maxPrice && item.price >= minPrice){
                return item
              }
            })
           

            setProductList(priceFilter)
          }
  }

  function onClickClearFilters(){
         downloadLists()
  }

  return (
<>
 <div className="container" style={{marginTop:"5rem"}}>
    <div className="row">
    <h2 className="product-list-title text-center">{categoryName}</h2>
    {
      state?<p style={{display:"flex",justifyContent:"center",cursor:"pointer",textDecoration:"underline",color:"#5264d0",marginLeft:"6rem"}} onClick={()=>{
        downloadLists()
      }}> Go back to products</p>:<></>
    }
    
    <div className="product-list-wrapper d-flex flex-row">
      <Filterproduct clickSearch={onClickSearch} clickFilter={onClickClearFilters} />
       {/**list of products */}
       <div className="product-list-box" id="productList">
        {
          productList.map((items)=>{
            console.log(items)
            return (
            
               <Productbox key={items.id} id={items.id} productImage={items.image} name={items.title} price={items.price}/>
             
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
