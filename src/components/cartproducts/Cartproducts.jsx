import React, { useContext } from 'react';
import axios from 'axios';
// css import
import "./cartproducts.css"
// component import
import { addProductQuantity } from '../../apis/fakestoreApi';
import usercontext from "../../contextApi/usercontext";
import cartcontext from '../../contextApi/cartcontext';

function Cartproducts({title,price,image,quantity,Id,onRemove}) {
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const {user} = useContext(usercontext)
    const {cart,setCart} = useContext(cartcontext)
   
    async function handleOnChangeQuantity(e){
      const value = e.target.value
      const response = await axios.put(addProductQuantity(),{
            userId : user.id,
            productId : Id,
            quantity : value
      })
      setCart({...response.data})
    }


  return (
    <>
<div className="order-details-product d-flex flex-row">
    <div className="order-details-product-img d-flex" style={{width:"80%",height:"90%"}}>
        <img src={image}/>
    </div>
<div className="order-details-product-data d-flex flex-column">
    <div>{title}</div>
    <div>{price}</div>
    </div>
<div className="order-details-product-actions d-flex flex-column">
    <div className="order-details-product-quantity">
        <div className="fw-bold">Quantity</div>
        <div className="form-group">
        <select className="form-select" onChange={(e)=>handleOnChangeQuantity(e)}>
            {
             arr.map((id)=>{
                return(
                  <option  key={id} selected={(quantity == id)?quantity:0}  value={id}>{id}</option>
                )
               
              })
            }
            </select>
        </div>
    </div>
    <button className="order-details-product-remove btn btn-danger" style={{marginTop:"2rem"}} onClick={()=>onRemove()}>Remove</button>
    </div>
    </div> 
</>

  )
}

export default Cartproducts
