import React, { useState, useEffect } from "react";
import CheckoutHeader from "./CheckoutHeader";
import PaymentSummary from "./PaymentSummary";
import PaymentGateway from "./PaymentGateway";
import { useSelector } from "react-redux";

const PaymentPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [payment, setPayment] = useState();
  const cartItems = useSelector((store) => store?.cart?.items);

  const loadAddresses = () => {
    const addresses = JSON.parse(localStorage.getItem("addresses")) || [];
    setSavedAddresses(addresses);
  };

  const handlePayment = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    loadAddresses();
  }, []);

  return (
    <div>
      <CheckoutHeader />
      <div className="flex justify-center gap-4  mt-4 ">
        <div className="flex  flex-col ">
          <div className="w-[800px] h-[150px] border-b-2 border-gray-200  p-2 flex  justify-between">
            <h2 className="text-xl font-bold">1. Delivery address</h2>
            <div>
              <div className=" w-[300px] ">
                {savedAddresses.length > 0 ? (
                  savedAddresses.map((addr, index) => (
                    <div key={index} className=" p-2 mb-2 h-[80px]">
                      <div className="flex flex-col justify-between">
                        <div className="">
                          {addr.fullname}, {addr.appartment}, {addr.area},{" "}
                          {addr.city}, {addr.state}, {addr.pincode},{" "}
                          {addr.landmark}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No addresses saved yet.</p>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold text-orange-800">
              2. Payment method
            </h2>
            <p className="font-bold">{payment}</p>
            <button
              onClick={handlePayment}
              className="text-sky-500 hover:text-orange-800 hover:underline"
            >
              {isOpen ? "close" : "change"}
            </button>
          </div>
          <div>
            {isOpen && (
              <PaymentGateway payment={payment} setPayment={setPayment} />
            )}
          </div>
          <div className="w-[780px] h-[1px] bg-gray-300 mt-4"></div>
          <div className="mt-2">
            <h2 className="text-xl font-bold"> 3. Offers</h2>
          </div>
          <div className="w-[780px] h-[1px] bg-gray-300 mt-4"></div>
          <div>
            <div className="flex justify-between">
              <h2 className=" text-xl font-bold">4. Items and Delivery</h2>
              <div className="mr-20">
                <h4 className="font-bold">delivery date 16 Nov 2024.</h4>
                <div className="flex gap-2 mt-2">
                  {cartItems.map((items) => {
                    return (
                      <>
                        <img
                          src={items.image}
                          alt="stand"
                          className="w-[60px] h-[40px]"
                        />
                         <p className="w-52">{items.description}</p>
                      </>
                    );
                  })}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <PaymentSummary
            text="place your order"
            para="By placing your order, you agree to Amazon's privacy notice and conditions of use."
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
