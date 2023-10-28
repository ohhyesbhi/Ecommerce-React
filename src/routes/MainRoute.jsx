import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import jwt_decode from "jwt-decode"
import axios from 'axios';
import { Routes,Route } from "react-router-dom"
// component imports
import Error from "../pages/error/Error"
import App from "../App"
import ProductList from "../pages/productlist/ProductList"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import ProductDetails from "../pages/productdetails/ProductDetails"
import Login from "../pages/login/Login"
import SignUp from "../pages/login/Signup"
import Cart from '../pages/cart/Cart';
import usercontext from "../contextApi/usercontext"
import cartcontext from '../contextApi/cartcontext';


function MainRoute() {

   const [user,setUser] = useState(null)
   const [cart,setCart] = useState({products:[]})
   const [token, setToken] = useCookies(['jwt-token']);

   useEffect(()=>{
  axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/accesstoken`,{withCredentials:true})
  .then((res)=>{
    setToken("jwt-token",res.data.token,{httpOnly:true})
    const tokenDetails = jwt_decode(res.data.token);
    setUser({username:tokenDetails.user,id:tokenDetails.id})
})      
    
   },[])
  
    return (
     <>
     <usercontext.Provider value = {{user,setUser}}>
      <cartcontext.Provider value = {{cart,setCart}}>
     <Header light={true} expand="md" container="md" color="light" fixed="top"/>
       <Routes>
           <Route path='/' element={<App/>} />
           <Route path="/products/:categoryName" element={<ProductList/>} />
           <Route path="/product/:id" element={<ProductDetails/>}/>
           <Route path="/signin" element={<Login/>}/>
           <Route path="/signup" element={<SignUp/>}/>
           <Route path="/cart/:id" element={<Cart/>}/>
           <Route path="*" element={<Error/>} />
       </Routes>
       <Footer/> 
       </cartcontext.Provider>
       </usercontext.Provider>
     </>
    )
  }
  
  export default MainRoute
  