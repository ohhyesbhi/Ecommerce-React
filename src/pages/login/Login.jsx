import toast from 'react-hot-toast';
import "./Auth.css"

import { Link, useNavigate } from 'react-router-dom'
import Auth from '../../components/auth/Auth'
import Image from "../../assets/wepik-export-20230815191001RxUw.png"
import jwt_decode from "jwt-decode";
import axios from 'axios'
import { sigin } from '../../apis/fakestoreApi'
import { useCookies } from 'react-cookie';
import { useContext } from 'react';
import usercontext from "../../contextApi/usercontext"

function Login() {
  const navigator = useNavigate()
  const [token,settoken] = useCookies(['jwt-token'])
  const {user,setUser} = useContext(usercontext)
  return (
    <>
    <div className="container" style={{marginTop:"8rem"}}>
        <div className="login-wrapper" id="loginForm">
          <div className='wrapper'>
            
          <img src={Image} style={{ width: "55%" }} />
          <div style={{width:"100%"}}>
            <h4 className="text-center">Login</h4>

            <Auth onSubmit={async(autharguments)=>{
                    try {
                      console.log(autharguments,"auth")
                      const response = await axios.post(sigin(),{
                        username : autharguments.names,
                        email : autharguments.emails,
                        password : autharguments.passwords
                      })
                      const tokenDetails = jwt_decode(response.data.token);
                      setUser({username:tokenDetails.user,id:tokenDetails.id})
                      toast.success("Successfully logged in")
                      settoken("jwt-token",response.data.token,{httpOnly:true})
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
