import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  return (
    <div>
      <div className="w-screen h-[80px] bg-black flex items-center gap-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8wsd5NzkiO8oerpgoQZMXnflSLwuplVVZfVIain0LrsNqEXf4cUsyGp7WZebQ2p3e60&usqp=CAU"
          alt="amazon-logo"
          className="w-28 h-16"
        />
        <div className="flex  items-center">
          <CiLocationOn className="text-white w-5 h-5" />
          <div className="text-white leading-none">
            <p className="text-xs text-gray-300 font-bold">
              Deliver to Mohammad...
            </p>
            <p>Mau Nath Bhanjan</p>
          </div>
        </div>
        <div className="flex items-center ">
            <input type="text" 
            placeholder="search amazon.in"
            className="p-2 w-[45vw] h-[39px]  rounded-tl-md rounded-bl-md focus:outline-none"
            />       
           <button className="bg-orange-400 h-[39px] p-3 rounded-tr-md rounded-br-md"><FaSearch /></button>  
         </div>
          <p className="text-white leading-4">
            Hello Mohammad <br/>  
            Account & Lists
           </p>
          <p className="text-white leading-4">return & <br/> Orders </p>
          <div className="text-white ">
            <TiShoppingCart className="w-[50px] h-[200px]" />
          </div>
      </div>
    </div>  
  ); 
};
export default Header;