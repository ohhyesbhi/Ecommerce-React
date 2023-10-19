import { Routes,Route } from "react-router-dom"
import Error from "../pages/error/Error"
import App from "../App"
import ProductList from "../pages/productlist/ProductList"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

function MainRoute() {
    return (
     <>
     <Header light={true} expand="md" container="md" color="light" fixed="top"/>
       <Routes>
          <Route path='/' element={<App/>} />
           <Route path="/products" element={<ProductList/>} />
          {/*<Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/cart" element={<Cart/>}/> */}
          <Route path="*" element={<Error/>} />
       </Routes>
       <Footer/>
     
     </>
    )
  }
  
  export default MainRoute
  