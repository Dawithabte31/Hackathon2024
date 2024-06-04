import React, { createContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export const CartContext = createContext();

//this is the context provider that helps to provide the context for its children
export const CartContextProvider = ({ children }) => {
  const [cartItemsList, setCartItemsList] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  //this one helps to add an item to the cart
  const addToCart = (product) => {
    const ExistingItemIndex = cartItemsList.findIndex(
      (item) => item.id === product.id,
    );

    // this will check if the item is in the cart or not, if so it will toast an
    // error if it's not in the cart then the cart will be added to the cart
    setCartItemsList((prev) => {
      if (ExistingItemIndex !== -1) {
        const updatedCartList = [...prev];
        toast.error("Item already in cart!");

        return updatedCartList;
      } else {
        toast.success("Item added to cart");
        return [...prev, { ...product, cartAmount: 1 }];
      }
    });
  };

  // when the "basket" icon is clicked:  this method helps to remove items from the cart and this method is to be passed as a props to the context provider
  const removeCartItem = (id) => {
    const updatedCartList = cartItemsList.filter((item) => item.id !== id);
    setCartItemsList(updatedCartList);
  };

  // when the "+" sign is cliked: the amount of the item is increased by one
  const increaseItemAmount = (id) => {
    const cartItemIndex = cartItemsList.findIndex((item) => item.id === id);
    setCartItemsList((prev) => {
      const updatedCartList = [...prev];
      updatedCartList[cartItemIndex] = {
        ...updatedCartList[cartItemIndex],
        cartAmount: updatedCartList[cartItemIndex].cartAmount + 1,
      };
      return updatedCartList;
    });
  };

  // this method will make the cart empty
  const emptyCart = () => {
    setCartItemsList([]);
  };

  //this method will add an item to the cart but it also has amount embedded with it
  const addItemWithAmount = (product, amount) => {
    const ExistingItemIndex = cartItemsList.findIndex(
      (item) => item.id === product.id,
    );
    setCartItemsList((prev) => {
      if (ExistingItemIndex !== -1) {
        const updatedCartList = [...prev];
        updatedCartList[ExistingItemIndex] = {
          ...updatedCartList[ExistingItemIndex],
          cartAmount: amount,
        };

        toast.success("Item added to cart");
        return updatedCartList;
      } else {
        toast.success("Item added to cart");
        return [...prev, { ...product, cartAmount: amount }];
      }
    });
  };

  // when the "-" sign is cliked: the amount of the item is decreased by one

  const decreaseItemAmount = (id) => {
    const cartItemIndex = cartItemsList.findIndex((item) => item.id === id);
    setCartItemsList((prev) => {
      const updatedCartList = [...prev];
      if (updatedCartList[cartItemIndex].cartAmount === 1) {
        const updatedCartList = cartItemsList.filter((item) => item.id !== id);
        return updatedCartList;
      }
      updatedCartList[cartItemIndex] = {
        ...updatedCartList[cartItemIndex],
        cartAmount: updatedCartList[cartItemIndex].cartAmount - 1,
      };
      return updatedCartList;
    });
  };

  // this one helps to prevent side effects of this component
  useEffect(() => {
    let totalBalance = 0;
    cartItemsList.forEach((item) => {
      totalBalance += item.price * item.cartAmount;
    });
    setSubtotal(totalBalance);
  }, [cartItemsList, subtotal]);

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
        addItemWithAmount,
        emptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
