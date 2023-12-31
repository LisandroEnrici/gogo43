import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function MenuAccess() {
  return (
    <section id="menu-access">
      <div className="menu-access-container">
        <div>
          <h1>ME</h1>
          <h1 style={{ letterSpacing: "10px" }}>NU</h1>
        </div>
        <Link to="menu">
          <BsChevronDoubleRight className="arrow-icon" />
        </Link>
      </div>
    </section>
  );
}

export default MenuAccess;
