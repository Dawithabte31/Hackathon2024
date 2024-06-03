import { Outlet } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import CartSection from "./CartSection";
const SharedLayout = () => {
  const [isCart, setIsCart] = useState(true);
  return (
    <div>
      SharedLayout
      <CartSection isCart={isCart} setIsCart={setIsCart} />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
