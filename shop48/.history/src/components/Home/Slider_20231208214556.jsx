"use client";

import { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  return (
    <div className="swiper">
      {/* Additional required wrapper */}
      <div className="swiper-wrapper">
        {/* Slides */}
        <div className="swiper-slide">
          <img src="https://picsum.photos/1500/1000" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="https://picsum.photos/1500/1000" alt="" />
        </div>
        <div className="swiper-slide">
          <img src="https://picsum.photos/1500/1000" alt="" />
        </div>
      </div>
      {/* If we need pagination */}
      <div className="swiper-pagination" />
      {/* If we need navigation buttons */}
      <div className="swiper-button-prev" />
      <div className="swiper-button-next" />
      {/* If we need scrollbar */}
      <div className="swiper-scrollbar" />
    </div>
  );
}
