import React from "react";
import { BiChevronsRight } from "react-icons/bi";

const MENU_INVITATION = "Il menu ti aspetta";

function SideNav() {
  return (
    <div className="side-section">
      <div className="vertical-line"></div>
      <a
        className="side-section"
        href="https://drive.google.com/file/d/1-XeXwD3r7k4Yk1Yp39YZhJBk-xN_69mh/view?usp=drivesdk"
      >
        <h3 className="menu-link-title">{MENU_INVITATION}</h3>
        <BiChevronsRight id="right-icon" />
      </a>
    </div>
  );
}

export default SideNav;
