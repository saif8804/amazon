import React from "react";
import DeliveryPage from "./DeliveryPage";
import OrderSummary from "./OrderSummary";
import CheckoutHeader from "./CheckoutHeader";


const CheckOut = () => {
  return (
    <div>
        <CheckoutHeader />
      <div className=" flex justify-around  mt-8">
        <DeliveryPage />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckOut;