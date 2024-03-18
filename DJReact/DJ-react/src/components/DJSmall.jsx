import React from "react";

export default function DJSmall(props) {
  function handleDJSmall() {
    props.colors[0] === "white"
      ? props.setColors(["black", "white", "white", "white"])
      : props.setColors(["white", "black", "black", "black"]);
  }

  return (
    <button className="dj-small" onClick={handleDJSmall}>
      DJ Small
    </button>
  );
}
