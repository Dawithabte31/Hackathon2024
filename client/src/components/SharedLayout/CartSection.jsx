import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { IoCloseSharp, IoCartOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline, IoMdAdd, IoMdRemove } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
const CartSection = ({ isCart, setIsCart }) => {
  const {
    cartItemsList,
    removeCartItem,
    increaseItemAmount,
    decreaseItemAmount,
    subtotal,
    emptyCart,
  } = useContext(CartContext);

  const [shippingCost, setShippingCost] = useState(0);

  useEffect(() => {
    const shipping = (subtotal * 8) / 100;
    setShippingCost(shipping);
  }, [subtotal]);

  const cartRef = useRef(null);

  const mappedCartList =
    cartItemsList &&
    cartItemsList.map((item, index) => (
      <div className="grid grid-cols-3" key={index}>
        <div className="h-[80px] w-[78px] bg-white">
          <img src={item.imgSrc} className="h-[100%] w-[100%]" />
        </div>
        <div className="col-span-2">
          <div className="flex items-center justify-between">
            <h1 className="text-sm font-bold">{item.itemNameEnglish}</h1>
            <IoIosCloseCircleOutline
              className="shrink-0 cursor-pointer hover:scale-110"
              size={25}
              onClick={() => {
                removeCartItem(item.id);
              }}
            />
          </div>
          <p className="translate-y-[-4px] text-gray-500">{item.category[0]}</p>
          <div className="mt-3 flex justify-between">
            <p className="font-semibold">{item.price} birr </p>
            <div className="flex items-center gap-x-2 border border-gray-400">
              <button
                className="p-2"
                onClick={() => {
                  decreaseItemAmount(item.id);
                }}
              >
                <IoMdRemove className="cursor-pointer hover:scale-125" />
              </button>
              <h1 className="">{item.cartAmount}</h1>
              <button
                className="p-[9px]"
                onClick={() => {
                  increaseItemAmount(item.id);
                }}
              >
                <IoMdAdd className="cursor-pointer hover:scale-125" />
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  return (
    <div
      ref={cartRef}
      className={`fixed right-0 top-0 z-[999] h-[100vh] max-h-[100vh] w-[101%] max-w-[470px] translate-x-1 rounded-b-sm border border-gray-300 bg-white transition-all duration-300 ease-in-out ${!isCart ? "hidden" : ""}`}
    >
      <div className="">
        <div
          className="flex items-center justify-between bg-[#f5f5f5] px-5"
          onClick={() => {
            setIsCart(false);
          }}
        >
          <h1 className="py-2 text-[23px] font-semibold">Shopping Cart</h1>
          <IoCloseSharp size={25} className="cursor-pointer hover:scale-110" />
        </div>
        <div
          className={`flex items-center justify-evenly ${mappedCartList.length < 1 ? "hidden" : ""}`}
        >
          <h1 className={`mb-8 mt-4 text-center text-[25px]`}>
            {cartItemsList && cartItemsList.length} Item
            {`${cartItemsList && cartItemsList.length > 1 ? "s" : ""}`} in The
            Cart
          </h1>
          <RiDeleteBin6Line
            size={30}
            className="translate-y-[-3px] hover:scale-110"
            onClick={() => {
              emptyCart();
            }}
          />
        </div>
      </div>
      <div className="max-h-[65vh] w-[100%] overflow-y-scroll pb-4">
        {mappedCartList && mappedCartList.length < 1 ? (
          <div className="mt-48 flex h-[100%] flex-col items-center justify-center">
            <IoCartOutline
              size={50}
              className="cursor-pointer hover:scale-110"
            />
            <h1 className="my-3 text-[19px]">No items Added to your cart</h1>
            <button
              className="mt-3 rounded-sm bg-black px-6 py-3 font-semibold text-white"
              onClick={() => {
                setIsCart(false);
              }}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-10 pl-2 pr-4 min-[425px]:pl-4 min-[425px]:pr-8">
            {mappedCartList}
          </div>
        )}
      </div>
      <div
        className={`absolute bottom-0 w-[100%] space-y-2 overscroll-contain border-t border-t-gray-400 bg-[#f5f5f5] px-6 py-4 ${mappedCartList.length < 1 ? "hidden" : ""}`}
      >
        <div className={`flex justify-between text-[1.2rem] font-semibold`}>
          <h1 className="text-sm">Shipping </h1>
          <h1 className=""> {shippingCost.toFixed(2)}</h1>
        </div>
        <div className={`flex justify-between text-[1.2rem] font-semibold`}>
          <h1 className="text-sm">Subtotal </h1>
          <h1 className=""> {subtotal.toFixed(2)}</h1>
        </div>
        <Link
          to="/checkout"
          onClick={() => {
            setIsCart(false);
          }}
        >
          <button className="w-[95%] rounded-md bg-[#6e6e6e] py-1 text-[1.2rem] font-semibold text-white">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartSection;
