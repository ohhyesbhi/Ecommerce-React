import { useState } from 'react';
import { Routes,Route } from "react-router-dom"
import Error from "../pages/error/Error"
import App from "../App"
import ProductList from "../pages/productlist/ProductList"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import ProductDetails from "../pages/productdetails/ProductDetails"
import Login from "../pages/login/Login"
import SignUp from "../pages/login/Signup"
import usercontext from "../contextApi/usercontext"

function MainRoute() {

   const [user,setUser] = useState(null)
  
    return (
     <>
     <usercontext.Provider value={{user,setUser}}>
     <Header light={true} expand="md" container="md" color="light" fixed="top"/>
       <Routes>
          <Route path='/' element={<App/>} />
           <Route path="/products/:categoryName" element={<ProductList/>} />
          <Route path="/product/:id" element={<ProductDetails/>}/>
         <Route path="/signin" element={<Login/>}/>
           <Route path="/signup" element={<SignUp/>}/>
          {/*<Route path="/cart" element={<Cart/>}/> */}
          <Route path="*" element={<Error/>} />
       </Routes>
       <Footer/> 
       </usercontext.Provider>
     </>
    )
  }
  
  export default MainRoute
  