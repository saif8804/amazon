import React from "react";
import { ImStarFull } from "react-icons/im";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";

const Stars = ({ stars }) => {
  const starRating = Array.from({ length: 5 }, (elem, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars > index + 1 ? (
          <ImStarFull className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <IoIosStarOutline className="icon" />
        )}
      </span>
    );
  });
  return (
    <div className="flex pt-2 text-orange-400">
    {starRating}
    </div>
    )
};

export default Stars;
