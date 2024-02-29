import React from "react";
import MenuIconList from "../utils/menuIconList";

function MenuDescription({ menuSection }) {
  return (
    <>
      {menuSection.content.filter(subSection => subSection.show).map((subSection) => {
        return (
          <>
            <div className="menu-row">
              <h3>{subSection.title}</h3>
              <h3>{subSection.icons?.map((icon) => (
                <MenuIconList iconName={icon} />
              ))}</h3>
            </div>
            {subSection.clarifications ? (
              <span>{subSection.clarifications}</span>
            ) : null}
            {subSection.content?.filter(item => item.show)?.map((item) => {
              return (
                <div className="menu-row">
                  <div>
                    <h4>{item.name} {<MenuIconList iconName={item.icon} />}</h4>
                    {item.description ? <span>{item.description}</span> : null}
                  </div>
                  <p>{item.price}</p>
                </div>
              );
            })}
          </>
        );
      })}
    </>
  );
}

export default MenuDescription;
