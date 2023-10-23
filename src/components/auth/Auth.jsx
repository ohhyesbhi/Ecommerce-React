import { useState } from "react";
import { useForm } from 'react-hook-form';

function Auth({onSubmit}) {


    const {register,handleSubmit,formState:{errors}} = useForm();
        
    function handleOnSubmit(data){
    
      onSubmit(data)
   
    }

  return (
    <>
    <div className="ui main">
<form className="ui form" onSubmit={handleSubmit(handleOnSubmit)} >
         <div className="input-group field">
              <input type="text" name="names"   className="form-control"  placeholder="Username" id="loginUsername"
            //  onChange={(e)=>updateUsername(e.target.value)} 
              {...register("names",{ required : true,maxLength:15})}
              />
          </div>

          <div>
            {errors.names && errors.names.type == "required" && <p style={{marginBottom:"0.5rem",color:"red"}}>This field is mandatory </p>}
            {errors.names && errors.names.type == "maxLength" && <p style={{marginBottom:"0.5rem",color:"red"}}>Name cannot exceed 20 characters</p>}
          </div>
        
          <div className="input-group">
               <input name="emails" type="email" className="form-control" placeholder="email" id="loginemail"
               {...register("emails",{required : true , pattern : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
             //  onChange={(e)=>updateEmail(e.target.value)}
               />
               
          </div>

          <div >
            {errors.emails && errors.emails.type == "required" && <p style={{marginBottom:"0.5rem",color:"red"}}>This field is mandatory </p>}
            {errors.emails && errors.emails.type == "pattern" && <p style={{marginBottom:"0.5rem",color:"red"}}>Enter valid email id</p>}
          </div>
          
          <div className="input-group">
              <input name="passwords" type="password"  className="form-control" placeholder="Password" id="loginPassword"
              {...register("passwords",{required : true , pattern : /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[A-Z])(?=.*\d).{7,}$/i })}
            //  onChange={(e)=>updateEmail(e.target.value)}
              />
          </div>

          <div style={{marginBottom:"1rem"}}>
          {errors.passwords && errors.passwords.type == "required" && <p style={{marginBottom:"0.5rem",color:"red"}}>This field is mandatory </p>}
            {errors.passwords && errors.passwords.type == "pattern" && <p style={{marginBottom:"0.5rem",color:"red"}}>Password should contain 7 characters and should include 1 special char,1 number</p>}
          </div>

          <button  type="submit" className="form-control btn btn-primary ui button blue"  onClick={()=>{handleSubmit(handleOnSubmit)}}>
           Submit
          </button>
         
          </form>
          </div>
    </>
  )
}

export default Auth
