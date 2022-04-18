import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Binance from '../assets/binance.svg';
import Tether from '../assets/tether.svg';
import Tron from '../assets/tron.svg';
import Bitcoin from '../assets/bitcoin.svg';
import Ethereum from '../assets/ethereum.svg';
import Polygon from '../assets/polygon.svg';
import Litecoin from '../assets/lite-coin.svg';
import Infinite from '../assets/infinity.svg';


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
      </div>
    </section>
  )
}

export default CoinCarousel