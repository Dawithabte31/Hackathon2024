import { Outlet } from "react-router-dom";
import React, { useContext, useEffect, useRef, useState } from "react";
import CartSection from "./CartSection";
import Header from "./Header";

// this is where all the layouts that are shared by all the pages are placed

const SharedLayout = () => {
  // this one helps to toggle the cart items
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
