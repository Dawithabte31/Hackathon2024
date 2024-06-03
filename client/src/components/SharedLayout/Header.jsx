import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import SodereLogo from "/sodere-logo.png";
import { CgMenuLeft } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { FaChevronCircleRight } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";
const Header = ({ setIsNavbar, setIsSearch, setIsCart }) => {
  const { categories, setCurrentCategory } = useContext(ProductContext);
  const { cartItemsList } = useContext(CartContext);

  const headerCatagories = categories.map((category, index) => (
    <li key={index}>
      <Link
        to="/categories"
        className="flex items-center justify-between hover:font-semibold"
        onClick={() => {
          setCurrentCategory(category);
        }}
      >
        {category}
        <FaChevronCircleRight className="mr-4" />
      </Link>
    </li>
  ));

  return (
    <>
      <div className="mx-auto flex w-[100%] max-w-[1640px] items-center justify-between px-2 py-3 md:justify-start md:px-4 md:py-4 min-[1440px]:py-6">
        <div className="flex items-center gap-x-2 md:hidden">
          <CgMenuLeft
            size={30}
            onClick={() => {
              setIsNavbar(true);
            }}
          />
          <IoSearch
            size={25}
            onClick={() => {
              setIsSearch(true);
            }}
          />
        </div>

        <h1 className="font-semibold uppercase">minister of revenue </h1>

        <ul className="] relative ml-8 hidden gap-x-4 text-lg before:absolute before:left-[-20px] before:top-1 before:h-[20px] before:w-[1px] before:bg-gray-500 md:flex">
          <li className="duration-900 relative font-bold text-gray-700 after:block after:h-[2px] after:w-[0%] after:bg-black after:transition-all after:ease-in-out hover:after:w-[90%] min-[1440px]:text-[1.4rem]">
            <Link to="/">Home</Link>
          </li>

          <li className="duration-900 relative font-bold text-gray-700 after:block after:h-[2px] after:w-[0%] after:bg-black after:transition-all after:ease-in-out hover:after:w-[90%] min-[1440px]:text-[1.4rem]">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="flex items-center gap-x-3 md:ml-auto">
          <div
            onClick={() => {
              setIsCart(true);
            }}
            className={`relative flex cursor-pointer gap-x-4 border border-gray-500 bg-[#2178ac] p-1 text-white first:rounded-md`}
          >
            <h1 className="">Cart</h1>
            <FiShoppingBag
              size={22}
              className="hover:scale-110 lg:size-[25px] min-[1440px]:size-[30px]"
            />
            <div
              className={`absolute bottom-3 left-2 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-black font-semibold text-white ${cartItemsList.length ? "" : "hidden"}`}
            >
              {cartItemsList && cartItemsList.length}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
