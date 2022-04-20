import React from 'react';
import { 
  SidebarContainer, 
  Icon, 
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute
 } from './SidebarElements';
 import CloseBtn from '../../assets/menu-close.svg';
 import Logo from '../../assets/logo.svg';
import BoxEth from '../../assets/ethereum-box.svg';
import BoxAmazon from '../../assets/amazon-box.svg';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon className='d-flex justify-content-between'>
        <img src={Logo} alt="logo" />
        <img src={CloseBtn} alt="close-btn" onClick={toggle} />
      </Icon>

      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Homepage
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Sign-In
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Sign-Up
          </SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
        <div className="crypto-card">
            <div className="cryptobox-mobile d-flex justify-content-end">
              <div className="box-purple-mobile">
                <div className="box-img-mobile d-flex justify-content-start">
                  <img src={BoxEth}  alt="" />
                </div>
                <div className="box-text">
                  <div className="head-text-mobile">Trade Crypto</div>
                </div>
              </div>
              <div className="box-grey-mobile">
                <div className="box-img-mobile d-flex justify-content-end">
                  <img src={BoxAmazon}  alt="" />
                </div>
                <div className="box-text text-right">
                  <div className="head-text-mobile-right ">Trade Gift Cards</div>
                </div>
              </div>
            </div>
          </div>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar