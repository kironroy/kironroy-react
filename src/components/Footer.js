import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <footer className="footer">
      <div className="container">
        <p>{formattedDate}</p>
      </div>
    </footer>
  );
};

export default Footer;
