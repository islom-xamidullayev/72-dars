// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    updateQuantity: (state, action) => {
      const { productId, actionType } = action.payload;
      const product = state.find((item) => item.id === productId);
      if (product) {
        if (actionType === "increase") {
          product.quantity += 1;
        } else if (actionType === "decrease" && product.quantity > 1) {
          product.quantity -= 1;
        }
      }
    },
  },
});

export const { addToCart, updateQuantity } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
