"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      className="h-screen w-screen"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img
          src="https://picsum.photos/1500/1000"
          alt=""
          className="h-screen w-screen"
        />
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
