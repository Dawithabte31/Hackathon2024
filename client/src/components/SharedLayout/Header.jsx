import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { ProductContext } from "../../contexts/ProductContext";
import { CartContext } from "../../contexts/CartContext";
const Header = ({ setIsNavbar, setIsSearch, setIsCart }) => {
  const { cartItemsList } = useContext(CartContext);

  //  the ui for header
  return (
    <>
      <div className="mx-auto flex w-[100%] max-w-[1640px] items-center justify-between px-2 py-3 md:justify-start md:px-4 md:py-4 min-[1440px]:py-6">
        <h1 className="font-extrabold uppercase text-yellow-400">
          minister of revenue{" "}
        </h1>

        <ul className="] relative ml-8 hidden gap-x-4 text-lg before:absolute before:left-[-20px] before:top-1 before:h-[20px] before:w-[1px] before:bg-gray-500 md:flex">
          <li className="duration-900 relative font-bold text-gray-700 after:block after:h-[2px] after:w-[0%] after:bg-black after:transition-all after:ease-in-out hover:after:w-[90%] min-[1440px]:text-[1.4rem]">
            <Link to="/">Home</Link>
          </li>
        </ul>
        <div className="flex items-center gap-x-3 md:ml-auto">
          <div
            // toggle to show and hide the cart
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
