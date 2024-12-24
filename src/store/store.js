import { configureStore, createSlice } from "@reduxjs/toolkit";

// Brauzerning localStorage-dan savatcha ma'lumotlarini olish
const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart) : [];
};

// LocalStorage-ga savatcha ma'lumotlarini saqlash
const saveCartToStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartFromStorage(), // LocalStorage-dan yuklanadi
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      saveCartToStorage(state); // O'zgartirilgan ma'lumotlarni saqlash
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
      saveCartToStorage(state); // O'zgartirilgan ma'lumotlarni saqlash
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.filter((item) => item.id !== action.payload);
      saveCartToStorage(updatedCart); // Yangi savatchani saqlash
      return updatedCart; // Yangi holatni qaytaradi
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
