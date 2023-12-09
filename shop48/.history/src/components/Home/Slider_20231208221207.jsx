"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
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
