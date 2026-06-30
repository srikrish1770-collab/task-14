import { createContext, useReducer } from "react";
import CartReducer from "../reducer/CartReducer";

// Create Context
export const CartContext = createContext();

// Initial State
const initialState = {
  cart: [],
};

// Provider Component
export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}