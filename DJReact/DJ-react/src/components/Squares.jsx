import React from "react";
import DJSmall from "./DJSmall";
import PartyDJ from "./PartyDJ";
import LeftBlueButton from "./LeftBlueButton";
import RightBlueButton from "./RightBlueButton";
import BigDJTwo from "./BigDJTwo";
import BigDJOne from "./BigDJOne";
import BigDJThree from "./BigDJThree";
import BigDJFour from "./BigDJFour";
import Sound from "./Sound";

export default function Squares() {
  const [colors, setColors] = React.useState([
    "white",
    "white",
    "white",
    "white",
  ]);

  const [sound, setSound] = React.useState("null");

  return (
    <>
      <div className="squares-container">
        {colors.map((color, index) => (
          <div
            className="squares"
            key={index}
            style={{
              backgroundColor: color,
            }}
          />
        ))}
      </div>
      <div>
        <div className="buttons">
          <DJSmall colors={colors} setColors={setColors} />
          <PartyDJ colors={colors} setColors={setColors} />
          <LeftBlueButton colors={colors} setColors={setColors} />
          <RightBlueButton colors={colors} setColors={setColors} />
          <BigDJOne setColors={setColors} />
          <BigDJTwo colors={colors} setColors={setColors} />
          <BigDJThree colors={colors} setColors={setColors} />
          <BigDJFour colors={colors} setColors={setColors} />
          <Sound sound={sound} setSound={setSound} />
        </div>
      </div>
    </>
  );
}
