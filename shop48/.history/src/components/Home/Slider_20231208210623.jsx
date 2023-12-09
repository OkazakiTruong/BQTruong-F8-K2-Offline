"use client";

import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  return (
    <Carousel
      style={{ height: "100px" }}
      showThumbs={false}
      dynamicHeight={false}
      emulateTouch={true}
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
