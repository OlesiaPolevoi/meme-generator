import React from "react";
import logo from "./troll.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="troll logo" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
