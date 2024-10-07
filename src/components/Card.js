import React from "react";

const Card = ({img, heading, price ,onClick}) => {
   
  return (
    <div
     className="w-[300px] h-[360px] bg-white p-3 cursor-pointer rounded-xl shadow-xl" onClick={onClick}> 
      <h1 className="text-xl font-bold">{heading}</h1>
      <img src={img} alt="phone-img" className="pt-2 h-[250px]" />
      <p className="font-bold"> Rs-{price}</p>
    </div>
  );
};

export default Card;
