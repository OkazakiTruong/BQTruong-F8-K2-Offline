"use client";

import { useEffect, useRef } from "react";
import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  const carouselRef = useRef();
  useEffect(() => {});
  return (
    <Carousel
      showThumbs={false}
      emulateTouch={true}
      infiniteLoop={true}
      ref={carouselRef}
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
