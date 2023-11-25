import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import {instagramUrl, whatsAppUrl} from '../constants/externalUrls.enum'

function TopButtons() {
  return (
    <nav>
      <a
        className="icon-button"
        href={instagramUrl}
      >
        <BsInstagram id="instagram-icon" />
      </a>
      <a className="icon-button" href={whatsAppUrl}>
        <BsWhatsapp id="whatsapp-icon" />
      </a>
    </nav>
  );
}

export default TopButtons;
