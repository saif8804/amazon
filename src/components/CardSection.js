import React from "react";
import Card from "./Card";

const Images = [
   {
    id: 1, 
    image: "../assets/laptop.jpg",
    name : "Deal based on Your Shopping Trends"
   },
   {
    id: 2, 
    image: "../assets/Mobile.jpg",
    name : "upto 80 % off on all electroncs deals"
   },
   {
    id: 3, 
    image: "../assets/motorola.jpg",
    name : "Minimum 60% off | Deals on Amazon brands & more"
   },
   {
    id: 4, 
    image: "../assets/tv.jpg",
    name : "Up to 65% off | Upgrade to 4K TVs"
   },
   {
    id: 5, 
    image: "../assets/laptop.jpg",
    name : "Deal based on Your Shopping Trends"
   },
   {
    id: 6, 
    image: "../assets/Mobile.jpg",
    name : "upto 80 % off on all electroncs deals"
   },
   {
    id: 7, 
    image: "../assets/motorola.jpg",
    name : "Minimum 60% off | Deals on Amazon brands & more"
   },
   {
    id: 8, 
    image: "../assets/tv.jpg",
    name : "Up to 65% off | Upgrade to 4K TVs"
   },
]


const CardSection = () => {
    
    return (
      <div className="w-[1350px] h-[600px] bg-gray-200 p-4 ">
        <div className="absolute  top-80 flex flex-wrap justify-between pr-4 gap-8">
          {
            Images.map((elem) =>{
              const {id, image, name} = elem;
             return  <Card  key={id} img={image} heading={name} />
            })
          }
           
        </div>
      </div> 
    )
   
};

export default CardSection;
