// // CartContext.js
// import React, { createContext, useContext, useState } from "react";

// // Create Cart Context
// const CartContext = createContext();

// // Custom hook to use the cart context
// export const useCart = () => {
//   return useContext(CartContext);
// };

// // CartProvider component that will wrap your app
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );

//   // Function to update the cart
//   const updateCart = (newCart) => {
//     setCart(newCart);
//     localStorage.setItem("cart", JSON.stringify(newCart)); // Save to localStorage
//   };

//   return (
//     <CartContext.Provider value={{ cart, updateCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

import React, { createContext, useContext, useState, useEffect } from "react";

// Create Cart Context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component that will wrap your app
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  // Function to update the cart
  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart)); // Save to localStorage
  };

  // Function to update the orders
  const updateOrders = (newOrder) => {
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders)); // Save to localStorage
  };

  return (
    <CartContext.Provider value={{ cart, orders, updateCart, updateOrders }}>
      {children}
    </CartContext.Provider>
  );
};
