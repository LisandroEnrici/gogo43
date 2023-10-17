import React from "react";
import "./topButtons.css";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

function TopButtons() {
  return (
    <div id="top-buttons-container">
      <a className="icon-button" href="https://wa.me/+393293122956">
        <BsWhatsapp />
      </a>
      <a className="icon-button" href="https://www.instagram.com/gogo43.loungebarbistro">
        <BsInstagram />
      </a>
    </div>
  );
}

export default TopButtons;
