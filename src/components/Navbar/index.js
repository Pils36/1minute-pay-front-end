import React from 'react'
import { 
  Nav, 
  NavLink, 
  Bars, 
  NavMenu,
  NavBtn,
  NavBtnLink

} from './NavbarElements';

function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to={"/"}>
          <h1>Logo</h1>
        </NavLink>

        <Bars/>
        <NavMenu>
          <NavLink to="/about" activStyle>About</NavLink>
          <NavLink to="/about" activStyle>Services</NavLink>
          <NavLink to="/about" activStyle>Contact</NavLink>
          <NavLink to="/about" activStyle>Signup</NavLink>

        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar