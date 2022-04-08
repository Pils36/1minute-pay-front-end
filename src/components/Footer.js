import React from 'react'

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
                97,084
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
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="community-head">
              Join Our Community
              </div>

              <div className="community-text">
              Learn more about 1MinutePay, chat with the team, others in the community, and have your say in shaping the future of the Digital transactional space.
              </div>
            </div>
            <div className="col-12 col-md-6"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer