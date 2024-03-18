import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);
  const [memeList, setMemeList] = useState([]);

  useEffect(() => {
    axios.get("https://api.imgflip.com/get_memes").then((res) => {
      setAllMemes(res.data.data.memes);
    });
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function addMemeToList() {
    const newMeme = {
      ...meme,
      id: uuidv4(),
    };
    setMemeList((prevList) => [...prevList, newMeme]);

    setMeme({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
    });
  }

  function deleteMeme(id) {
    setMemeList((prevList) => prevList.filter((m) => m.id !== id));
  }

  function toggleEditMode(id) {
    setMemeList((prevList) =>
      prevList.map((m) => {
        if (m.id === id) {
          return { ...m, editing: !m.editing };
        }
        return m;
      })
    );
  }

  function saveMemeText(id) {
    setMemeList((prevList) =>
      prevList.map((m) => {
        if (m.id === id) {
          return {
            ...m,
            editing: false,
            topText: meme.topText,
            bottomText: meme.bottomText,
          };
        }
        return m;
      })
    );
  }

  return (
    <main className="main">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
        <button className="form-button" onClick={addMemeToList}>
          Add to list
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme-image" alt="Random Meme" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
      <div className="meme-list">
        {memeList.map((m) => (
          <div key={m.id} className="meme-item">
            <div className="meme-item-wrapper">
              <img src={m.randomImage} alt="Meme" className="meme-list-image" />
              <div className="meme-list-text">
                <h2 className="meme-list-top">{m.topText}</h2>
                <h2 className="meme-list-bottom">{m.bottomText}</h2>
              </div>
            </div>
            <div className="meme-list-buttons">
              <button
                className="edit-button"
                onClick={() => toggleEditMode(m.id)}
              >
                {m.editing ? "Cancel" : "Edit"}
              </button>
              <button
                className="save-button"
                onClick={() => saveMemeText(m.id)}
              >
                Save
              </button>

              <button className="edit-button" onClick={() => deleteMeme(m.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
