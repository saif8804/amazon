import React from 'react'
import { FcPrivacy } from "react-icons/fc";

const CheckoutHeader = () => {
  return (
    <div className="w-[1330px] h-[80px] m-auto bg-white shadow-md flex justify-around items-center">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GiJmQiHVOJWPVF32F8zOkLdVjMGHnqlFCw&s"
      alt="amazon-logo"
      className="w-32 h-20"
    />
    <h2 className="text-2xl font-bold">Checkout</h2>
    <FcPrivacy className=" w-12 h-12 " />
  </div>
  )
}

export default CheckoutHeader