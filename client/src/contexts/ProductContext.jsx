import React, { children, createContext, useState } from "react";
import ProductsData from "../data/ProductData";
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  //the usestate hepls to manage the state of the component

  const [productData, setProductData] = useState(ProductsData);
  const categories = [...new Set(productData.map((val) => val.category[0]))];
  const [currentCategory, setCurrentCategory] = useState("ALL");

  return (
    //the following component acts as a context provider for its children
    <ProductContext.Provider
      value={{ productData, categories, currentCategory, setCurrentCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};
