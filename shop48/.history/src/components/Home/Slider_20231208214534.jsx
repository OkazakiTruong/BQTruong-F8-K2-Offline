"use client";

import { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
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
