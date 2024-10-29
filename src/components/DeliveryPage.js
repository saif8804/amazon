// DeliveryPage.js
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import FormModal from "./FormModal";

const DeliveryPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);

  const handleFormState = () => {
    setIsFormOpen(!isFormOpen);
  };

  const closeModal = () => {
    setIsFormOpen(false);
    loadAddresses(); 
  };

  const loadAddresses = () => {
    const addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setSavedAddresses(addresses);
  };

  useEffect(() => {
    loadAddresses();
  }, []);

  return (
    <div className="relative">
      {isFormOpen && <FormModal closeModal={closeModal} />}
      <div>
        <h1 className="text-2xl text-orange-600 font-bold">
          1. Select a delivery address
        </h1>
        <div className="w-[700px] h-96 border border-gray-300 rounded-md mt-2 ml-8 p-2">
          <h2 className="text-xl font-bold">Your address</h2>
          <div className="w-[680px] h-[1px] bg-gray-200"></div>
          <div className="mt-2 flex flex-col items-start">
            <div className="flex items-center gap-1">
              <FaPlus />
              <p
                className="hover:text-orange-400 hover:underline cursor-pointer"
                onClick={handleFormState}
              >
                Add a new address
              </p>
            </div>
            <div className="mt-4">
              {savedAddresses.length > 0 ? (
                savedAddresses.map((addr, index) => (
                  <div key={index} className="border-2 border-black p-2 mb-2">
                    <div className="font-bold">{addr.fullname}</div>
                    <div>{addr.appartment}, {addr.area}</div>
                    <div>{addr.city}, {addr.state}, {addr.pincode}</div>
                    <div>{addr.landmark}</div>
                  </div>
                ))
              ) : (
                <p>No addresses saved yet.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;