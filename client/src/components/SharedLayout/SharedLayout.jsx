import { Outlet } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import CartSection from "./CartSection";
import Header from "./Header";

const SharedLayout = () => {
  const [isCart, setIsCart] = useState(false);
  return (
    <div>
      <Header setIsCart={setIsCart} />
      <CartSection isCart={isCart} setIsCart={setIsCart} />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
