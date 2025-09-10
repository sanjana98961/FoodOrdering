"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export const BannerSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="banner-slider w-[100%]"
      >
        <SwiperSlide>
          <div
            className="item w-[100%] relative flex items-center pl-[100px]"
            style={{ backgroundImage: `url("/images/slide-1.jpg")` }}
          >
            <div className="container">
              <div className="info w-[50%] d-flex flex-col gap-4 mr-auto duration-1000">
                <h2 className="text-white pb-4">CRISPY CHICKEN</h2>
                <h3>
                  <span className="text-white">Open Daily:</span>{" "}
                  <span style={{ color: "#f59e0b" }}>11:00AM - 8:30PM </span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="item w-[100%] relative flex items-center pl-[100px]"
            style={{ backgroundImage: `url("/images/slide-2.jpg")` }}
          >
            <div className="container">
              <div className="info w-[50%] d-flex flex-col gap-4 ml-auto duration-1000">
                <h2 className="text-white pb-4">CHICKEN FINGERS</h2>
                <h3>
                  <span className="text-white">Enjoy the food you love</span>{" "}
                  <span style={{ color: "#f59e0b" }}> FROM $94.4</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="item w-[100%] relative flex items-center pl-[100px]"
            style={{ backgroundImage: `url("/images/slide-3.jpg")` }}
          >
            <div className="container">
              <div className="info w-[50%] d-flex flex-col gap-4 mr-auto duration-1000">
                <h2 className="text-white pb-4">DOUBLE BURGER</h2>
                <h3>
                  <span className="text-white">Order Now:</span>{" "}
                  <span style={{ color: "#f59e0b" }}> 789-654-3210</span>
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
