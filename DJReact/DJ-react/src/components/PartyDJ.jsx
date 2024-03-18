import React from "react";

export default function PartyDJ(props) {
  function handlePartyDJ() {
    props.setColors(["purple", "purple", "colors[2]", "colors[3]"]);
  }
  return (
    <button className="purple-button" onClick={handlePartyDJ}>
      Party DJ
    </button>
  );
}
