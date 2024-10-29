import { createSlice } from "@reduxjs/toolkit";


const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCartFromLocalStorage(),
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
      saveCartToLocalStorage(state.items);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items.length = 0;
      saveCartToLocalStorage(state.items);
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
      state.items = updatedCart;
      saveCartToLocalStorage(state.items);
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
      state.items = updatedCart;
      saveCartToLocalStorage(state.items);
    }
  },
});

export const { addItems, removeItem, clearCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
