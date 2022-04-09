import React from 'react';
import FooterLogo from '../assets/footer-logo.svg';

function Footer() {
  return (
    <section className="footer">
      <div className="countdown">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div className="countdown-heading">
              Let the Numbers speak for Us.
              </div>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="countdown-number">
                97,084
                </div>
                <div className="countdown-text">
                Happy Clients
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="countdown-number">
                1,632,394
                </div>
                <div className="countdown-text">
                Successful Transactions
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2 d-flex justify-content-center">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="countdown-number">
                4
                </div>
                <div className="countdown-text">
                Years of Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="community">
        <div className="container">
          <div className="row mx-auto d-flex justify-content-between">
            <div className="col-12 col-md-6">
              <div className="community-head">
              Join Our Community
              </div>

              <div className="community-text">
              Learn more about 1MinutePay, chat with the team, others in the community, and have your say in shaping the future of the Digital transactional space.
              </div>

              <div className="table">
                <div className="d-flex justify-content-between align-items-center footer-border">
                  <div className="email">Email</div>
                  <div className="email-text">Hello@1minutepay.com</div>
                </div>

                <div className="d-flex justify-content-between align-items-center footer-border">
                  <div className="email">Twitter</div>
                  <div className="email-text">@1minutepay</div>
                </div>

                <div className="d-flex justify-content-between align-items-center footer-border">
                  <div className="email">Medium</div>
                  <div className="email-text">@1minutepay</div>
                </div>

                <div className="d-flex justify-content-between align-items-center footer-border">
                  <div className="email">Whatsapp</div>
                  <div className="email-text">@1minutepay</div>
                </div>

                <div className="d-flex justify-content-between align-items-center footer-border">
                  <div className="email">Facebook</div>
                  <div className="email-text">@1minutepay</div>
                </div>

                
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="footer-logo d-flex justify-content-end">
                <img src={FooterLogo} alt="" />
              </div>

              <div className="address">
              23, Afolabi Close,<br/> Opebi Road, Ikeja, Lagos <br/> © 1MinutePay - 2022
              </div>

              <div className="d-flex justify-content-between align-items-center footer-border faq-border">
                <div className="email-text">FAQs</div>
              </div>

                <div className="d-flex justify-content-between align-items-center footer-border">
                  <div className="email-text">Terms and Conditions</div>
                </div>

                <div className="copyright">
                © Copyright 1MinutePay ltd. <br/>
                Authorised by CAC Nigeria - RC947663
                </div>

                <div className="signature">
                Made by O2-Digital
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer