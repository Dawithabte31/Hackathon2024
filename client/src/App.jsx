import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ProductContextProvider } from "./contexts/ProductContext";
import { CartContextProvider } from "./contexts/CartContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./components/HomePage/LandingPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import BuyerHomePage from "./pages/BuyerHomePage";

import { CheckOut } from "./pages/CheckOut";
import SellerPage from "./pages/SellerPage";
import AdminDashboardPage from "./pages/AdminDashboardPage";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="buyer" element={<BuyerHomePage />} />
              <Route path="seller" element={<SellerPage />} />
              <Route path="checkout" element={<CheckOut />} />
              {/* <Route path="*" element={<ErrorPage />} /> */}
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="admin" element={<AdminDashboardPage />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
