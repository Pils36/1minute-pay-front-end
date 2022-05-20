import React, { useState } from "react";
import Coins from "./Coins";
import Giftcard from "./Giftcard";

const GiftAndCoinTab = () => {
  const [active, setActive] = useState(true);
  return (
    <div>
      <div className={!active && 'd-none'}>
        <Coins />
      </div>
      <div className={active && 'd-none'}>
        <Giftcard />
      </div>

      <div className="row e-tab-header">
        <div className="container">
          <div className="col-12 col-sm-12 col-md-10 col-lg-8 m-auto">
            <div className="container">
              <div className="d-flex gap-3 justify-content-center justify-content-md-start align-items-center my-3">
                <div
                  onClick={() => setActive(true)}
                  className={`gc-tab-menu ${active && "active"}`}
                >
                  Crypto
                </div>
                <div
                  onClick={() => setActive(false)}
                  className={`gc-tab-menu ${!active && "active"}`}
                >
                  Gift-Cards
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftAndCoinTab;
