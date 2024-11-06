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
        <OrderSummary text="use this address" para="Choose a shipping address and payment method to calculate shipping,
          handling and tax." />
      </div>
    </div>
  );
};

export default CheckOut;