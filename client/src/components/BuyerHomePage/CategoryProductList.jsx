import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "../ProductCard";

const CategoryProductList = ({
  postPerPage,
  currentPage,
  categoryMainList,
  setCategoryMainList,
  sortOptionValue,
}) => {
  const { productData } = useContext(ProductContext);
  const mappedCategoryList =
    productData &&
    productData.map((product, index) => (
      <ProductCard product={product} key={index} onLoad={handleProductLoad} />
    ));

  return (
    <div className="mx-auto mt-8 grid max-w-[1280px] grid-cols-2 place-items-center gap-y-4 px-2 min-[481px]:px-4 min-[576px]:px-6 sm:w-[90%] sm:px-8 md:grid-cols-3 min-[931px]:max-w-[837px] min-[1200px]:max-w-[1024px] min-[1200px]:grid-cols-4 min-[1500px]:max-w-[1240px]">
      {mappedCategoryList}
    </div>
  );
};

export default CategoryProductList;
