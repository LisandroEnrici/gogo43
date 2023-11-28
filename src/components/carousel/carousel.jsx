import React from "react";
import { images } from "./carousel-config";

function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.map((image, index) => {
          return (
            <img
              src={image.imgUrl}
              alt={image.title}
              key={"A" + index}
            />
          );
        })}
        {images.map((image, index) => {
          return (
            <img
              src={image.imgUrl}
              alt={image.title}
              key={"B" + index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
