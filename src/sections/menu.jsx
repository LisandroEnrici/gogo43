import React from "react";
import MenuCard from "../components/menuCard";
import { italianMenu } from "../constants/menuContent";

const OUR_MENU = "Il nostro menu";

function Menu() {
  return (
    <section id="menu">
      <h2>{OUR_MENU}</h2>
      <div className="menu-cards-container">
        {italianMenu.map((menuSection, index) => {
          return <MenuCard menuSection={menuSection} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Menu;
