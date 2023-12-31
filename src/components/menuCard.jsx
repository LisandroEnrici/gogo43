import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const DEFAULT_BACKGROUND = "/assets/food/aperitivo.jpg";

function MenuCard({ index, title, imgUrl, onClick, onPrevious, onNext }) {
  const backgroundImage = `radial-gradient( ellipse at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100% ),url("${
    imgUrl ? imgUrl : DEFAULT_BACKGROUND
  }")`;

  return (
    <div
      id={`grid-area-${index + 1}`}
      className="menu-card"
      style={{
        backgroundImage: backgroundImage,
      }}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick(index);
      }}
    >
      {onPrevious ? (
        <a className="icon-button" onClick={onPrevious}>
          <AiOutlineLeft />
        </a>
      ) : null}
      <h3 className="menu-card-title">{title}</h3>
      {onNext ? (
        <a className="icon-button" onClick={onNext}>
          <AiOutlineRight />
        </a>
      ) : null}
    </div>
  );
}

export default MenuCard;
