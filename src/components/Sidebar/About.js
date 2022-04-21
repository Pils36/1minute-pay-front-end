import React, {useState} from 'react';
import AboutClose from '../../assets/about-close.svg'

function About({showModal}) {

  return (
    <div className='about'>
      <div className="overlay">
        <div className="about-box">
          <div className="d-flex justify-content-end">
            <img src={AboutClose} onClick={showModal} alt="close" />
          </div>  
          <div className="about-text">
            <div className="about-head">About Us</div>
            <div className="about-body">
              <div className="lead">
                1minutepay.com is a cash exchange platform for bitcoin and gift cards.
              </div>
              <div className="lead">
                We buy gift cards and bitcoins and in return we pay you the Naira Value in just one minute.
              </div>
              <div className="lead">
                Our reliable instant cash remittance has earned us repeated transactions from customers across the world.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About