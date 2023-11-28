import React from "react";
import Carousel from "../components/carousel/carousel";
import { TXT_ABOUT_US } from "../constants/textContent";

const TXT_WHO_WE_ARE = "Chi siamo?";

function AboutUs() {
  return (
    <section id="about-us">
      <Carousel />
      <h2 className="neon-text">{TXT_WHO_WE_ARE}</h2>
      <p>
        {TXT_ABOUT_US.italian}
        <br/>
        <i>Ti aspettiamo!</i>
      </p>
    </section>
  );
}

export default AboutUs;
