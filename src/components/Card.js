import React from "react";

const Card = ({img, heading}) => {
   
  return (
    <div
     className="w-[300px] h-[360px] bg-white p-3">
      <h1 className="text-xl font-bold">{heading}</h1>
      <img src={img} alt="phone-img" className="pt-2" />
    </div>
  );
};

export default Card;
