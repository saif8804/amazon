import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Images from "../utils/constant";

const CardSection = () => {
  const navigate = useNavigate();
  const handleCardClick = (product) => {
    navigate("/card-page", {state:{product}});
  };
  return (
    <div className="w-[1350px] h-[600px] bg-gray-200 p-4 ">
      <div className="absolute  top-80 flex flex-wrap justify-between pr-4 gap-8">
          {Images.map((elem) => {
            const { id, image, name, price } = elem;
            return (
              <Card
                key={id}
                img={image}
                heading={name}
                price={price}
                onClick={() => handleCardClick(elem)}
              />
            );  
          })}
      </div>
    </div>
  );
};

export default CardSection;