import React from "react";
import "../index.css";
import Navlink from "./Navlink";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="social">
          <Navlink />
        </div>
        <p className="footer-message">Thank You ❤️ Visit Again</p>
      </footer>
    </>
  );
}

export default Footer;
