import React from "react";
import MenuCard from "../components/menuCard";
import { italianMenu } from "../constants/menuContent";
import MenuDialog from "../components/menuDialog";

const OUR_MENU = "Il nostro menu...";

function Menu() {
  return (
    <section id="menu">
      <h2 style={{fontSize:'45px'}}>{OUR_MENU}</h2>
      <div className="menu-cards-container">
        {italianMenu.map((menuSection, index) => {
          return <MenuCard title={menuSection.title } imgUrl={menuSection.imgUrl} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Menu;
