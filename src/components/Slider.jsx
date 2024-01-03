import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import image2 from "../assets/SliderImages/slider-1.svg";
import image1 from "../assets/SliderImages/slider-2.svg";
import image3 from "../assets/SliderImages/slider-3.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import '../style.css';

// import required modules

const Slider = () => {
 
  return (
    <>
      <Swiper
           spaceBetween={20}
          //  centeredSlides={true}
           autoplay={{
             delay: 5000,
             disableOnInteraction: false,
           }}
           pagination={{
             clickable: true,
           }}
          //  navigation={true}
           modules={[Autoplay, Pagination]}

        className="mySwiper"
      >
        <SwiperSlide className="px-2">
          <img src={image1} className="max-sm:h-full sm:h-[80vh]" alt="back" />
        </SwiperSlide>
        <SwiperSlide className="px-2">
          <img src={image2} className="max-sm:h-full sm:h-[80vh]" alt="back" />
        </SwiperSlide>
        <SwiperSlide className="px-2">
          <img src={image3} className="max-sm:h-full sm:h-[80vh]" alt="back" />
        </SwiperSlide>
      
      </Swiper>
    </>
  );
};
export default Slider;
