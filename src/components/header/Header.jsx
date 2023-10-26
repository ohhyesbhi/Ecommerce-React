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
import jwt_decode from "jwt-decode"

// css import
import "./header.css"
import { Link } from 'react-router-dom';
import tokenDetails from '../../contextApi/context';


function Header(args) {
  const [isOpen, setIsOpen] = useState(false);
  const {token,setToken} = useContext(tokenDetails);

  let userDetails = ""
  if(token){
     userDetails = jwt_decode(token);
  }
  
  console.log(userDetails,"user details")

  

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
                  (token)?<Link to="/signup" style={{textDecoration:"none"}} onClick={()=>{
                    localStorage.removeItem("jwt-token")
                    setToken("")
                  }}> <DropdownItem>Logout</DropdownItem></Link>
                  :
                  <Link to="/signup" style={{textDecoration:"none"}}> <DropdownItem>Signup</DropdownItem></Link>  
                }
           
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {
            (userDetails!="")?<NavbarText>{userDetails.user}</NavbarText>:
            <></>
          }
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
