
import { Link } from 'react-router-dom'
import Auth from '../../components/auth/Auth'
import Image from "../../assets/wepik-export-20230815191001RxUw.png"

import "./Auth.css"

function Login() {
  return (
    <>
    <div className="container" style={{marginTop:"8rem"}}>
        <div className="login-wrapper" id="loginForm">
          <div className='wrapper'>
            
          <img src={Image} style={{ width: "55%" }} />
          <div style={{width:"100%"}}>
            <h4 className="text-center">Login</h4>

            <Auth onSubmit={(autharguments)=>{
                       
            }}/>  

            <div className="signup-btn text-center" id="showSignupBtn">
                <Link to="/signup" style={{color:"black"}}> Dont have an Account? SignUp Here</Link>    
            </div>
          </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Login


// <form onSubmit={handleSubmit(onSubmit)}>
// {/* register your input into the hook by invoking the "register" function */}
// <input defaultValue="test" {...register("example")} />
// <br/>
// {/* include validation with required or other standard HTML validation rules */}
// <input {...register("exampleRequired", { required: true })} />
// {/* errors will return when field validation fails  */}
// {errors.exampleRequired && <p>This field is required</p>}

// <input type="submit" />
// </form>
