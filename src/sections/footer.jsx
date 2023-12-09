import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import {
  instagramUrl,
  whatsAppUrl,
  creditsUrl,
} from "../constants/externalUrls.enum";

const CONTACT_US = "Contattaci";

function Footer() {
  return (
    <footer>
      <hr />
      <div className="footer-container">
        <div className="logo-container"></div>
        <h4 className="contact-title">{CONTACT_US.toUpperCase()}:</h4>
        <div className="contact-item">
          <BsWhatsapp /><a href={whatsAppUrl}>+393293122956</a>
        </div>
        <div className="contact-item">
          <BsInstagram /><a href={instagramUrl}>@gogo43.loungebarbistro</a>
        </div>
      </div>
      <p className="center-text">•••</p>
      <a className="center-text" href={creditsUrl}>
        Copyright © 2023
      </a>
    </footer>
  );
}

export default Footer;
