import React from 'react';
import Nav from './Nav';
import Arrow from '../assets/arrow-down.svg';

function Header() {
  return (
    <div className="header">
      <Nav />
      <main className='container main'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-10 col-lg-9 m-auto">
            <div className="main-header">
              Making Money in the Digital <br/> Space doesn’t have to be <br/> slow.
            </div>
            <div className="main-text">
              Get your transactions done and receive <br/> Payments in as quick as One Minute.
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 mt-5">
            <div className='d-flex justify-content-start align-items-center'>
              <img src={Arrow} alt="" />
              <div className='scroll-text mx-3'>Scroll to move along</div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6"></div>
        </div>
      </main>
    </div>
  )
}

export default Header