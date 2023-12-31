import React from "react";
import { HTML_ABOUT_US } from "../constants/textContent";

const TXT_WHO_WE_ARE = "Chi siamo";

function AboutUs() {
  return (
    <section id="about-us">
      <div className="about-us-container">
        <h2 className="neon-text">{TXT_WHO_WE_ARE}</h2>
        <p dangerouslySetInnerHTML={{ __html: HTML_ABOUT_US.italian }}></p>
      </div>
    </section>
  );
}

export default AboutUs;
