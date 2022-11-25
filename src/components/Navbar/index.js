import React from "react";
import { Nav, NavLink, NavMenu, MenuBtn } from "./NavbarElements";
import Logo from "../../assets/logo.svg";
import Line from "../../assets/line.svg";
import Andriod from "../../assets/andriod.svg";
import Apple from "../../assets/apple.svg";
import OpenBtn from "../../assets/menu-open.svg";

function Navbar({ toggle }) {
  return (
    <>
      <div className="container">
        <div className="custom-container">
          <Nav>
            <NavLink to={"/"}>
              <img src={Logo} alt="logo" />
            </NavLink>

            <MenuBtn>
              <img src={OpenBtn} alt="logo" onClick={toggle} />
            </MenuBtn>

            <NavMenu>
              <NavLink to="/about" activStyle>
                About Us
              </NavLink>
              <a href="https://api.whatsapp.com/send?phone=2348138176064" activStyle style={{ color: '#fff', textDecoration: 'none' }}>
                WhatsApp
              </a>
              {/* <NavLink to="/about" activStyle>
                Sign-In
              </NavLink>
              <NavLink to="/about" activStyle>
                Sign-up
              </NavLink> */}

              <div className="btn-download-purple d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center align-items-center mx-2">
                  <div className="ps-2">DOWNLOAD THE APP </div>
                  <img src={Line} alt="" className="px-2" />
                  <a href="https://play.google.com/store/apps/details?id=com.oneminutepay">
                    <img src={Andriod} alt="" className="mx-2" />
                  </a>
                  <a href="https://apps.apple.com/us/app/1minutepay-com/id1637654016">
                    <img src={Apple} alt="" className="mx-2" />
                  </a>
                </div>
              </div>
            </NavMenu>
          </Nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
