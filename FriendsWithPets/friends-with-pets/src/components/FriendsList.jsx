import React from "react";
import Friend from "./Friend";
import data from "../data";

export default function FriendsList() {
  return (
    <div className="friend-list">
      {data.map((friend, index) => (
        <Friend
          key={index}
          name={friend.name}
          age={friend.age}
          pets={friend.pets}
        />
      ))}
    </div>
  );
}
