"use client";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderCustom: function (swiper, current, total) {
      var names = [];
      $(".swiper-wrapper .swiper-slide").each(function (i) {
        names.push($(this).data("name"));
      });
      var text = "<ul>";
      for (let i = 1; i <= total; i++) {
        if (current == i) {
          text += `<li class="swiper-pagination-bullet active">${names[i]}</li>`;
        } else {
          text += `<li class="swiper-pagination-bullet">${names[i]}</li>`;
        }
      }
      text += "</ul>";
      return text;
    },
  },
});

export default function Slider() {
  useEffect(() => {});
  return (
    <swiper-container pagination="true">
      <swiper-slide>
        <img
          src="https://picsum.photos/1500/1000"
          alt=""
          className="h-screen w-screen"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://picsum.photos/1500/1000"
          alt=""
          className="h-screen w-screen"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          src="https://picsum.photos/1500/1000"
          alt=""
          className="h-screen w-screen"
        />
      </swiper-slide>
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
