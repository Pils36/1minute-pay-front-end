import React from "react";
import CoinCarousel from "./CoinCarousel";

function Coins() {
  return (
    <section className="coins">
      <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8 m-auto">
              <div className="container">
                <div className="coin-header">
                  Designed with ease of use and speed in mind.
                </div>
              </div>
            </div>
          </div>

          <CoinCarousel/>
      </div>
    </section>
  );
}

export default Coins;
