import React, { useEffect, useState } from "react";
import MenuCard from "../components/menuCard";
import MenuDialog from "../components/menuDialog";
import { getMenu } from "../webServices";

const OUR_MENU = "Il nostro menu...";

function Menu() {
  const [italianMenu, setItalianMenu] = useState([]);
  const [selectedMenuSection, setSelectedMenuSection] = useState(NaN);
  const handleMenuCardClick = (index) => {
    setSelectedMenuSection(index);
    document.body.style.overflowY = "hidden";
  };
  const handleCloseDialog = () => {
    setSelectedMenuSection(NaN);
    document.body.style.overflowY = "";
  };

  useEffect(() => {
    async function fetchData() {
      const data = await getMenu();
      setItalianMenu(data);
    }
    fetchData();
  }, []);

  return (
    <section id="menu">
      <h2>{OUR_MENU}</h2>
      <div className="menu-cards-container">
        {italianMenu
          .filter((menuSection) => menuSection.show)
          .map((menuSection, index) => {
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
          hasNext={selectedMenuSection < italianMenu.length - 1}
          onClose={handleCloseDialog}
        />
      )}
    </section>
  );
}

export default Menu;
