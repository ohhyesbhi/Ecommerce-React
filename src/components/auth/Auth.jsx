

function Auth() {

    // const[formDetails,setFormDetails] = useState({email:"",username:"",password:"",loading:true})
        
    // function updateUsername(name){
    //     setFormDetails({...formDetails,username:name,loading:true})
    // }

    // function updateEmail(emailid){
    //     setFormDetails({...formDetails,email:emailid,loading:true})
    // }

    // function updatePassword(pwd){
    //     setFormDetails({...formDetails,password:pwd,loading:true})
    // }

    // function handleOnSubmit(){
    //      setFormDetails({...formDetails,loading:false})
    //       onSubmit(formDetails)

          
    
    //     //   setResetSignupFormss(false)
    // }

    // function reseting(){
    //     setFormDetails({email:"",username:"",password:"",loading:true})
    // }
    //  useEffect(()=>{
    //     setFormDetails({email:"",username:"",password:"",loading:true})  
    //  },[])


    //  useImperativeHandle(ref,()=>{
    //     return {
    //     reseting:()=>setFormDetails({email:"",username:"",password:"",loading:true})
    //     }
    //  },[])

  return (
    <>
     <div className="input-group">
              <input type="text" value=""  className="form-control" placeholder="Username" id="loginUsername"/>
          </div>
       
            <div className="input-group">
               <input type="email" value=""  className="form-control" placeholder="email" id="loginemail"/>
            </div>

          
          <div className="input-group">
              <input type="password" value=""  className="form-control" placeholder="Password" id="loginPassword"/>
          </div>
          <div className="input-group">
            {/* {
                formDetails.loading?
                <button className="form-control btn btn-primary" ref={ref} onClick={()=>handleOnSubmit()}>
                   Submit
                </button>
                :
                <button  ref={ref} className="form-control btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                 Loading...
                </button> 
            } */}
              
            
          </div>
    </>
  )
}

export default Auth
