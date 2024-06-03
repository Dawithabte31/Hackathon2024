import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import ProductCard from "../ProductCard";

const NewArrivals = () => {
  const { productData } = useContext(ProductContext);
  const [loadedProducts, setLoadedProducts] = useState(0);

  const handleProductLoad = () => {
    setLoadedProducts((prevCount) => prevCount + 1);
  };

  const mappedCategoryList = productData
    .filter((item) => {
      return item.newArrival === true;
    })
    .map((product, index) => (
      <ProductCard product={product} key={index} onLoad={handleProductLoad} />
    ));

  return (
    <div className=" ">
      <h1 className="mb-8 text-center text-[28px] font-bold text-[#2178ac] min-[450px]:text-[30px] sm:text-[35px] lg:text-[38px] xl:text-[40px] 2xl:text-[45px]">
        Our New Arrivals
      </h1>
      <div className="mx-auto grid max-w-[1475px] grid-cols-2 sm:px-10 md:grid-cols-3 md:px-0 min-[992px]:grid-cols-4 min-[1200px]:grid-cols-5">
        {mappedCategoryList}
      </div>
    </div>
  );
};

export default NewArrivals;
