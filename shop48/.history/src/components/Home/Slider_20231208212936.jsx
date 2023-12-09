"use client";

import { useEffect, useRef } from "react";
import Swiper from "swiper";

export default function Slider() {
  return (
    <Carousel
      showThumbs={false}
      emulateTouch={true}
      infiniteLoop={true}
      height="100vh"
    >
      <div>
        <img src="https://picsum.photos/1500/1200" />
      </div>
      <div>
        <img src="https://picsum.photos/1500/1200" />
      </div>
      <div>
        <img src="https://picsum.photos/1500/1200" />
      </div>
    </Carousel>
  );
}
