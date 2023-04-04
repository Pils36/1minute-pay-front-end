import React, { useState } from "react";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
import CloseBtn from "../../assets/menu-close.svg";
import Logo from "../../assets/logo.svg";
import BoxEth from "../../assets/ethereum-box.svg";
import BoxAmazon from "../../assets/amazon-box.svg";
import About from "./About";

const Sidebar = ({ isOpen, toggle }) => {
  const [about, setAbout] = useState(false);

  const showModal = () => {
    // toggle()
    setAbout((prev) => !prev);
    // isOpen = !isOpen
    console.log("about is clicked");
  };

  const gotoWhatsapp = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=2348138176064";
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      {about && <About showModal={showModal} />}
      <Icon className="d-flex justify-content-between">
        <img src={Logo} alt="logo" />
        <img src={CloseBtn} alt="close-btn" onClick={toggle} />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/">
            Homepage
          </SidebarLink>
          <SidebarLink to="discover" onClick={showModal}>
            About Us
          </SidebarLink>
          <SidebarLink to="/contact-us" onClick={toggle}>
            Contact us
          </SidebarLink>
          <SidebarRoute onClick={gotoWhatsapp} to="">
            WhatsApp
          </SidebarRoute>
          {/* <SidebarRoute onClick={toggle} to="services">
            Sign-In
          </SidebarRoute>
          <SidebarRoute onClick={toggle} to="contact">
            Sign-Up
          </SidebarRoute> */}
        </SidebarMenu>

        <SideBtnWrap>
          <div className="crypto-card">
            <div className="cryptobox-mobile d-flex justify-content-end">
              <div className="box-purple-mobile">
                <div className="box-img-mobile d-flex justify-content-start">
                  <img src={BoxEth} alt="" />
                </div>
                <div className="box-text">
                  <div className="head-text-mobile">Trade Crypto</div>
                </div>
              </div>
              <div className="box-grey-mobile">
                <div className="box-img-mobile d-flex justify-content-end">
                  <img src={BoxAmazon} alt="" />
                </div>
                <div className="box-text text-right">
                  <div className="head-text-mobile-right ">
                    Trade Gift Cards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
