import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import MenuCard from "./menuCard";

function MenuDialog( { menuSection }) {
  return (
    <div className="dialog-container">
      <div className="dialog-nav">
        <AiOutlineClose />
      </div>
      <MenuCard title={menuSection.title } imgUrl={menuSection.imgUrl} />
    </div>
  );
}

export default MenuDialog;
