import toast from 'react-hot-toast';
import "./Auth.css"

import { Link, useNavigate } from 'react-router-dom'
import jwt_decode from "jwt-decode";
import axios from 'axios'
import { useCookies } from 'react-cookie';
import { useContext } from 'react';
// image import
import Image from "../../assets/wepik-export-20230815191001RxUw.png"
// components import
import Auth from '../../components/auth/Auth'
import { sigin } from '../../apis/fakestoreApi'
import usercontext from "../../contextApi/usercontext"

function Login() {
  const navigator = useNavigate()
  const [token,setToken] = useCookies(['jwt-token'])
  const {user,setUser} = useContext(usercontext)
  return (
    <>
    <div className="container" style={{marginTop:"8rem"}}>
        <div className="login-wrapper" id="loginForm">
          <div className='wrapper'>
            
          <img src={Image} style={{ width: "55%" }} />
          <div >
            <h4 className="text-center">Login</h4>

            <Auth onSubmit={async(autharguments)=>{
                    try {
                      const response = await axios.post(sigin(),{
                        username : autharguments.names,
                        email : autharguments.emails,
                        password : autharguments.passwords
                      },{withCredentials:true})

                      const tokenDetails = jwt_decode(response.data.token);
                      setUser({username:tokenDetails.user,id:tokenDetails.id})
                      toast.success("Successfully logged in")
                      setToken("jwt-token",response.data.token,{httpOnly:true})
                      navigator("/")
                      
                    } catch (error) {
                      toast.error(error.response.data)
                       console.log(error)
                    }   
                   
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


