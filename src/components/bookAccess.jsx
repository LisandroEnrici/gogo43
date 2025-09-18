import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function BookAccess() {
  return (
    <section id="book-access">
      <Link to="https://gogo43.superbexperience.com?utm_source=gogo43loungebarbistro.com" className="book-access-container">
        <div>
          <h1>PRENOTA</h1>
        </div>
        <BsChevronDoubleRight className="arrow-icon" />
      </Link>
    </section>
  );
}

export default BookAccess;
