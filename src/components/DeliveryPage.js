import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import FormModal from "./FormModal";
import { useNavigate } from "react-router-dom";


const DeliveryPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [addressToEdit, setAddressToEdit] = useState(null);
  const navigate = useNavigate();

  const handleFormState = () => {
    setAddressToEdit(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleEdit = (address) => {
    setAddressToEdit(address);
    setIsFormOpen(true);
  };

  const saveAddress = (updatedAddress) => {
    let updatedAddresses;
    if (addressToEdit) {
      updatedAddresses = savedAddresses.map((addr) =>
        addr.email === addressToEdit.email ? updatedAddress : addr
      ); 
    } else {
      updatedAddresses = [...savedAddresses, updatedAddress];
    }
    setSavedAddresses(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
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
      {isFormOpen && (
        <FormModal
          closeModal={closeModal}
          addressToEdit={addressToEdit}
          saveAddress={saveAddress}
        />
      )}
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
            <div className="mt-4 w-[680px] ">
              {savedAddresses.length > 0 ? (
                savedAddresses.map((addr, index) => (
                  <div key={index} className="border-2 border-orange-400 p-2 mb-2 h-[80px]">
                    <div className="flex flex-col justify-between">
                      <div className="font-bold">
                        {addr.fullname}, {addr.appartment}, {addr.area}, {addr.city}, {addr.state}, {addr.pincode}, {addr.landmark}
                      </div>
                      <div className="cursor-pointer">
                        <p onClick={() => handleEdit(addr)}>Edit address</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No addresses saved yet.</p>
              )}
            </div>
          </div>
          <div className="mt-12">
            <button
              type="submit"
              className="mt-4 bg-orange-500 py-2 px-4 rounded-md"
              onClick={() => navigate("/payment")}
            >
              Use this address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPage;