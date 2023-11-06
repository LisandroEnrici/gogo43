import React from "react";

function MenuDescription({ menuSection }) {
  return (
    <>
      {menuSection.content.map((subSection) => {
        return (
          <>
            <h3>{subSection.title}</h3>
            {subSection.clarifications ? (
              <span>{subSection.clarifications}</span>
            ) : null}
            {subSection.content.map((item) => {
              return (
                <div className="menu-row">
                  <div>
                    <h4>{item.name}</h4>
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
