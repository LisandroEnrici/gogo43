import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function MenuAccess() {
  return (
    <section id="menu-access">
      <Link to="menu" className="menu-access-container">
        <div>
          <h1>ME</h1>
          <h1 style={{ letterSpacing: "10px" }}>NU</h1>
        </div>
        <BsChevronDoubleRight className="arrow-icon" />
      </Link>
    </section>
  );
}

export default MenuAccess;
