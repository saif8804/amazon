import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Stars from "./Stars";
import {
  clearCart,
  decrement,
  increment,
  removeItem,
} from "../utils/cartSlice";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();

  const increaseCount = (id) => {
    dispatch(increment(id));
  };

  const decreaseCount = (id) => {
    dispatch(decrement(id));
  };

  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.unitPrice * item.quantity;
  }, 0);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="m-4 p-4 flex flex-wrap justify-between">
      <div className="w-full lg:w-8/12">
        <h1 className="text-xl font-bold">Shopping Cart</h1>
        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="bg-black text-white rounded p-1 mt-4"
          >
            Clear cart
          </button>
        )}

        {cartItems.length === 0 && (
          <div>
            <h1 className="text-xl font-bold mt-8">Your Cart is Empty</h1>
            <p>Add items to your cart to see them here.</p>
          </div>
        )}

        <div>
          {cartItems.map((items) => {
            return (
              <div className="flex gap-4 mt-12" key={items.id}>
                <div className="products flex gap-2 p-4 bg-white rounded-xl shadow-md w-full">
                  <img
                    className="w-[150px] h-[150px] object-cover"
                    src={items.image}
                    alt="product"
                  />
                  <div className="flex flex-col items-start w-full">
                    <p className="text-lg font-bold">{items.description}</p>
                    <Stars stars={items.stars} />
                    <p className="font-bold pt-2">Rs-{items.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <CiSquarePlus onClick={() => increaseCount(items.id)} />
                      <input
                        className="w-12 border border-black rounded px-3"
                        type="text"
                        placeholder={items.quantity}
                        readOnly
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
              </div>
            );
          })}
        </div>
      </div>

      {cartItems.length > 0 && (
        <div className="w-full lg:w-3/12 bg-white p-4 rounded-md shadow-lg border border-gray-200 mt-8 lg:mt-0 lg:ml-8">
          <h2 className="text-lg font-bold">
            Subtotal ({totalQuantity} items):{" "}
            <span className="text-red-600">Rs-{totalPrice}</span>
          </h2>
          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" />
            <label className="text-sm">This order contains a gift</label>
          </div>
          <button
            onClick={() => {
              navigate("/check-out");
            }}
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md w-full"
          >
            Proceed to Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;