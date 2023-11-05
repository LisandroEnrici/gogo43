import React from "react";
import logoWhite from "../assets/logoWhite.png";
import { BsChevronDoubleDown } from "react-icons/bs";

function Banner() {
  return (
    <section id="banner">
      <img
        id="logo-img"
        src={logoWhite}
        alt="Gogo 43 Aci Trezza"
      />
      <div id="bottom-section">
        <h2>Qui dove battono i cuori</h2>
        <BsChevronDoubleDown className="scroll-icon neon-text"/>
      </div>
    </section>
  );
}

export default Banner;
