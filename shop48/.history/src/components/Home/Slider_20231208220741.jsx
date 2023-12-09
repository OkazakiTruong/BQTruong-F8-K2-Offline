"use client";

import { Swiper, SwiperSlide } from "swiper/react";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      effect="cube"
    >
      <SwiperSlide>
        <img
          src="https://picsum.photos/1500/1000"
          alt=""
          className="h-screen w-screen"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/1500/1000"
          className="h-screen w-screen"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://picsum.photos/1500/1000"
          className="h-screen w-screen"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}
