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
      <h4>{CONTACT_US.toUpperCase()}:</h4>
      <ul>
        <li>
          <BsWhatsapp />{" "}
          <b>
            <a href={whatsAppUrl}>+393293122956</a>
          </b>
        </li>
        <li>
          <BsInstagram />{" "}
          <b>
            <a href={instagramUrl}>@gogo43.loungebarbistro</a>
          </b>
        </li>
      </ul>
      <p className="center-text">•••</p>
      <a className="center-text" href={creditsUrl}>
        © 2023
      </a>
    </footer>
  );
}

export default Footer;
