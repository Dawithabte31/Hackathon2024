import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
 
// import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LandingPage from "./components/HomePage/LandingPage";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import LoginPage from "./pages/loginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
}
 

export default App;
