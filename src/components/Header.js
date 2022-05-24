import React, { useState } from "react";
import Arrow from "../assets/arrow-down.svg";
import BoxEth from "../assets/ethereum-box.svg";
import BoxAmazon from "../assets/amazon-box.svg";
import Line from "../assets/line.svg";
import Andriod from "../assets/andriod.svg";
import Apple from "../assets/apple.svg";
import Video from "../assets/bg-video.mp4";
import Poster from "../assets/loader.gif";
import Lottie from "react-lottie";
import lottieLoader from "../assets/lottie/loader.json";

function Header(props) {
  const [loading, setLoading] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="header">
      {props.children}
      {loading && (
        <div className="loader-wrapper">
          <Lottie options={defaultOptions} width={200} height={200} />
        </div>
      )}

      <video
        onLoadedData={() => setLoading(false)}
        preload="auto"
        muted
        autoPlay
        loop
        className="bg-header"
      >
        <source src={Video} type="video/mp4" />
      </video>
      <main className="container">
        <div className="main">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-10 col-lg-8 m-auto">
              <div className="container">
                <div className="main-header d-none d-md-block">
                  Making Money in the Digital <br /> Space doesn’t have to be{" "}
                  <br /> slow.
                </div>

                <div className="main-header d-block d-md-none">
                  Making Money <br /> in the Digital <br /> Space doesn’t
                  <br /> have to be slow.
                </div>

                <div className="main-text">
                  Get your transactions done and receive <br /> Payments in as
                  quick as One Minute.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="condition d-none d-md-block position-relative">
        <div className="custom-container">
          <div className="header-bottom d-flex justify-content-between align-items-center ">
            <div className="scroll">
              <div className="d-flex justify-content-center justify-content-md-start align-items-center">
                <div className="arrow d-flex justify-content-start align-items-center">
                  <img src={Arrow} alt="" />
                  <div className="scroll-text mx-3">Scroll to move along</div>
                </div>
              </div>
            </div>

            <div className="crypto-card">
              <div className="cryptobox d-flex justify-content-end">
                <div className="box-purple">
                  <div className="box-img d-flex justify-content-end">
                    <img src={BoxEth} alt="" />
                  </div>
                  <div className="box-text">
                    <div className="head-text">Trade Crypto</div>
                    <div className="body-text-purple">
                      Sell your coins for quick cash
                    </div>
                  </div>
                </div>
                <div className="box-grey">
                  <div className="box-img d-flex justify-content-end">
                    <img src={BoxAmazon} alt="" />
                  </div>
                  <div className="box-text">
                    <div className="head-text">Trade Gift Cards</div>
                    <div className="body-text-grey">
                      View our array of Options
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-bottom-mobile d-block d-md-none">
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="btn-download-purple d-flex justify-content-center align-items-center mx-2">
            <div className="d-flex justify-content-center align-items-center mx-2">
              <div className="ps-2">DOWNLOAD THE APP </div>
              <img src={Line} alt="" className="px-2" />
              <a href="/andriod">
                <img src={Andriod} alt="" className="mx-2" />
              </a>
              <a href="/apple">
                <img src={Apple} alt="" className="mx-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="arrow d-flex justify-content-start align-items-center">
            <img src={Arrow} alt="" />
            <div className="scroll-text mx-3">Scroll to move along</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
