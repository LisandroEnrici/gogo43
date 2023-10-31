import React from "react";
import { images } from "./carousel-config";

function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {images.map((image) => {
          return (
            <img
              src={image.imgUrl}
              alt={image.title}
              style={{ width: "300px" }}
            />
          );
        })}
        {images.map((image) => {
          return (
            <img
              src={image.imgUrl}
              alt={image.title}
              style={{ width: "300px" }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
