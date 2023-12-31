import React from "react";
import logoWhite from "/assets/logoWhite.png";
import { BsChevronDoubleDown } from "react-icons/bs";

function Banner() {
  return (
    <section id="banner">
      <img
        id="logo-banner"
        src={logoWhite}
        alt="Gogo 43 Aci Trezza"
      />
      <div id="bottom-section">
        <h2 className="neon-text">Lounge Bar Bistrò</h2>
        <BsChevronDoubleDown className="arrow-icon"/>
      </div>
    </section>
  );
}

export default Banner;
