import React from 'react';
import Logo from '../assets/logo.svg';
import MenuOpen from '../assets/menu-open.svg';
import MenuClose from '../assets/menu-close.svg';
import Line from '../assets/line.svg';
import Andriod from '../assets/andriod.svg';
import Apple from '../assets/apple.svg';

function nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          {/* <span className="navbar-toggler-icon"></span> */}
          <img src={MenuOpen} alt="" />
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
        </div>
      </div>
    </nav>
  )
}

export default nav