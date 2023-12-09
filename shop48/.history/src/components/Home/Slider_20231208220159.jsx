"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <swiper-container slides-per-view="3" navigation="true" pagination="true">
      <swiper-slide>
        <img src="https://picsum.photos/1500/1000" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/1500/1000" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="https://picsum.photos/1500/1000" alt="" />
      </swiper-slide>
      ...
    </swiper-container>
  );
}
