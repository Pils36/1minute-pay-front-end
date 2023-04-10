import React from "react";
import { Nav, NavLink, NavMenu, MenuBtn } from "./NavbarElements";
import Logo from "../../assets/logo.svg";
import Line from "../../assets/line.svg";
import Andriod from "../../assets/andriod.svg";
import Apple from "../../assets/apple.svg";
import OpenBtn from "../../assets/menu-open.svg";
import { HamburgerIcon, LogoIcon } from "../icons";

function Navbar({ toggle }) {
  return (
    <>
      <div className="container">
        <div className="custom-container">
          <Nav>
            <NavLink to={"/"}>
              <LogoIcon isWhite />
            </NavLink>

            <MenuBtn onClick={toggle}>
              <HamburgerIcon />
            </MenuBtn>

            <NavMenu>
              <NavLink to="/about-us" activStyle>
                About Us
              </NavLink>
              <NavLink to="/contact-us" activStyle>
                Contact Us
              </NavLink>
              <NavLink to="/blog" activStyle>
                Blog
              </NavLink>
              {/* <a
                href="https://api.whatsapp.com/send?phone=2348138176064"
                activStyle
                style={{ color: "#fff", textDecoration: "none" }}
              >
                WhatsApp
              </a> */}
              {/* <NavLink to="/about" activStyle>
                Sign-In
              </NavLink>
              <NavLink to="/about" activStyle>
                Sign-up
              </NavLink> */}

              <div className="btn-download-purple d-flex justify-content-center align-items-center">
                <div
                  className="d-flex justify-content-center align-items-center mx-2"
                  onClick={() =>
                    (window.location.href = "https://onelink.to/q5au2z")
                  }
                  style={{ cursor: "pointer" }}
                >
                  <div className="ps-2">DOWNLOAD THE APP </div>
                  <img src={Line} alt="" className="px-2" />
                  <a
                    href="https://play.google.com/store/apps/details?id=com.oneminutepay"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <img src={Andriod} alt="" className="mx-2" />
                  </a>
                  <a
                    href="https://apps.apple.com/ng/app/1minutepay-com/id1637654016"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
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
