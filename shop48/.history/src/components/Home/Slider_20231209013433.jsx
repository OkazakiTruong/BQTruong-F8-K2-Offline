"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();
export default function Slider() {
  const handleVideoEnded = (e) => {
    e.target.play();
  };
  return (
    <div className="relative select-none">
      <div className="absolute z-[4] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white flex flex-col items-center">
        <h1 className="text-2xl mb-[20px] font-bold text-center md:text-4xl">
          Mọi chuyến đi đều đáng giá
        </h1>
        <p className="text-center text-base mb-[20px] md:text-2xl">
          Khám phá các vùng đát mới cùng chúng tôi <br />
          Những chuyến đi đang chờ đợi bạn
        </p>
        <button className="p-3 pl-6 pr-6 bg-orange-500 hover:bg-orange-400">
          Khám phá ngay
        </button>
      </div>
      <swiper-container
        loop="true"
        slides-per-view="1"
        pagination="true"
        pagination-clickable="true"
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "white",
          "--swiper-pagination-bullet-inactive-opacity": "0.8",
          "--swiper-pagination-bullet-size": "18px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bottom": "20%",
        }}
      >
        <swiper-slide>
          <video
            autoPlay
            muted
            onEnded={handleVideoEnded}
            className="object-fill w-full h-screen"
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
    </div>
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
