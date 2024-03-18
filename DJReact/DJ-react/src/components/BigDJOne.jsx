import React from "react";

export default function BigDJOne(props) {
  function handleRandomColor() {
    const randomColors = [
      getRandomColor(),
      getRandomColor(),
      getRandomColor(),
      getRandomColor(),
    ];
    props.setColors(randomColors);

    function getRandomColor() {
      const hexCode = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += hexCode[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }

  return (
    <button className="random-color" onClick={handleRandomColor}>
      Big DJ One
    </button>
  );
}
