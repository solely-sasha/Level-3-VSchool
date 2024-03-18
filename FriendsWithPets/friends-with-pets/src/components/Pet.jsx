import React from "react";

export default function Pet(props) {
  return (
    <div className="pet">
      <p>
        Name: <span>{props.pet.name}</span>
      </p>
      <p>
        Breed: <span>{props.pet.breed}</span>
      </p>
    </div>
  );
}
