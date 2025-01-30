import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Heart = ({ isLiked, onClick }) => {
  return (
    <span
      className={`heart ${isLiked ? "liked" : ""}`}
      onClick={onClick}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        fontSize: "20px",
        cursor: "pointer",
        color: isLiked ? "red" : "gray",
      }}
    >
      <FaRegHeart />
    </span>
  );
};

export default Heart;
