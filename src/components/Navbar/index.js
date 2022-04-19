import React from 'react'
import { 
  Nav, 
  NavLink, 
  Bars, 
  NavMenu,

} from './NavbarElements';

function Navbar({toggle}) {
  return (
    <>
      <Nav>
        <NavLink to={"/"}>
          <h1>Logo</h1>
        </NavLink>

        <Bars onClick={toggle}/>
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