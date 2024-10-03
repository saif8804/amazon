import React from "react";
import Card from "./Card";
import Motorola from "../assets/motorola.jpg";
import Laptop from "../assets/laptop.jpg";
import TV from "../assets/tv.jpg";
import MOBILE from "../assets/Mobile.jpg";

const CardSection = () => {
  return (
    <div className="w-[1350px] h-[600px] bg-gray-200 p-4 ">
      <div className="absolute  top-80 flex flex-wrap justify-between pr-4 gap-8">
        <Card img={Motorola} heading="Deal based on Your Shopping Trends" />
        <Card img={Laptop}  heading="Up to 80% off | Electronics & accessories"/>
        <Card img={TV}  heading="Up to 65% off | Upgrade to 4K TVs"/>
        <Card img={MOBILE} heading="Deal based on Your Shopping Trends"/>
        <Card img={MOBILE} heading="Up to 80% off | Electronics & accessories"/>
        <Card img={TV} heading="Up to 65% off | Upgrade to 4K TVs" />
        <Card img={Laptop} heading="Deal based on Your Shopping Trends" />
        <Card img={Motorola} heading="Up to 80% off | Electronics & accessories" />
      </div>
    </div>
  );
};

export default CardSection;
