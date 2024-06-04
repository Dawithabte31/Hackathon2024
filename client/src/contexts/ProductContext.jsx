import React, { children, createContext, useState, useEffect } from "react";
import axios from "axios";
export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  // context to handle the product from the database
  const [productData, setProductData] = useState("");
  const [currentCategory, setCurrentCategory] = useState("ALL");

  const getProjects = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/products/allproducts`,
      );
      setProductData(res.data);
      // console.log(ProductData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <ProductContext.Provider value={{ productData, setCurrentCategory }}>
      {children}
    </ProductContext.Provider>
  );
};
