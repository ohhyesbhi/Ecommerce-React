import { useContext, useEffect } from "react";
import cartcontext from "../contextApi/cartcontext";
import { getCartByUser } from "../apis/fakestoreApi";
import axios from "axios";

function useCart(id){
    const {cart,setCart} = useContext(cartcontext)
     
    async function fetchCartsByUser(){
     const response = await axios.get(getCartByUser(id));
     setCart(response.data[0])
    }

    useEffect(()=>{
     fetchCartsByUser(id)
     console.log("hello")
    },[id])

    return [cart,setCart]
}


export default useCart;