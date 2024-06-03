import { Link } from "react-router-dom";
import React from "react";
const BuyerCategory = () => {
  const categoriesList = [
    {
      image: "/images/beauty.svg",
      title: "Beauty",
    },
    {
      image: "/images/kitchen.svg",
      title: "Home & Kitchen",
    },
    {
      image: "/images/shoes.svg",
      title: "Shoes",
    },
    {
      image: "/images/electronics.svg",
      title: "Electronics",
    },
    {
      image: "/images/clothing.svg",
      title: "Clothing",
    },
    {
      image: "/images/jewelry.svg",
      title: "Jewelry",
    },
  ];

  const mappedCategoryList = categoriesList.map((item, index) => (
    <li
      className="group w-[90%] max-w-[130px]"
      key={index}
      onClick={() => {
        // setCurrentCategory(item.title);
      }}
    >
      <Link to="categories">
        <img
          src={item.image}
          className={`mx-auto mb-2 w-[60%] group-hover:scale-110 ${item.title === "Shoes" ? "mb-[0] md:mt-4" : " "} `}
          alt={item}
        />
        <p className="text-nowrap text-center group-hover:font-bold">
          {item.title}
        </p>
        <p></p>
      </Link>
    </li>
  ));
  return (
    <div className="mb-16 mt-[5rem]">
      <div className="mx-auto w-[90%] md:w-[720px] min-[992px]:w-[960px] min-[1200px]:w-[1170px]">
        <h1 className="text-center text-[25px] font-bold min-[450px]:text-[28px] sm:text-[30px] lg:text-[34px]">
          Shop By Category
        </h1>
        <ul className="mt-8 grid grid-cols-2 place-items-center gap-y-8 md:grid-cols-3 min-[992px]:grid-cols-6 lg:divide-x-2">
          {mappedCategoryList}
        </ul>
      </div>
    </div>
  );
};

export default BuyerCategory;
