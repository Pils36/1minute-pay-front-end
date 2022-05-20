import React from "react";
import Amazon from "../../assets/giftcard/amazon.png";
import Apple from "../../assets/giftcard/Apple.png";
import Bestbuy from "../../assets/giftcard/Bestbuy.png";
import Nike from "../../assets/giftcard/Nike.png";
import Playstore from "../../assets/giftcard/playstore.png";
import Target from "../../assets/giftcard/Target.png";
import Visa from "../../assets/giftcard/visa.png";
import Xbox from "../../assets/giftcard/xbox.png";

const Giftcard = () => {
  return (
    <div className="row">
      <div className="col-12 d-none d-sm-none d-md-block d-lg-block">
        <div className="d-flex justify-content-center align-items-center">
          <div className="mx-1">
            <img src={Xbox} className="img-small" alt="xbox" />
          </div>
          <div className="mx-1">
            <img src={Amazon} className="img-small" alt="amazon" />
          </div>
          <div className="mx-1">
            <img src={Apple} className="img-small" alt="apple" />
          </div>
          <div className="mx-1">
            <img src={Bestbuy} className="img-big" alt="bestbuy" />
          </div>
          <div className="mx-1">
            <img src={Nike} className="img-small" alt="nike" />
          </div>
          <div className="mx-1">
            <img src={Playstore} className="img-small" alt="playstore" />
          </div>
          <div className="mx-1">
            <img src={Target} className="img-small" alt="target" />
          </div>
          <div className="mx-1">
            <img src={Visa} className="img-small" alt="visa" />
          </div>
        </div>
      </div>

      <div className="col-12 d-block d-sm-block d-md-none d-lg-none">
        <div className="d-flex justify-content-center align-items-center">
          <div className="mx-1">
            <img src={Xbox} className="img-small-mobile" alt="xbox" />
          </div>
          <div className="mx-1">
            <img src={Amazon} className="img-small-mobile" alt="amazon" />
          </div>
          <div className="mx-1">
            <img src={Apple} className="img-small-mobile" alt="apple" />
          </div>
          <div className="mx-1">
            <img src={Bestbuy} className="img-big-mobile" alt="bestbuy" />
          </div>
          <div className="mx-1">
            <img src={Nike} className="img-small-mobile" alt="nike" />
          </div>
          <div className="mx-1">
            <img src={Playstore} className="img-small-mobile" alt="playstore" />
          </div>
          <div className="mx-1">
            <img src={Target} className="img-small-mobile" alt="target" />
          </div>
          <div className="mx-1">
            <img src={Visa} className="img-small-mobile" alt="visa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giftcard;
