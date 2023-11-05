import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import MenuCard from "./menuCard";
import MenuDescription from "./menuDescription";

function MenuDialog({ menuSection, onClose }) {
  return (
    <div className="dialog-container">
      <div className="dialog-nav">
        <a className="icon-button" onClick={onClose}>
          <AiOutlineClose />
        </a>
      </div>
      <MenuCard title={menuSection.title} imgUrl={menuSection.imgUrl} />
      <div className="dialog-content">
        <MenuDescription menuSection={menuSection} />
      </div>
    </div>
  );
}

export default MenuDialog;
