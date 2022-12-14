import React, { useState, useEffect } from "react";
import "./Meme.css";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImageUrl: "https://i.imgflip.com/1g8my4.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => {
        return res.json();
      })
      .then((receivedData) => {
        setAllMemeImages(receivedData?.data?.memes);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  function getMemeImage() {
    const randomIndx = Math.floor(Math.random() * 100);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImageUrl: `${allMemeImages[randomIndx].url}`,
      };
    });
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="shut up"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="and take my money"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />

        <button onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>

      <div className="meme">
        <img src={meme.randomImageUrl} alt="meme" className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
