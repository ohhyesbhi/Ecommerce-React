import { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
// css import
import "./header.css"
// component imports
import usercontext from "../../contextApi/usercontext"
import useCart from '../../hooks/useCart';

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [token,setToken,removeToken] = useCookies(["jwt-token"]);

  const {user,setUser} = useContext(usercontext)
  const [cart,setCart] = useCart(user?user.id:undefined);
  
  console.log(cart,"cart",user)

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar {...args}>
        <NavbarBrand id='title' href="/">
          <Link to="/" style={{textDecoration:"none",color:"black"}}>Shopcart</Link>
          </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{marginRight:'2rem'}}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    {
                     user &&  <Link className=' text-decoration-none text-black' to={`/cart/${user.id}`}>Cart   {cart && <span> ({cart.products.length})</span> }</Link>
                    }
                </DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                {
                  (token["jwt-token"])?<Link to="/signup" style={{textDecoration:"none"}}
                  onClick={()=>{
                    removeToken("jwt-token")
                     setUser(null)
                     setCart(0)
                     axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/logout`,{withCredentials:true})
                      }
                    }
                  >
                     <DropdownItem>Logout</DropdownItem></Link>
                  :
                  <Link to="/signup" style={{textDecoration:"none"}}> <DropdownItem>Signup</DropdownItem></Link>  
                }
           
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {
            (user)?<NavbarText>{user.username}</NavbarText>:
            <></>
          }
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
