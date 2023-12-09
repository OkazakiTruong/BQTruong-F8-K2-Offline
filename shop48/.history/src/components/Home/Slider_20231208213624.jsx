"use client";

import { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  });
  return (
    <div className="swiper">
      {/* Additional required wrapper */}
      <div className="swiper-wrapper">
        {/* Slides */}
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        ...
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
