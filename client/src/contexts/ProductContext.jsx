import React, { children, createContext, useState, useEffect } from "react";
import ProductsData from "../data/ProductData";
import axios from "axios";
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [productData, setProductData] = useState("");
  // const categories = [...new Set(productData.map((val) => val.product_type))];
  const [currentCategory, setCurrentCategory] = useState("ALL");

  const categories = "ALL";
  const getProjects = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/products/allproducts`,
      );
      setProductData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getProjects();
  }, []);
  
  return (
    <ProductContext.Provider
      value={{ productData, categories, currentCategory, setCurrentCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};
