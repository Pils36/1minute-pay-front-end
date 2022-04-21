import React from 'react';
import 'swiper/css';
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
// import required modules
import { Scrollbar } from "swiper";
import Binance from '../assets/binance.svg';
import Tether from '../assets/tether.svg';
import Tron from '../assets/tron.svg';
import Bitcoin from '../assets/bitcoin.svg';
import Ethereum from '../assets/ethereum.svg';
import Polygon from '../assets/polygon.svg';
import Litecoin from '../assets/lite-coin.svg';
import Infinite from '../assets/infinity.svg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";



function CoinCarousel() {
  return (
    <section className="coin-carousel">
      <div className="container">
        <div className="row">
          <div className="col-12 d-none d-sm-none d-md-block d-lg-block">
            <div className='d-flex justify-content-center align-items-center'>
              <div className='mx-1'>
              <img src={Binance} className="img-small" alt="binance" />
              </div>
              <div className='mx-1'>
                <img src={Tether} className="img-small" alt="tether" />
              </div>
              <div className='mx-1'>
                <img src={Tron} className="img-small" alt="tron" />
              </div>
              <div className='mx-1'>
                <img src={Bitcoin} className="img-big" alt="bitcoin" />
              </div>
              <div className='mx-1'>
                <img src={Ethereum} className="img-small" alt="ethereum" />
              </div>
              <div className='mx-1'>
                <img src={Polygon} className="img-small" alt="polygon" />
              </div>
              <div className='mx-1'>
                <img src={Litecoin} className="img-small" alt="litecoin" />
              </div>
              <div className='mx-1'>
                <img src={Infinite} className="img-small" alt="infinity" />
              </div>
            </div>
          </div>

          <div className="col-12 d-block d-sm-block d-md-none d-lg-none">
            <div className='d-flex justify-content-center align-items-center'>
              <div className='mx-1'>
              <img src={Binance} className="img-small-mobile" alt="binance" />
              </div>
              <div className='mx-1'>
                <img src={Tether} className="img-small-mobile" alt="tether" />
              </div>
              <div className='mx-1'>
                <img src={Tron} className="img-small-mobile" alt="tron" />
              </div>
              <div className='mx-1'>
                <img src={Bitcoin} className="img-big-mobile" alt="bitcoin" />
              </div>
              <div className='mx-1'>
                <img src={Ethereum} className="img-small-mobile" alt="ethereum" />
              </div>
              <div className='mx-1'>
                <img src={Polygon} className="img-small-mobile" alt="polygon" />
              </div>
              <div className='mx-1'>
                <img src={Litecoin} className="img-small-mobile" alt="litecoin" />
              </div>
              <div className='mx-1'>
                <img src={Infinite} className="img-small-mobile" alt="infinity" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="container">
            <div className="col-12 col-sm-12 col-md-10 col-lg-9 m-auto">
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
            <div className="col-12 col-sm-12 col-md-10 col-lg-9 m-auto">
              <div className="container">
                <div className="company">
                  THIS IS WHY WE EXIST AS A COMPANY
                </div>
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
              <SwiperSlide className='swiper-slide'>
                <div className="swiper-content">
                  <div className="swiper-header">
                    Crypto Buy <br/> and Sale
                  </div>
                  <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto currencies such as Bitcoin, Ethereum and many others.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className="swiper-content">
                    <div className="swiper-header">
                    We buy gift <br/> cards at amazing value
                    </div>
                    <div className="swiper-text">
                    We provide a well constructed and safe platform for crypto currencies such as Bitcoin, Ethereum and many others.
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className="swiper-content">
                  <div className="swiper-header">
                  Bill payments <br/> simplified
                  </div>
                  <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto currencies such as Bitcoin, Ethereum and many others.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className="swiper-content">
                  <div className="swiper-header">
                  Transaction tracking <br/> at it’s best
                  </div>
                  <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto currencies such as Bitcoin, Ethereum and many others.
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="row d-none d-sm-none d-md-block d-md-block">
          <div className="slider mobile">
          <Swiper 
            slidesPerView={1}
            loop={true}
            scrollbar={{
            hide: false,
            }}
            modules={[Scrollbar]}
            //
            className="swiper mySwiper"
            >
              <SwiperSlide className='swiper-slide'>
                <div className="swiper-content">
                  <div className="swiper-header">
                    Crypto Buy <br/> and Sale
                  </div>
                  <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto currencies such as Bitcoin, Ethereum and many others.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className="swiper-content">
                    <div className="swiper-header">
                    We buy gift <br/> cards at amazing value
                    </div>
                    <div className="swiper-text">
                    We provide a well constructed and safe platform for crypto currencies such as Bitcoin, Ethereum and many others.
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className="swiper-content">
                  <div className="swiper-header">
                  Bill payments <br/> simplified
                  </div>
                  <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto currencies such as Bitcoin, Ethereum and many others.
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className="swiper-content">
                  <div className="swiper-header">
                  Transaction tracking <br/> at it’s best
                  </div>
                  <div className="swiper-text">
                  We provide a well constructed and safe platform for crypto currencies such as Bitcoin, Ethereum and many others.
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoinCarousel