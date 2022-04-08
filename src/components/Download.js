import React from 'react';
import webView from '../assets/webview.svg';
import mobileApp from '../assets/mobileapp.svg';
import robot from '../assets/robot.svg';
import Line from '../assets/download-line.svg';

function Download() {
  return (
    <section className="download">
      <div className="container">
        <div className="web">
          <div className="row">
            <div className="col-12 col-md-6 web-box">
              <div className="download-icon">
                <img src={webView} alt="" />
              </div>
              <div className="download-header">
                Web View Trading
              </div>
              <div className="download-text">
              We have made our beautiful services available via our web-app for those who want to use the platform via browser.
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="welcome-header">
              Welcome to next Generation Transactions.
              </div>
            </div>
          </div>
        </div>

        <img src={Line} alt="" className='line' />

        <div className="mobile">
          <div className="row">
            <div className="col-12 col-md-6 mobile-box">
              <div className="download-icon">
                <img src={mobileApp} alt="" />
              </div>
              <div className="download-header">
              Mobile App Trading
              </div>
              <div className="download-text">
              Ofcourse we also created an amazing mobile application for you to use on the go, we mean it, the same speed anytime, anywhere.
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="robot">
                <img src={robot} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download