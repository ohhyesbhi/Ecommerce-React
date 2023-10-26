import { signUp } from "../../apis/fakestoreApi"
import Image from "../../assets/fun-3d-illustration-cartoon-teenage-girl.jpg"
import Auth from '../../components/auth/Auth'
import {Link} from "react-router-dom"
import axios from "axios"

function Signup() {
  return (
   <>
   <div className="container" style={{marginTop:"8rem"}}>
        <div className="login-wrapper" id="loginForm">
          <div className='wrapper'>
          <img src={Image} style={{ width: "55%" }} />
          <div style={{width:"100%"}}>
            <h4 className="text-center">SignUp</h4>

            <Auth onSubmit={async(autharguments)=>{
              try {
                const response = await axios.post(signUp(),{
                  username : autharguments.names,
                  email : autharguments.emails,
                  password : autharguments.passwords
                 })  
              } catch (error) {
                console.log(error)
              }
                    
                      }} />
            
            <div className="signup-btn text-center" id="showSignupBtn">
              <Link to="/signin" style={{color:"black"}}> Already have an Account? SignIn Here</Link>    
            </div>
          </div>
          </div>
          
        </div>
      </div>
   </>
  )
}

export default Signup
