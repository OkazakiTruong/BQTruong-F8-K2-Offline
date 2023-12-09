"use client";

import { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  return (
    <Carousel
      showThumbs={false}
      emulateTouch={true}
      infiniteLoop={true}
      width={100}
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
