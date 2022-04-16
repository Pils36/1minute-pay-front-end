import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import MenuOpen from '../assets/menu-open.svg';
import MenuClose from '../assets/menu-close.svg';
import Line from '../assets/line.svg';
import Andriod from '../assets/andriod.svg';
import Apple from '../assets/apple.svg';
import BoxEth from '../assets/ethereum-box.svg';
import BoxAmazon from '../assets/amazon-box.svg';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="logo" />
        </a>
        <button onClick={ () => {setIsOpen(prev => !prev)} } className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src={isOpen? MenuClose : MenuOpen} alt="" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active mx-lg-2" aria-current="page" href="/about">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active mx-lg-2" aria-current="page" href="/sign-in">SIGN-IN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active mx-lg-2" aria-current="page" href="/sign-up">SIGN-UP</a>
            </li>
          </ul>
          <div className='d-none d-sm-none d-md-block d-lg-block'>
            <div className="btn-download-purple d-flex justify-content-center align-items-center mx-2 ">
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
          </div>

          <div className='d-block d-sm-block d-md-none d-lg-none'>
            <div className="crypto-card">
              <div className="cryptobox d-flex justify-content-center">
                <div className="box-purple">
                  <div className="box-img d-flex justify-content-start mb-3">
                    <img src={BoxEth}  alt="" />
                  </div>
                  <div className="box-text">
                    <div className="head-text">Trade Crypto</div>
                  </div>
                </div>
                <div className="box-grey">
                  <div className="box-img d-flex justify-content-end mb-3">
                    <img src={BoxAmazon}  alt="" />
                  </div>
                  <div className="box-text">
                    <div className="head-text">Trade Gift Cards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav