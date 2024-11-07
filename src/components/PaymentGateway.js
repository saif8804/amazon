import React, { useState } from "react";

const PaymentGateway = ({payment, setPayment}) => {
  const [isUpiOpen, setIsUpiOpen] = useState(false);
  const [isEmiOpen, setIsEmiOpen] = useState(false);

  const handleUPI = () => {
    setIsUpiOpen(!isUpiOpen);
  };

  const handleEMI = () => {
    setIsEmiOpen(!isEmiOpen);
  };

  const handlePayment = (e) =>{
    setPayment(e.target.value)
  } 

  return (
    <div className="w-[800px] border-2 border-gray-200  rounded-md h-[450px] mt-4 p-2">
      <div>
        <h2 className="text-xl font-bold">Another Payment method</h2>
        <div className="w-[780px] h-[1px] bg-gray-300"></div>
        <div className="flex gap-4 mt-3 ml-4">
          <input type="radio" name="payment" value='Credit or debit Card' onChange={handlePayment} />
          <h3 className="font-bold">Credit or debit Card</h3>
        </div>
        <div className=" flex ml-20 gap-2 mt-2">
          <span>
            {" "}
            <img
              className="w-[80px] h-10"
              src="../assets/federal.jpg"
              alt="img"
            />
          </span>
          <span>
            {" "}
            <img
              className="w-[80px] h-10"
              src="../assets/maestro.png"
              alt="img"
            />
          </span>
          <span>
            {" "}
            <img
              className="w-[100px] h-10"
              src="../assets/mastercard.jpg"
              alt="img"
            />
          </span>
          <span>
            {" "}
            <img
              className="w-[100px] h-10"
              src="../assets/Rupay.png"
              alt="img"
            />
          </span>
          <span>
            {" "}
            <img
              className="w-[100px] h-10"
              src="../assets/visa.jpg"
              alt="img"
            />
          </span>
        </div>
      </div>
      <div className="mt-3 ml-4">
        <div className="flex gap-4">
          <input type="radio"  name="payment" value="Net banking" onChange={handlePayment}/>
          <h2 className="font-bold">Net banking</h2>
        </div>
        <div className="mt-4 ml-4">
          <select id="banks" className="border-2 border-gray-200 rounded">
            <option value="Choose ">Choose an option</option>
            <option value="HDFC">HDFC BANK</option>
            <option value="IDBI">IDBI BANK</option>
            <option value="AIRTEL">AIRTEL PAYMENT BANK</option>
            <option value="PAYTM">PAYTM PAYMENT BANK</option>
            <option value="SBI">SBI BANK</option>
            <option value="FEDERAL">FEDERAL BANK</option>
            <option value="CANARA">CANARA BANK</option>
            <option value="PNB">PNB BANK</option>
            <option value="CENTRAL">CENTRAL BANK</option>
            <option value="BANK">BANK OF INDIA</option>
            <option value="J&K ">J & K BANK</option>
            <option value="UNION">UNION BANK</option>
          </select>
        </div>
      </div>
      <div className="mt-3 ml-4">
        <div className="flex gap-4">
          <input type="radio" name="payment" value="other UPI Apps" onChange={handlePayment} onClick={handleUPI} />
          <h2 className="font-bold">other UPI Apps</h2>
        </div>
        {isUpiOpen && (
          <div className="mt-3 ml-4">
            <p>please enter your UPI ID</p>
            <div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="enter UPI ID"
                  className="px-2 border-2 border-gray-200"
                />
                <button className="border-2 border-gray rounded-md px-2">
                  Verify
                </button>
              </div>
              <p>The UPI ID is in the format of name/phone number@bankname</p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-3 ml-4">
        <div className="flex gap-4">
          <input type="radio" name="payment" value="EMI" onChange={handlePayment} onClick={handleEMI} />
          <h2 className="font-bold">EMI</h2>
        </div>
        {isEmiOpen && (
          <div className="ml-8">
            <select id="emi" className="border-2 border-gray-200 rounded-md">
              <option value="pay">Amazon Pay Later</option>
              <option value="pay">Add a new card</option>
            </select>
          </div>
        )}
      </div>
       <div className="mt-3 ml-4">
          <div className="flex gap-4">
             <input type="radio" name="payment"  value="Cash on Delivery/Pay on Delivery" onChange={handlePayment}/>
             <h2 className="font-bold">Cash on Delivery/Pay on Delivery</h2>
          </div>
       </div>
    </div>
  );
};
export default PaymentGateway;