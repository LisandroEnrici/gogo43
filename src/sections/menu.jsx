import React, { useState } from "react";
import MenuCard from "../components/menuCard";
import { italianMenu } from "../constants/menuContent";
import MenuDialog from "../components/menuDialog";

const OUR_MENU = "Il nostro menu...";

function Menu() {
  const [selectedMenuSection, setSelectedMenuSection] = useState(NaN);
  const handleMenuCardClick = (index) => {
    setSelectedMenuSection(index);
  };
  const handleCloseDialog = () => {
    setSelectedMenuSection(NaN);
  };

  return (
    <section id="menu">
      <h2 style={{ fontSize: "45px" }}>{OUR_MENU}</h2>
      <div className="menu-cards-container">
        {italianMenu.map((menuSection, index) => {
          return (
            <MenuCard
              key={index}
              index={index}
              title={menuSection.title}
              imgUrl={menuSection.imgUrl}
              onClick={handleMenuCardClick}
            />
          );
        })}
      </div>
      {isNaN(selectedMenuSection) ? null : (
        <MenuDialog
          menuSection={italianMenu[selectedMenuSection]}
          onClose={handleCloseDialog}
        />
      )}
    </section>
  );
}

export default Menu;
