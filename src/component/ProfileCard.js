import React from "react";
import "./ProfileCard.css";

export default function ProfileCard({ nama, imageUrl, onClick }) {
  return (
    <div className="profile-card" onClick={onClick}>
      <img src={imageUrl} alt={`${nama}'s profile`} className="profile-image" />
      <p className="profile-name">{nama}</p>
    </div>
  );
}
