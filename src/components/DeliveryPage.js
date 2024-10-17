import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import FormModal from "./FormModal";

const DeliveryPage = () => {
    
  const [isFormOpen, setIsFormOpen] = useState(false);
   const handleFormState = () => {
     setIsFormOpen(!isFormOpen);
  };

 const closeModal = () =>{
     setIsFormOpen(false);
 }

  return (
    <div className="relative"> 
       {isFormOpen && <FormModal closeModal={closeModal} />} 
      <div>
        <h1 className="text-2xl text-orange-600 font-bold">
          1 Select a delivery address
        </h1>
        <div className="w-[700px] h-96 border border-gray-300 rounded-md mt-2 ml-8 p-2">
          <h2 className="text-xl font-bold">Your address</h2>
          <div className="w-[680px] h-[1px] bg-gray-200"></div>
          <div className="flex flex-col justify-between w-full h-[340px]" >
           <div className="mt-2 flex items-center">
           <FaPlus />
            <p
              className=" hover:text-orange-400 hover:underline cursor-pointer"
             onClick={handleFormState}
            >
              {" "} 
              Add a new address
            </p>
           </div>
            <span
                className=" w-3/12  px-4 bg-orange-500 rounded-md cursor-pointer "
              >
                Use this address
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;