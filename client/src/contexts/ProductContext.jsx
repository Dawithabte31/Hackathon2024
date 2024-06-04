import React, { children, createContext, useState, useEffect } from "react";
import ProductsData from "../data/ProductData";
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getProjects();
  }, []);

  console.log(productData);
  return (
    <ProductContext.Provider value={{ productData, setCurrentCategory }}>
      {children}
    </ProductContext.Provider>
  );
};
