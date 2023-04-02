import React from "react";
import "./Footer.css";

let date = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p>Felipe Sarres | Software Developer | {date}</p>
    </div>
  );
}

export default Footer;
