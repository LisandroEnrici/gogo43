import React from "react";
import { BsInstagram, BsWhatsapp, BsFacebook } from "react-icons/bs";
import {
  instagramUrl,
  whatsAppUrl,
  facebookUrl,
  creditsUrl,
} from "../constants/externalUrls.enum";

const CONTACT_US = "Contattaci";

function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer-container">
        <div className="logo-container"></div>
        <h4 className="contact-title">{CONTACT_US.toUpperCase()}</h4>
        <a className="contact-item" href={whatsAppUrl}>
          <BsWhatsapp />
          <span>+393293122956</span>
        </a>
        <a className="contact-item" href={instagramUrl}>
          <BsInstagram />
          <span>@gogo43.loungebarbistro</span>
        </a>
        <a className="contact-item" href={facebookUrl}>
          <BsFacebook />
          <span>Gogo 43</span>
        </a>
      </div>
      <p className="center-text">•••</p>
      <a className="center-text" href={creditsUrl}>
        Copyright © 2023
      </a>
    </footer>
  );
}

export default Footer;
