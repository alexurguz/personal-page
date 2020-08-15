import React from "react";
import Resume from "../../resume.json";

function Footer() {
  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered has-text-white">
        <p>
         Construido con mucho <i className="fas fa-heart"></i> por{" "}
          <a href="https://github.com/jcoelho93" className="has-text-white">
            <strong>{Resume.basics.name}</strong>
          </a>
        </p>
        <p>
          <img
            width="512"
            height="96"
            src="https://bulma.io/images/made-with-bulma--semiwhite.png"
            className="bulma-image"
            alt=""
          />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
