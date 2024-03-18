import React from "react";

const soundArray = [
  "https://bigsoundbank.com/UPLOAD/mp3/0276.mp3",
  "https://bigsoundbank.com/UPLOAD/mp3/1687.mp3",
];

export default function Sound(props) {
  function handleSound() {
    const randomSound =
      soundArray[Math.floor(Math.random() * soundArray.length)];

    props.setSound(randomSound);
  }

  return (
    <button className="sound-button" onClick={handleSound}>
      <audio src={props.sound} autoPlay />
      Sound
    </button>
  );
}
