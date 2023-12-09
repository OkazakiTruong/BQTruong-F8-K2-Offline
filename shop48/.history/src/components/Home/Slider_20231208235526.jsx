"use client";
import "swiper/css";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
export default function Slider() {
  const handleVideoEnded = (e) => {
    e.target.play();
  };
  return (
    <swiper-container pagination={true} loop="true" slides-per-view="1">
      <swiper-slide>
        <video
          autoPlay
          muted
          onEnded={handleVideoEnded}
          className="object-fill w-full"
        >
          <source
            src="https://code-fullstack-exercise49.vercel.app/videos/vid-1.mp4"
            type="video/mp4"
          />
        </video>
      </swiper-slide>
      <swiper-slide>
        <video
          autoPlay
          muted
          onEnded={handleVideoEnded}
          className="object-fill w-full"
        >
          <source
            src="https://code-fullstack-exercise49.vercel.app/videos/vid-2.mp4"
            type="video/mp4"
          />
        </video>
      </swiper-slide>
      <swiper-slide>
        <video
          autoPlay
          muted
          onEnded={handleVideoEnded}
          className="object-fill w-full"
        >
          <source
            src="https://code-fullstack-exercise49.vercel.app/videos/vid-3.mp4"
            type="video/mp4"
          />
        </video>
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
