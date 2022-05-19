import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper";
import Binance from "../assets/binance.svg";
import Tether from "../assets/tether.svg";
import Tron from "../assets/tron.svg";
import Bitcoin from "../assets/bitcoin.svg";
import Ethereum from "../assets/ethereum.svg";
import Polygon from "../assets/polygon.svg";
import Litecoin from "../assets/lite-coin.svg";
import Infinite from "../assets/infinity.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Inview from "./Inview";

function CoinCarousel() {
  const myRef = useRef();
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const card4Ref = useRef();

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (position > 1100 && position < 1850) {
      myRef.current.style.position = "fixed";
      myRef.current.style.top = "50%";

      position > 1250 && position < 1550
        ? card2Ref.current.classList.add("scroll-active")
        : card2Ref.current.classList.remove("scroll-active");

      position > 1550 && position < 1820
        ? card3Ref.current.classList.add("scroll-active")
        : card3Ref.current.classList.remove("scroll-active");

      position > 1820
        ? card4Ref.current.classList.add("scroll-active")
        : card4Ref.current.classList.remove("scroll-active");
    } else if (position > 1850) {
      myRef.current.style.position = "absolute";
      myRef.current.style.top = "75%";
    } else {
      myRef.current.style.position = "absolute";
      myRef.current.style.top = 0;
    }
  };
  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollPosition]);

  return (
    <section className="coin-carousel">
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

      <div className="row ">
        <div className="container">
          <div className="col-12 col-sm-12 col-md-10 col-lg-8 m-auto">
            <div className="container">
              <div className="d-flex align-items-center my-3">
                <div className="crypto">Crypto</div>
                <div className="giftcards">Gift-Cards</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container">
          <div className="col-12 col-md-10 col-lg-8 m-auto">
            <div className="container">
              <div className="company">THIS IS WHY WE EXIST AS A COMPANY</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-block d-sm-block d-md-none d-lg-none">
        <div className="slider mobile">
          <Swiper
            scrollbar={{
              hide: false,
            }}
            modules={[Scrollbar]}
            //
            className="swiper mySwiper"
          >
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <div className="swiper-header">
                  Crypto Buy <br /> and Sale
                </div>
                <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto
                  currencies such as Bitcoin, Ethereum and many others.
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <div className="swiper-header">
                  We buy gift <br /> cards at amazing value
                </div>
                <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto
                  currencies such as Bitcoin, Ethereum and many others.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <div className="swiper-header">
                  Bill payments <br /> simplified
                </div>
                <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto
                  currencies such as Bitcoin, Ethereum and many others.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="swiper-content">
                <div className="swiper-header">
                  Transaction tracking <br /> at it’s best
                </div>
                <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto
                  currencies such as Bitcoin, Ethereum and many others.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="row d-none d-sm-none d-md-block d-md-block desktop-timeline">
        <div className="container">
          <div className="col-12 col-sm-12 col-md-10 col-lg-8 m-auto">
            <div className="container">
              <div className="timeline-wrapper">
                <div className="timeline">
                  <div ref={myRef} className="scroll-bar"></div>
                </div>

                <div className="slider desktop">
                  <div
                    ref={card1Ref}
                    data-aos="fade-in"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    className="scroll-box scroll-active"
                  >
                    <div className="scroll-header">
                      Crypto Buy <br /> and Sale
                    </div>
                    <div className="scroll-lead">
                      We provide a well constructed and safe platform
                      <br /> for crypto currencies such as Bitcoin, Ethereum{" "}
                      <br /> and many others.
                    </div>
                  </div>

                  <div
                    ref={card2Ref}
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    data-aos="fade-in"
                    className="scroll-box "
                  >
                    <div className="scroll-header ">
                      We buy gift cards <br /> at amazing value
                    </div>
                    <div className="scroll-lead ">
                      We provide a well constructed and safe platform
                      <br /> for crypto currencies such as Bitcoin, Ethereum{" "}
                      <br /> and many others.
                    </div>
                  </div>

                  <div
                    ref={card3Ref}
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    data-aos="fade-in"
                    className="scroll-box "
                  >
                    <div className="scroll-header">
                      Bill payments <br /> simplified
                    </div>
                    <div className="scroll-lead ">
                      We provide a well constructed and safe platform
                      <br /> for crypto currencies such as Bitcoin, Ethereum{" "}
                      <br /> and many others.
                    </div>
                  </div>

                  <div
                    ref={card4Ref}
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    data-aos="fade-in"
                    className="scroll-box "
                  >
                    <div className="scroll-header ">
                      Transaction <br /> tracking at it’s best
                    </div>
                    <div className="scroll-lead ">
                      We provide a well constructed and safe platform
                      <br /> for crypto currencies such as Bitcoin, Ethereum{" "}
                      <br /> and many others.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoinCarousel;
