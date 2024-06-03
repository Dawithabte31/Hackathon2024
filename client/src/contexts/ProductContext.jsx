import React, { children, createContext, useState } from "react";
import ProductsData from "../data/ProductData";
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState(ProductsData);
  const categories = [...new Set(productData.map((val) => val.category[0]))];
  const [currentCategory, setCurrentCategory] = useState("ALL");

  return (
    <ProductContext.Provider
      value={{ productData, categories, currentCategory, setCurrentCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};
