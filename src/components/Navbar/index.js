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
                <div className="d-flex justify-content-center align-items-center mx-2" onClick={() => window.location.href = "https://onelink.to/q5au2z"} style={{ cursor: "pointer" }}>
                  <div className="ps-2">DOWNLOAD THE APP </div>
                  <img src={Line} alt="" className="px-2" />
                  <a href="https://onelink.to/q5au2z">
                    <img src={Andriod} alt="" className="mx-2" />
                  </a>
                  <a href="https://onelink.to/q5au2z">
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
