import React from 'react'
import { 
  Nav, 
  NavLink, 
  Bars, 
  NavMenu,
  MenuBtn

} from './NavbarElements';
import Logo from '../../assets/logo.svg';
import Line from '../../assets/line.svg';
import Andriod from '../../assets/andriod.svg';
import Apple from '../../assets/apple.svg';
import OpenBtn from '../../assets/menu-open.svg';

function Navbar({toggle}) {
  return (
    <>
      <Nav>
        <NavLink to={"/"}>
          <img src={Logo} alt="logo" />
        </NavLink>

        <MenuBtn>
          <img src={OpenBtn} alt="logo" onClick={toggle}/>
        </MenuBtn>

        <NavMenu>
          <NavLink to="/about" activStyle>About Us</NavLink>
          <NavLink to="/about" activStyle>Sign-In</NavLink>
          <NavLink to="/about" activStyle>Signup</NavLink>

          <div className="btn-download-purple d-flex justify-content-center align-items-center mx-2">
              <div className='d-flex justify-content-center align-items-center mx-2'>
                <div className='ps-2'>DOWNLOAD THE APP </div>
                <img src={Line} alt="" className='px-2' />
                <a href="/andriod">
                  <img src={Andriod} alt="" className='mx-2'/>
                </a>
                <a href="/apple">
                  <img src={Apple} alt="" className='mx-2' />
                </a>
              </div>
          </div>  
        </NavMenu>
      </Nav>
    </>
  )
}

export default Navbar