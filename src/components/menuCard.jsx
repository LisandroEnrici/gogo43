import React from "react";

const DEFAULT_BACKGROUND = "src/assets/food/default.jpg";

function MenuCard({ title, imgUrl }) {
  const backgroundImage = `radial-gradient( ellipse at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100% ),url("${
    imgUrl ? imgUrl : DEFAULT_BACKGROUND
  }")`;

  return (
    <div
      className="menu-card"
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      <h3>{title}</h3>
    </div>
  );
}

export default MenuCard;
