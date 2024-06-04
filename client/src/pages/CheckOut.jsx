import React, { useContext, useEffect, useRef, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { CartContext } from "../contexts/CartContext";

export const CheckOut = () => {
  const [accordion, setAccordion] = useState(-1);
  const { subtotal, netBalance, cartItemsList } = useContext(CartContext);
  const arr = [1, 2, 3, 4, 5];
  const mappedAccordion = cartItemsList.map((item, index) => (
    <div className="px-6" key={index}>
      <div className="flex justify-between py-3">
        <h1 className="font-bold">{item.product_name} </h1>
        <div className="flex gap-x-3">
          <h2 className="">Total Price</h2>
          <h2 className="">{item.product_price}</h2>
        </div>
        <div
          className="flex cursor-pointer items-center gap-x-2"
          onClick={() => {
            setAccordion(accordion === -1 ? index : -1);
          }}
        >
          {accordion === index ? (
            <p className="text-sm">show less</p>
          ) : (
            <p className="text-sm">show more</p>
          )}
          {accordion === index ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>
      {index === accordion && (
        <div className="mb-8 mt-2 divide-y-2">
          <div className="flex w-full justify-between gap-x-16 py-2">
            <p className="font-semibold">Single Price * Amount</p>
            <p className="">
              {item.product_price} * {item.cartamount} =
              <span className="font-semibold"> {netBalance}</span>
            </p>
          </div>
          <div className="flex w-full justify-between gap-x-16 py-2">
            <p className="font-semibold">Custom Tax </p>
            <p className="">
              {netBalance}*{item.customs_tax} =
              <span className="font-semibold">
                {(netBalance * item.customs_tax) / 100}
              </span>
            </p>
          </div>
          <div className="flex w-full justify-between gap-x-16 py-2">
            <p className="font-semibold">Excise Tax </p>
            <p className="">
              ({netBalance} +
              {(item.product_price * item.cartamount * item.customs_tax) / 100}
              )*{item.exicise}=
              <span className="font-semibold">
                {((item.product_price * item.cartamount +
                  (item.product_price * item.cartamount * item.customs_tax) /
                    100) *
                  item.exicise) /
                  100}
              </span>
            </p>
          </div>
          <div className="flex w-full justify-between gap-x-16 py-2">
            <p className="font-semibold">VAT </p>
            <p className="">
              ({netBalance} +{(netBalance * item.customs_tax) / 100}
              {(item.product_price * item.cartamount +
                (item.product_price * item.cartamount * item.customs_tax) /
                  100) *
                item.exicise}
              )*10%=
              <span className="font-semibold">
                {" "}
                {((item.product_price * item.cartamount +
                  (netBalance * item.customs_tax) / 100 +
                  ((item.product_price * item.cartamount +
                    (item.product_price * item.cartamount * item.customs_tax) /
                      100) *
                    item.exicise) /
                    100) *
                  item.vat) /
                  100}{" "}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  ));
  return (
    <div>
      <h1 className="mt-8 text-center text-4xl font-bold uppercase">
        Check Out Page
      </h1>
      <div className="mt-8">
        <div className="px-2` mx-auto max-w-2xl divide-y-2 divide-black rounded-lg border border-gray-400 py-4">
          {mappedAccordion}
        </div>
      </div>
    </div>
  );
};
