import React from "react";

export default function Cards(props) {
  const { img, price, timeToGo, place } = props.card;
  let backgroundColor = "";

  if (timeToGo === "Spring") {
    backgroundColor = "lightgreen";
  } else if (timeToGo === "Summer") {
    backgroundColor = "lightblue";
  } else if (timeToGo === "Fall") {
    backgroundColor = "#EEC591";
  } else if (timeToGo === "Winter") {
    backgroundColor = "lightgray";
  } else {
    backgroundColor = "white";
  }

  return (
    <div
      className="cards-container"
      style={{ backgroundColor: backgroundColor }}
    >
      <h2>{place}</h2>
      <img src={img} />
      <h3>
        Price: {price < 500 ? "$" : price < 1000 ? "$$" : "$$$"}
        {price}
      </h3>
      <h3>Time To Go: {timeToGo}</h3>
    </div>
  );
}
