import React from "react";
import { useSelector } from "react-redux";

const OrderSummary = () => {

const cartItems = useSelector((store) => store?.cart?.items);

 const totalPrice = cartItems.reduce((total, item) => {
    return total + item.unitPrice * item.quantity;
  }, 0);

  return (
    <div className=" w-[280px] h-[300px] border-2 border-gray-100 py-2 px-4 rounded-md ">
      <div>
        <span className="bg-orange-400 py-1 px-12 rounded cursor-pointer ">
          Use this address
        </span>
        <p className="text-sm text-center pt-1 tracking-tighter">
          Choose a shipping address and payment method to calculate shipping,
          handling and tax.
        </p> 
        <hr className="h-[3px] mt-2 bg-gray-600" />
      </div>
       <div className="mt-2">
          <h1 className="text-xl font-bold"> Order Summary</h1>
           <div className="flex justify-between mt-4">
             <p>items</p>
             <p>--</p>
           </div>
           <div className="flex justify-between ">
             <p>Delivery</p>
             <p>--</p>
           </div>
       </div>
       <hr className="h-[3px] mt-2 bg-gray-600" /> 
        <div className="mt-2 flex">
             <p className="text-xl text-red-600 font-bold">Order Total : <span>{totalPrice}</span> </p>
        </div>
    </div>
  );
};

export default OrderSummary;
