import React, { useState, useEffect } from "react";
import axios from "axios";

export default function RandomColor() {
  const [randomColor, setRandomColor] = useState("");

  const getRandomColor = () => {
    axios
      .get(`https://x-colors.yurace.pro/api/random?number=10`)
      .then((res) => {
        const randomColorIndex = Math.floor(Math.random() * res.data.length);
        const colorHex = res.data[randomColorIndex].hex;
        setRandomColor(colorHex); // Update the separate state
      })
      .catch((err) => {
        console.log("An error occurred:", err);
      });
  };

  useEffect(() => {
    getRandomColor();
  }, []);

  return (
    <div className = "container" style={{ backgroundColor: randomColor }}>
      <h1>Random Color</h1>
      <button onClick={getRandomColor}>Change Color</button>
    </div>
  );
}
