import { useContext, useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useCookies } from 'react-cookie';
import usercontext from "../../contextApi/usercontext"

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [token,setToken,removeToken] = useCookies(["jwt-token"]);
  const {user,setUser} = useContext(usercontext)
  
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
                <DropdownItem>Cart</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem divider />
                {
                  (token["jwt-token"])?<Link to="/signup" style={{textDecoration:"none"}}
                  onClick={()=>{
                    removeToken("jwt-token")
                     setUser(null)
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
