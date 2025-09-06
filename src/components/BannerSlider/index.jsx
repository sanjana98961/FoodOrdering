"use client"
import React, {useRef} from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from 'swiper/modules';

export const BannerSlider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="banner-slider w-[100%]">
        <SwiperSlide>
            <div className="item w-[100%] relative flex items-center pl-[100px]" style={{backgroundImage: `url("/images/slide-1.jpg")` }}>
            <div className="info w-[50%] d-flex flex-col gap-4 mr-right">
                <h2 className="text-white pb-4">CRISPY CHICKEN</h2>
                <h3><span className="text-white">Open Daily:</span> <span style={{color:"#f59e0b"}}>11:00AM - 8:30PM </span></h3>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item w-[100%] relative flex items-center pl-[100px]" style={{backgroundImage: `url("/images/slide-2.jpg")` }}>
            <div className="info w-[50%] d-flex flex-col gap-4 ml-auto">
                <h2 className="text-white pb-4">CRISPY CHICKEN</h2>
                <h3><span className="text-white">Enjoy the food you love</span> <span style={{color:"#f59e0b"}}> FROM $94.4</span></h3>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="item w-[100%] relative flex items-center pl-[100px]" style={{backgroundImage: `url("/images/slide-3.jpg")` }}>
            <div className="info w-[50%] d-flex flex-col gap-4 mr-right">
                <h2 className="text-white pb-4">DOUBLE BURGER</h2>
                <h3><span className="text-white">Order Now: </span> <span style={{color:"#f59e0b"}}> 9292029238</span></h3>
            </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};
