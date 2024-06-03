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
  const { productData, currentCategory } = useContext(ProductContext);
  const [sortedList, setSortedList] = useState(categoryMainList);
  const [loadedProducts, setLoadedProducts] = useState(0);

  const handleProductLoad = () => {
    setLoadedProducts((prevCount) => prevCount + 1);
  };

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;

  useEffect(() => {
    if (currentCategory != "ALL") {
      const filteredList = productData.filter((val) =>
        val.category.includes(currentCategory),
      );

      setCategoryMainList(filteredList);
    } else {
      setCategoryMainList(productData);
    }
  }, [currentCategory, productData]);

  useEffect(() => {
    setSortedList(categoryMainList);
  }, [categoryMainList]);

  useEffect(() => {
    switch (sortOptionValue) {
      case "default":
        {
          setSortedList(categoryMainList);
        }
        break;
      case "AZ":
        {
          const sortedCategory = [...categoryMainList].sort((a, b) =>
            a.itemNameEnglish.localeCompare(b.itemNameEnglish),
          );
          setSortedList(sortedCategory);
        }
        break;
      case "ZA":
        {
          const sortedCategory = [...categoryMainList].sort((a, b) =>
            b.itemNameEnglish.localeCompare(a.itemNameEnglish),
          );
          setSortedList(sortedCategory);
        }
        break;
      case "toHigh":
        {
          const sortedCategory = [...categoryMainList].sort(
            (a, b) => a.price - b.price,
          );
          setSortedList(sortedCategory);
        }
        break;
      case "toLow":
        {
          const sortedCategory = [...categoryMainList].sort(
            (a, b) => b.price - a.price,
          );
          setSortedList(sortedCategory);
        }
        break;
      default:
        setSortedList(categoryMainList);
    }
  }, [sortOptionValue, currentCategory]);

  const mappedCategoryList = sortedList
    .slice(firstPostIndex, lastPostIndex)
    .map((product, index) => (
      <ProductCard product={product} key={index} onLoad={handleProductLoad} />
    ));

  return (
    <div className="mx-auto mt-8 grid max-w-[1280px] grid-cols-2 place-items-center gap-y-4 px-2 min-[481px]:px-4 min-[576px]:px-6 sm:w-[90%] sm:px-8 md:grid-cols-3 min-[931px]:max-w-[837px] min-[1200px]:max-w-[1024px] min-[1200px]:grid-cols-4 min-[1500px]:max-w-[1240px]">
      {mappedCategoryList}
    </div>
  );
};

export default CategoryProductList;
