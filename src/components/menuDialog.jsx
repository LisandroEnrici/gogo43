import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import MenuCard from "./menuCard";

function MenuDialog({ menuSection, onClose }) {
  return (
    <div className="dialog-container">
      <div className="dialog-nav">
        <a className="icon-button" onClick={onClose}>
          <AiOutlineClose />
        </a>
      </div>
      <MenuCard title={menuSection.title} imgUrl={menuSection.imgUrl} />
    </div>
  );
}

export default MenuDialog;
