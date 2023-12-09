"use client";

import { useRef } from "react";
import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  const carouselRef = useRef();
  return (
    <Carousel
      style={{ height: "100vh" }}
      showThumbs={false}
      dynamicHeight={false}
      emulateTouch={true}
      infiniteLoop={true}
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
