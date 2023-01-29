import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ICartItem, ICartState } from "@/@types/Cart";

const initialState: ICartState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmont: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
    },
    decreaseCart: (state, action: PayloadAction<ICartItem>) => {
      const cartItemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[cartItemIndex].cartQuantity > 1) {
        state.cartItems[cartItemIndex].cartQuantity -= 1;
      } else if (state.cartItems[cartItemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
    },
    removeFromCart: (state, action: PayloadAction<ICartItem>) => {
      const newCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = newCartItems;
    },
    subTotals: (state) => {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = Number(price) * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmont = total;
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, subTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
