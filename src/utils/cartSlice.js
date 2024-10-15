import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart: (state, action) => {
      state.items.length = 0;
    },
    increment: (state, action) => {
      let updatedCart = state.items.map((elem) => {
        if (elem.id === action.payload) {
          const updatedQuantity = elem.quantity + 1;
          const updatedPrice = updatedQuantity * elem.unitPrice; 
          return { ...elem, quantity: updatedQuantity, price: updatedPrice };
        }
        return elem;
      });
      return { ...state, items: updatedCart };
    },
    decrement: (state, action) => {
      let updatedCart = state.items.map((elem) => {
        if (elem.id === action.payload) {
          const updatedQuantity = elem.quantity <= 1 ? 1 : elem.quantity - 1;
          const updatedPrice = updatedQuantity * elem.unitPrice; 
          return { ...elem, quantity: updatedQuantity, price: updatedPrice };
        }
        return elem;
      });
      return { ...state, items: updatedCart };
    }
  },
});

export const { addItems, removeItem, clearCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;