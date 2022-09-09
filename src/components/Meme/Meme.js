import React from "react";
import "./Meme.css";

export default function Meme() {
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="shut up" />
        <input type="text" placeholder="and take my money" />
        <button type="submit">Get a new meme image 🖼</button>
      </div>
    </main>
  );
}
