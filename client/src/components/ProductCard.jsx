import React, { useContext, useEffect, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";

// import SkeletonCard from "./SkeletonCard";
import { CartContext } from "./../contexts/CartContext";

import { NavLink } from "react-router-dom";
const ProductCard = ({ product, onLoad }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { addToCart } = useContext(CartContext);

  const [cartIsWished, setCartIsWished] = useState(false);

  const handleOnLoad = () => {
    setIsLoad((prev) => prev + 1);
    console.log(product.imgSrc);
    console.log(isLoad);
  };

  useEffect(() => {
    const image = new Image();
    image.src = product.imgSrc;
    image.onload = () => {
      setIsImageLoaded(true);
      onLoad();
    };

    return () => {
      image.onload = null;
    };
  }, [product.imgSrc]);

  return (
    <div className="group mx-auto grid w-[90%] cursor-pointer overflow-hidden border border-slate-200">
      <div className="bg-re-300 relative flex h-[60vw] max-h-[400px] items-center shadow-sm after:absolute after:top-0 after:h-[0%] after:w-[100%] after:bg-gray-950 after:opacity-75 after:transition-all after:duration-500 after:ease-in-out group-hover:after:h-[100%] md:h-[40vw]">
        <img
          src="images/default-product-image.png"
          alt=""
          className="[w-100%]"
          loading="lazy"
        />
        <div className="absolute top-1 z-10 ml-[-100px] flex w-[0%] flex-col gap-y-2 transition-all duration-500 ease-in-out group-hover:ml-[0px] group-hover:w-[70%]">
          <button
            className="text flex items-center gap-x-1 rounded-e-sm border border-none bg-[#5a9bc1] p-2 text-[12px] text-white outline-none lg:p-3"
            onClick={() => {
              addToCart(product);
            }}
          >
            <FiShoppingBag color="white" size={15} className="" />
            <p>Cart</p>
          </button>

          <NavLink to={`/${product.id}`}>
            <button className="text flex w-[100%] items-center gap-x-1 rounded-e-sm border border-none bg-slate-300 p-2 text-[12px] font-bold outline-none lg:p-3">
              <IoEyeOutline color="black" size={15} className="" />
              <p>View Item</p>
            </button>
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col items-center transition-all duration-300 ease-in-out">
        <div className="">
          <h1 className="mt-2 text-center font-semibold">
            {product.itemNameEnglish}
          </h1>
          <h1 className="mt-2 text-center font-semibold">
            {product.itemNameAmharic}
          </h1>
        </div>
        <div className="my-2 flex w-full justify-evenly font-extrabold">
          <p className="">${product.price}</p>
          <p className="flex items-center gap-x-2 text-[#2178ac]">
            <FaStar />
            {product.review}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
