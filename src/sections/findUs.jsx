import React from "react";
import { TXT_ACITREZZA } from "../constants/textContent";

const TXT_FIND_US = "Nel quore di AciTrezza";

function findUs() {
  return (
    <section id="find-us">
      <h2>{TXT_FIND_US}</h2>
      <div className="content-container">
        <img
          className="img-acitrezza"
          src="https://siviaggia.it/wp-content/uploads/sites/2/2019/08/aci-trezza.jpg"
          alt="Faraglioni"
        />
        <p className="txt-acitrezza">{TXT_ACITREZZA.italian} 
        <br/>
        <i>Vieni da noi...</i></p>
        <iframe
          className="maps-frame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.7079344291915!2d15.157980675703424!3d37.56194437203977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313fbb81c1ef279%3A0x3c794e281f5b4f8e!2sGoGo%2043!5e0!3m2!1ses-419!2sit!4v1701170230853!5m2!1ses-419!2sit"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default findUs;
