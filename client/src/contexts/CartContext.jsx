import React, { createContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import ItemsLeft from "../components/SellerPage/ItemsLeft";

export const CartContext = createContext();
// create a context for state managing
export const CartContextProvider = ({ children }) => {
  const [cartItemsList, setCartItemsList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const addToCart = (product) => {
    //check if the item already exist in the cart
    const ExistingItemIndex = cartItemsList.findIndex(
      (item) => item._id === product._id,
    );
    setCartItemsList((prev) => {
      if (ExistingItemIndex !== -1) {
        //if it exist on cart return the previous cart list
        const updatedCartList = [...prev];
        toast.error("Item already in cart!");

        return updatedCartList;
      } else {
        //if it does not exist  on cart make it cart amount 1
        toast.success("Item added to cart");
        return [...prev, { ...product, cartamount: 1 }];
      }
    });
  };

  const removeCartItem = (id) => {
    const updatedCartList = cartItemsList.filter((item) => item.id !== id);
    setCartItemsList(updatedCartList);
  };

  const increaseItemAmount = (id) => {
    const cartItemIndex = cartItemsList.findIndex((item) => item.id === id);
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
    // clear the cart
    setCartItemsList([]);
  };

  // incense the cart amount by desired number
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

  // decrease the amount by 1

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
  // calculate the total balance
  useEffect(() => {
    let totalBalance = 0;
    cartItemsList.forEach((item) => {
      totalBalance += item.product_price * item.cartamount;
    });
    setSubtotal(totalBalance);
  }, [cartItemsList, subtotal]);

  // useEffect(() => {
  //   console.log("subtotal");
  //   console.log(subtotal);
  // }, [cartItemsList]);

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
