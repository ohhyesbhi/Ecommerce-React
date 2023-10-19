
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
          <div>
            <h4 className="text-center">Login</h4>

            <Auth/>

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
