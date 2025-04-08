import React from "react";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
    .format(today)
    .replace(",", ""); // Removes comma from the formatted string

  return (
    <footer className="footer">
      <div className="container">
        <p>{formattedDate}</p>
      </div>
    </footer>
  );
};

export default Footer;
