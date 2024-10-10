import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Stars from "./Stars";
import {
  clearCart,
  decrement,
  increment,
  removeItem,  
} from "../utils/cartSlice";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const increaseCount = (id) => {
    dispatch(increment(id));
  };

  const decreaseCount = (id) => {
    dispatch(decrement(id));
  };



  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-xl font-bold">Cart</h1>
      <button
        onClick={handleClearCart}
        className="bg-black text-white rounded p-1"
      >
        Clear cart
      </button>

      {cartItems.length === 0 && (
        <div>
          <h1>Cart is Empty. Add Item to the Cart.</h1>
        </div>
      )}
      <div>
        {cartItems.map((items) => {
          return (
            <div className="flex gap-8 mt-12">
              <div className="products flex gap-2 ml-12 p-4 bg-white rounded-xl  shadow-md w-9/12">
                <img
                  className="w-[300px] h-[300px]"
                  src={items.image}
                  alt="product"
                />
                <div className="flex flex-col items-start  ">
                  <p className="  text-xl font-bold items-start">
                    {items.description}
                  </p>
                  <Stars stars={items.stars} />
                  <p className="font-bold pt-2"> Rs-{ items.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <CiSquarePlus onClick={() => increaseCount(items.id)} />
                    <input
                      className="w-12 border border-black rounded px-3"
                      type="text"
                      placeholder={items.quantity}
                    />
                    <CiSquareMinus onClick={() => decreaseCount(items.id)} />
                  </div>
                  <button
                    onClick={() => handleRemoveItem(items.id)}
                    className="bg-orange-400 p-1 rounded-md mt-2"
                  >
                    Delete Item
                  </button>
                </div>
              </div>
              <div>
                <h1 className="font-bold">Hello</h1>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
