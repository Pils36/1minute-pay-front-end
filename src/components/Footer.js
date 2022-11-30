import React from "react";
import FooterLogo from "../assets/footer-logo.svg";

function Footer() {
  return (
    <section className="footer">
      <div className="countdown">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 d-flex justify-content-center count-box">
              <div className="countdown-heading">Let the Numbers speak for Us.</div>
            </div>
            <div className="col-12 col-lg-3 d-flex justify-content-center count-box">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="countdown-number">97,084</div>
                <div className="countdown-text">Happy Clients</div>
              </div>
            </div>
            <div className="col-12 col-lg-4 d-flex justify-content-center count-box">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="countdown-number">1,632,394</div>
                <div className="countdown-text">Successful Transactions</div>
              </div>
            </div>
            <div className="col-12 col-lg-2 d-flex justify-content-center count-box">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="countdown-number">4</div>
                <div className="countdown-text">Years of Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="community">
        <div className="container">
          <div className="row mx-auto d-flex justify-content-between">
            <div className="col-12 col-md-6">
              <div className="community-head">Join Our Community</div>

              <div className="community-text">
                Learn more about 1MinutePay, chat with the team, others in the community, and have your say in shaping the future of the Digital
                transactional space.
              </div>

              <div className="table">
                <div className="d-flex justify-content-between align-items-center footer-border">
                  <div className="email">
                    <a href="mailto:support@1minutepay.com" style={{ color: 'white', textDecoration: 'none' }}>Email</a>
                  </div>
                  <div className="email-text d-none d-xs-none d-sm-none d-md-block d-lg-block">
                    <a href="mailto:support@1minutepay.com" style={{ color: 'white', textDecoration: 'none' }}>
                      support@1minutepay.com
                    </a>
                  
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center footer-border">
                  <div className="email"><a target="_blank" rel="noreferrer" href="https://twitter.com/1minutepay" style={{ color: 'white', textDecoration: 'none' }}>Twitter</a></div>
                  <div className="email-text d-none d-xs-none d-sm-none d-md-block d-lg-block">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/1minutepay" style={{ color: 'white', textDecoration: 'none' }}>
                      https://twitter.com/1minutepay
                    </a>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center footer-border">
                  <div className="email"><a target="_blank" rel="noreferrer" href="https://instagram.com/1minutepay_app" style={{ color: 'white', textDecoration: 'none' }}>Instagram</a></div>
                  <div className="email-text d-none d-xs-none d-sm-none d-md-block d-lg-block">
                    <a target="_blank" rel="noreferrer" href="https://instagram.com/1minutepay_app" style={{ color: 'white', textDecoration: 'none' }}>
                      https://instagram.com/1minutepay_app
                    </a>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center footer-border">
                  <div className="email"><a target="_blank" rel="noreferrer" href="https://m.facebook.com/1minutepay" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a></div>
                  <div className="email-text d-none d-xs-none d-sm-none d-md-block d-lg-block">
                    <a target="_blank" rel="noreferrer" href="https://m.facebook.com/1minutepay" style={{ color: 'white', textDecoration: 'none' }}>
                      https://m.facebook.com/1minutepay
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="footer-logo d-flex justify-content-end d-none d-sm-none d-md-block d-lg-block">
                <img src={FooterLogo} alt="" />
              </div>

              <div className="address">
                Lagos, Nigeria <br /> © 1MinutePay - 2022
              </div>
              {/* <div className="address">
                20 Adisa Akintoye Street,
                <br /> Ketu, Lagos <br /> © 1MinutePay - 2022
              </div> */}

              <div className="d-flex justify-content-between align-items-center footer-border faq-border">
                <div className="email-text">FAQs</div>
              </div>

              <div className="d-flex justify-content-between align-items-center footer-border">
                <div className="email-text">
                  <a target="_blank" rel="noreferrer" href="https://app.termly.io/document/terms-of-use-for-online-marketplace/bf97b7c8-28d3-4143-a4d4-ea3be3d63942" style={{ color: 'white', textDecoration: 'none' }}>
                    Terms and Conditions
                    </a>
                </div>
              </div>

              <div className="copyright">
                © Copyright 1MinutePay ltd. <br />
                Authorised by CAC Nigeria - RC1616401
              </div>

              <div className="signature">Made by O2-Digital</div>

              <div className="footer-logo d-flex justify-content-end d-block d-sm-block d-md-none d-lg-none">
                <img src={FooterLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
