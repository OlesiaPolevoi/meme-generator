import React, { useState } from "react";
import "./Meme.css";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  const getMemeImage = () => {
    const randomIndx = Math.floor(Math.random() * 100) + 1;
    // console.log(memesData.data.memes[randomIndx].url);
    setMemeImage(memesData.data.memes[randomIndx].url);
    console.log(memeImage);
  };

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="shut up" />
        <input type="text" placeholder="and take my money" />
        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <img src={memeImage} alt="meme" />
    </main>
  );
}
