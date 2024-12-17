// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

// import "./index.css";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import App from "./App";
// import List_of_Dishes from "./Dishes/List_of_Dishes";
// import DishList from "./Dishes/DishList";

// const rootElement = document.getElementById("root");
// ReactDOM.createRoot(rootElement).render(
//   <Router>
//     <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/list" element={<List_of_Dishes />} />
//       <Route path="/lists" element={<DishList />} />
//     </Routes>
//   </Router>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { CartProvider } from "./pages/shared/CartContext";
// import AuthProvider from "./providers/AuthProvider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {/* <AuthProvider> */}
      <HelmetProvider>
        {/* <QueryClientProvider client={queryClient}> */}
        {/* <div className="max-w-screen-xl mx-auto"> */}
        <RouterProvider router={router} />
        {/* </div> */}
        {/* </QueryClientProvider> */}
      </HelmetProvider>
      {/* </AuthProvider> */}
    </CartProvider>
    ,
  </React.StrictMode>
);
