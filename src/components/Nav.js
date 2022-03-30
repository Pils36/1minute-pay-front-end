import React from 'react';
import Logo from '../assets/logo.svg';

function nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="logo" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">ABOUT US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">SIGN-IN</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">SIGN-UP</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default nav