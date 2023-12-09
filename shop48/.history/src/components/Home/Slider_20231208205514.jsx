"use client";

import { Carousel } from "react-responsive-carousel";

export default function Slider() {
  return (
    <Carousel>
      <div>
        <img src="https://picsum.photos/1500/1200" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://picsum.photos/1500/1200" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://picsum.photos/1500/1200" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
}
