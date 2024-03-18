import React from "react";

export default function BigDJFour(props) {
  function handleBigDJFour() {
    props.colors[0] === "white"
      ? props.setColors(["...colors", "cyan", "cyan", "white"])
      : props.setColors(["darkcyan", "yellow", "hotpink", "greenyellow"]);
  }
  return (
    <button className="bigDJ-4" onClick={handleBigDJFour}>
      Big DJ Four
    </button>
  );
}
