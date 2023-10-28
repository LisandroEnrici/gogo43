import React from "react";
import "./menu.css";
import SideNav from "./sideNav";

const MENU_INVITATION = "Il menu ti aspetta";

function Menu() {
  return (
    <section id="menu">
      <div className="content-container">
        <SideNav />
      </div>
    </section>
  );
}

export default Menu;
