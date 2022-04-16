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
          <div className="col-12">
            <img src={Binance} alt="binance" />
            <img src={Tether} alt="tether" />
            <img src={Tron} alt="tron" />
            <img src={Bitcoin} alt="bitcoin" />
            <img src={Ethereum} alt="ethereum" />
            <img src={Polygon} alt="polygon" />
            <img src={Litecoin} alt="litecoin" />
            <img src={Infinite} alt="infinity" />

          </div>
        </div>
      </div>
    </section>
  )
}

export default CoinCarousel