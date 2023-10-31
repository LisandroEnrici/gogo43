import React from "react";
import "./menu.css";
import SideNav from "./sideNav";
import Carousel from "./carousel";
import { BsChevronDoubleDown } from "react-icons/bs";

function Menu() {
  return (
    <section id="menu">
      <div className="content-container">
        <Carousel />
        <SideNav />
      </div>
      <BsChevronDoubleDown className="scroll-icon neon-text"/>
    </section>
  );
}

export default Menu;
