import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";

export default function BadgeList(props) {
  return (
    <div className="badge-list">
      {props.badges.map((badge, index) => (
        <div key={index} className="badge">
          <h2>
            {badge.firstName} {badge.lastName}
          </h2>
          <div className="contact">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <p className="badge-label">
              Phone: <span className="badge-span">{badge.phoneNumber}</span>
            </p>
          </div>
          <div className="contact">
            <div className="icon">
              <FaEnvelope />
            </div>
            <p className="badge-label">
              Email: <span className="badge-span">{badge.email}</span>
            </p>
          </div>
          <div className="contact">
            <div className="icon">
              <FaLocationDot />
            </div>

            <p class="badge-label">
              Location: <span className="badge-span">{badge.location}</span>
            </p>
          </div>

          <div className="contact">
            <div className="icon">
              <FaComment />
            </div>
            <p className="badge-label">
              About: <span className="badge-span">{badge.about}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
