import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SodereLogo from "/sodere-logo.png";
import { CgMenuLeft } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonOutline, IoSearch } from "react-icons/io5";
import { FaChevronCircleRight } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "@/contexts/CartContext";
import { WishListContext } from "@/contexts/WishListContext";
const Header = ({ setIsNavbar, setIsSearch, setIsCart }) => {
  const { categories, setCurrentCategory } = useContext(ProductContext);
  const { cartItemsList } = useContext(CartContext);
  const { wishlist } = useContext(WishListContext);

  const headerCatagories = categories.map((category, index) => (
    <li key={index}>
      <Link
        to="/categories"
        className="flex items-center justify-between hover:font-semibold "
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
      <div className="mx-auto flex w-[100%] max-w-[1640px] items-center justify-between   px-2  py-3 md:justify-start md:px-4 md:py-4 min-[1440px]:py-6">
        <div className="flex  items-center gap-x-2 md:hidden">
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

        <Link
          to="/"
          className="flex items-center justify-center gap-x-1 md:justify-start"
        >
          <img
            src={SodereLogo}
            alt="Sodere Logo"
            className="w-[100px] min-[425px]:w-[135px] lg:w-[150px]"
          />
        </Link>

        <ul className=" ] relative ml-8  hidden   gap-x-4 text-lg  before:absolute before:left-[-20px] before:top-1 before:h-[20px] before:w-[1px] before:bg-gray-500 md:flex">
          <li className="duration-900 relative font-bold text-gray-700 after:block  after:h-[2px] after:w-[0%]  after:bg-black after:transition-all after:ease-in-out hover:after:w-[90%] min-[1440px]:text-[1.4rem] ">
            <Link to="/">Home</Link>
          </li>

          <div className=" group relative  font-bold text-gray-700  after:block after:h-[2px] after:w-[0%] after:bg-black after:transition-all after:ease-in-out hover:after:w-[90%] min-[1440px]:text-[1.4rem] ">
            Categories
            <div className=" absolute left-[-200px] top-[-500px] z-10  grid w-[700px] grid-cols-3  gap-x-4  gap-y-2 rounded-lg bg-white px-3 py-4 font-normal shadow-sm shadow-slate-500 transition-all duration-500 ease-in-out *:text-[16px] group-hover:top-[50px] lg:w-[800px] lg:px-8 lg:pb-8 lg:pt-5 lg:*:text-[18px] ">
              {headerCatagories}
            </div>
          </div>

          <li
            className="duration-900 relative font-bold text-gray-700 after:block  after:h-[2px] after:w-[0%]  after:bg-black after:transition-all after:ease-in-out hover:after:w-[90%] min-[1440px]:text-[1.4rem] "
            to="/"
          >
            <Link>Shop</Link>
          </li>
          <li className="duration-900 relative font-bold text-gray-700 after:block  after:h-[2px] after:w-[0%]  after:bg-black after:transition-all after:ease-in-out hover:after:w-[90%] min-[1440px]:text-[1.4rem] ">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className="flex  items-center gap-x-3 md:ml-auto">
          <div className="">
            <IoSearch
              size={22}
              className=" hidden hover:scale-110  md:block lg:size-[25px] min-[1440px]:size-[30px]"
              onClick={() => {
                setIsSearch(true);
              }}
            />
          </div>
          <Link to="/profile">
            <div className="    relative after:absolute after:bottom-[-18px]  after:left-[-15px] after:hidden after:h-4 after:w-4 after:font-semibold  after:content-['account'] hover:after:lg:block">
              <IoPersonOutline
                size={22}
                className=" hover:scale-110 lg:size-[25px] min-[1440px]:size-[30px]"
              />
            </div>
          </Link>
          <Link to="/wishlist">
            <div className="  relative after:absolute after:bottom-[-18px] after:left-[-10px] after:hidden after:h-4 after:w-4 after:font-semibold  after:content-['wishlist'] hover:after:lg:block ">
              <FaRegHeart
                size={22}
                className=" hover:scale-110 lg:size-[25px] min-[1440px]:size-[30px]"
              />
              <div
                className={`absolute bottom-3 left-2 flex h-[25px]  w-[25px] items-center justify-center rounded-full bg-black font-semibold text-white ${wishlist.length ? "" : "hidden"} `}
              >
                {wishlist && wishlist.length}
              </div>
            </div>
          </Link>
          <div
            onClick={() => {
              setIsCart(true);
            }}
            className={` relative cursor-pointer  after:absolute after:bottom-[-18px] after:left-[1px] after:hidden after:h-4 after:w-4 after:cursor-pointer after:font-semibold  after:content-['cart'] hover:after:lg:block ${cartItemsList && cartItemsList.length === 0 ? "after:hidden" : ""} `}
          >
            <FiShoppingBag
              size={22}
              className="  hover:scale-110 lg:size-[25px] min-[1440px]:size-[30px]"
            />
            <div
              className={`absolute bottom-3 left-2 flex  h-[25px] w-[25px] items-center justify-center rounded-full bg-black font-semibold text-white ${cartItemsList.length ? "" : "hidden"}`}
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
