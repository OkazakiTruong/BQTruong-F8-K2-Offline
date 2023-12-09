"use client";

import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  return (
    <div className="max-h-screen">
      <Carousel
        style={{ height: "100px" }}
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
    </div>
  );
}
