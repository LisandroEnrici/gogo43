import React from "react";
import "./banner.css";
import logoWhite from "../../assets/logoWhite.png";
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
        <h2 className="neon-text">Qui dove battono i quori</h2>
        <BsChevronDoubleDown id="scroll-icon" className="neon-text"/>
      </div>
    </section>
  );
}

export default Banner;
