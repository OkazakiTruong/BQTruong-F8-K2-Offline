"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        className="h-screen w-screen"
        <img src="https://picsum.photos/1500/1000" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1500/1000" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1500/1000" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/1500/1000" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
