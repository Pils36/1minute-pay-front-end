import React from 'react';
import Nav from './Nav';
import Arrow from '../assets/arrow-down.svg';
import BoxEth from '../assets/ethereum-box.svg';
import BoxAmazon from '../assets/amazon-box.svg';


function Header() {
  return (
    <div className="header">
      <Nav />
      <main className='container-fluid main'>
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
      </main>

        <div className="header-bottom">
          <div className="scroll">
            <div className='d-flex justify-content-start align-items-center'>
              <div className="arrow d-flex justify-content-start align-items-center">
                <img src={Arrow}  alt="" />
                <div className='scroll-text mx-3'>Scroll to move along</div>
              </div>
            </div>
          </div>

          <div className="crypto-card">
            <div className="cryptobox d-flex justify-content-end">
              <div className="box-purple">
                <div className="box-img d-flex justify-content-end">
                  <img src={BoxEth}  alt="" />
                </div>
                <div className="box-text">
                  <div className="head-text">Trade Crypto</div>
                  <div className="body-text-purple">Sell your coins for quick cash</div>
                </div>
              </div>
              <div className="box-grey">
                <div className="box-img d-flex justify-content-end">
                  <img src={BoxAmazon}  alt="" />
                </div>
                <div className="box-text">
                  <div className="head-text">Trade Gift Cards</div>
                  <div className="body-text-grey">View our array of Options</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header