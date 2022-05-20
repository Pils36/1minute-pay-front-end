import React from "react";
import Binance from "../../assets/coin/binance.png";
import Tether from "../../assets/coin/TETHER.png";
import Tron from "../../assets/coin/TRON.png";
import Bitcoin from "../../assets/coin/bitcoin.png";
import Ethereum from "../../assets/coin/ethereun.png";
import Polygon from "../../assets/coin/polygon.png";
import Litecoin from "../../assets/coin/lite-coin.png";
import Infinite from "../../assets/coin/infinite.png";

const Coins = () => {
  return (
    <div className="row">
      <div className="col-12 d-none d-sm-none d-md-block d-lg-block">
        <div className="d-flex justify-content-center align-items-center">
          <div className="mx-1">
            <img src={Binance} className="img-small" alt="binance" />
          </div>
          <div className="mx-1">
            <img src={Tether} className="img-small" alt="tether" />
          </div>
          <div className="mx-1">
            <img src={Tron} className="img-small" alt="tron" />
          </div>
          <div className="mx-1">
            <img src={Bitcoin} className="img-big" alt="bitcoin" />
          </div>
          <div className="mx-1">
            <img src={Ethereum} className="img-small" alt="ethereum" />
          </div>
          <div className="mx-1">
            <img src={Polygon} className="img-small" alt="polygon" />
          </div>
          <div className="mx-1">
            <img src={Litecoin} className="img-small" alt="litecoin" />
          </div>
          <div className="mx-1">
            <img src={Infinite} className="img-small" alt="infinity" />
          </div>
        </div>
      </div>

      <div className="col-12 d-block d-sm-block d-md-none d-lg-none">
        <div className="d-flex justify-content-center align-items-center">
          <div className="mx-1">
            <img src={Binance} className="img-small-mobile" alt="binance" />
          </div>
          <div className="mx-1">
            <img src={Tether} className="img-small-mobile" alt="tether" />
          </div>
          <div className="mx-1">
            <img src={Tron} className="img-small-mobile" alt="tron" />
          </div>
          <div className="mx-1">
            <img src={Bitcoin} className="img-big-mobile" alt="bitcoin" />
          </div>
          <div className="mx-1">
            <img src={Ethereum} className="img-small-mobile" alt="ethereum" />
          </div>
          <div className="mx-1">
            <img src={Polygon} className="img-small-mobile" alt="polygon" />
          </div>
          <div className="mx-1">
            <img src={Litecoin} className="img-small-mobile" alt="litecoin" />
          </div>
          <div className="mx-1">
            <img src={Infinite} className="img-small-mobile" alt="infinity" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coins;
