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
      <h2>{OUR_MENU}</h2>
      <div className="menu-cards-container">
        {italianMenu.filter(menuSection => menuSection.show).map((menuSection, index) => {
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
          selectedMenuSection={selectedMenuSection}
          setSelectedMenuSection={setSelectedMenuSection}
          hasPrevious={selectedMenuSection > 0}
          hasNext={selectedMenuSection < italianMenu.length -1}
          onClose={handleCloseDialog}
        />
      )}
    </section>
  );
}

export default Menu;
