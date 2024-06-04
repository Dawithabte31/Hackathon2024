import React, { createContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ItemsLeft from "../components/SellerPage/ItemsLeft";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItemsList, setCartItemsList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [netBalance, setNetBalance] = useState(0);
  const [totalTax, setTotalTax] = useState({});
  const addToCart = (product) => {
    const ExistingItemIndex = cartItemsList.findIndex(
      (item) => item._id === product._id,
    );
    setCartItemsList((prev) => {
      if (ExistingItemIndex !== -1) {
        const updatedCartList = [...prev];
        toast.error("Item already in cart!");

        return updatedCartList;
      } else {
        toast.success("Item added to cart");
        return [...prev, { ...product, cartamount: 1 }];
      }
    });
  };

  const removeCartItem = (id) => {
    const updatedCartList = cartItemsList.filter((item) => item._id !== id);
    setCartItemsList(updatedCartList);
  };

  const increaseItemAmount = (id) => {
    const cartItemIndex = cartItemsList.findIndex((item) => item._id === id);
    setCartItemsList((prev) => {
      const updatedCartList = [...prev];
      updatedCartList[cartItemIndex] = {
        ...updatedCartList[cartItemIndex],
        cartamount: updatedCartList[cartItemIndex].cartamount + 1,
      };
      return updatedCartList;
    });
  };

  const emptyCart = () => {
    setCartItemsList([]);
  };

  const addItemWithAmount = (product, amount) => {
    const ExistingItemIndex = cartItemsList.findIndex(
      (item) => item._id === product.id,
    );
    setCartItemsList((prev) => {
      if (ExistingItemIndex !== -1) {
        const updatedCartList = [...prev];
        updatedCartList[ExistingItemIndex] = {
          ...updatedCartList[ExistingItemIndex],
          cartamount: amount,
        };

        toast.success("Item added to cart");
        return updatedCartList;
      } else {
        toast.success("Item added to cart");
        return [...prev, { ...product, cartamount: amount }];
      }
    });
  };

  const decreaseItemAmount = (id) => {
    const cartItemIndex = cartItemsList.findIndex((item) => item._id === id);
    setCartItemsList((prev) => {
      const updatedCartList = [...prev];
      if (updatedCartList[cartItemIndex].cartamount === 1) {
        const updatedCartList = cartItemsList.filter((item) => item._id !== id);
        return updatedCartList;
      }
      updatedCartList[cartItemIndex] = {
        ...updatedCartList[cartItemIndex],
        cartamount: updatedCartList[cartItemIndex].cartamount - 1,
      };
      return updatedCartList;
    });
  };

  useEffect(() => {
    let totalBalance = 0;
    cartItemsList.forEach((item) => {
      totalBalance += item.product_price * item.cartamount;
    });
    setSubtotal(totalBalance);
  }, [cartItemsList, subtotal]);

  useEffect(() => {
    let totalBalance = 0;
    let customTax = 0;
    let exiciseTax = 0;
    let vat = 0;
    let sur = 0;
    let totalTaxBalance = 0;
    let totalTax = 0;

    cartItemsList.forEach((item) => {
      totalBalance += item.product_price * item.cartamount;
      customTax =
        (item.product_price * item.cartamount * item.customs_tax) / 100;

      exiciseTax =
        ((item.product_price * item.cartamount + customTax) * item.exicise) /
        100;
      vat =
        ((item.product_price * item.cartamount + customTax + exiciseTax) *
          item.vat) /
        100;

      sur =
        ((item.product_price * item.cartamount + customTax + exiciseTax + vat) *
          item.sur) /
        100;
      totalTax = customTax + exiciseTax + vat + sur;
      totalTaxBalance += totalBalance + totalTax;
    });
    setNetBalance(totalBalance);
    setSubtotal(totalTaxBalance);
  }, [cartItemsList, subtotal]);

  useEffect(() => {
    console.log("subtotal");
    // console.log(subtotal);
  }, [cartItemsList]);

  return (
    <CartContext.Provider
      value={{
        cartItemsList,
        setCartItemsList,
        addToCart,
        removeCartItem,
        increaseItemAmount,
        decreaseItemAmount,
        subtotal,
        netBalance,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
