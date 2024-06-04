import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";
import { TbMathGreater } from "react-icons/tb";
import CategoryProductList from "./CategoryProductList";
import { FaHome } from "react-icons/fa";

const CategoriesSection = () => {
  //this one helps to take the values across different components
  const { productData, categories, setCurrentCategory, currentCategory } =
    useContext(ProductContext);
  const [categoryMainList, setCategoryMainList] = useState(productData);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);
  const [sortOptionValue, SetSortOptionValue] = useState("");

  //this one allows to perform side effects in the component

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryMainList]);

  return (
    <div className="">
      <div className="py-10 text-center">
        <h1 className="text-[34px] font-bold uppercase text-[#2178ac] md:text-[44px] lg:text-[49px] min-[1200px]:text-[55px]">
          Product List
        </h1>
      </div>
      <CategoryProductList
        postPerPage={postPerPage}
        currentPage={currentPage}
        categoryMainList={categoryMainList}
        setCategoryMainList={setCategoryMainList}
        sortOptionValue={sortOptionValue}
      />
    </div>
  );
};

export default CategoriesSection;
