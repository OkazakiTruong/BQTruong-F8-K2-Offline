"use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
export default function Slider() {
  return (
    <swiper-container>
      <swiper-slide>
        <img
          src="https://picsum.photos/1500/1000"
          alt=""
          className="h-screen w-screen"
        />
      </swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
    </swiper-container>
  );
}

{
  /* <Swiper
style={{
  "--swiper-pagination-color": "#FFBA08",
  "--swiper-pagination-bullet-inactive-color": "#999999",
  "--swiper-pagination-bullet-inactive-opacity": "1",
  "--swiper-pagination-bullet-size": "16px",
  "--swiper-pagination-bullet-horizontal-gap": "6px",
}}
modules={[Navigation, Pagination, Scrollbar, A11y]}
spaceBetween={0}
slidesPerView={1}
pagination={{ clickable: true }}
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
</Swiper> */
}
