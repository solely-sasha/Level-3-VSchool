import React, { useState } from "react";

export default function BadgeForm(props) {
  const [badgeInfo, setBadgeInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    occupation: "",
    email: "",
    location: "",
    about: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setBadgeInfo((prevBadgeInfo) => ({
      ...prevBadgeInfo,
      [name]: value,
    }));
  }

  function handlePhoneNumber(event) {
    const phoneNumber = event.target.value.replace(/[^0-9]/g, "");
    setBadgeInfo({ ...badgeInfo, phoneNumber });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addBadge(badgeInfo);

    setBadgeInfo({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      occupation: "",
      location: "",
      about: "",
    });
  }
  const isFormEmpty = Object.values(badgeInfo).some((value) => value === ""); // converts the values of badgeInfo to an array to call .some on it to check
  // if any values in the array are empty, and assigns the result (true or false) to the variable isFormEmpty

  return (
    <form className="badge-form" onSubmit={handleSubmit}>
      <div className="grid-container">
        <div className="grid-item">
          <label htmlFor="firstName"> First Name: </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={badgeInfo.firstName}
            onChange={handleChange}
            minLength={3}
            required
          />
        </div>

        <div className="grid-item">
          <label htmlFor="lastName"> Last Name: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={badgeInfo.lastName}
            onChange={handleChange}
            minLength={3}
            required
          />
        </div>

        <div className="grid-item">
          <label htmlFor="phoneNumber"> Phone Number: </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={badgeInfo.phoneNumber}
            onChange={handlePhoneNumber}
            minLength={10}
            maxLength={10}
            required
          />
        </div>

        <div className="grid-item">
          <label htmlFor="occupation"> Occupation: </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={badgeInfo.occupation}
            onChange={handleChange}
            minLength={3}
            required
          />
        </div>

        <div className="grid-item">
          <label htmlFor="email"> Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={badgeInfo.email}
            onChange={handleChange}
            minLength={3}
            required
          />
        </div>

        <div className="grid-item">
          <label htmlFor="location"> Location: </label>
          <input
            type="text"
            id="location"
            name="location"
            value={badgeInfo.location}
            onChange={handleChange}
            minLength={3}
            required
          />
        </div>

        <div className="grid-textarea">
          <textarea
            value={badgeInfo.about}
            placeholder="a little about you"
            onChange={handleChange}
            name="about"
            required
          />
        </div>
      </div>
      <div className="submit">
        <button
          className={isFormEmpty ? "disabled-button" : ""}
          disabled={isFormEmpty}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
