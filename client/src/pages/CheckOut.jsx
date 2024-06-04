import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

// this is where checkout page renders, and texes are calculted theos taxes are
// VAT, TOT, Excise, SUR, Customs

export const CheckOut = () => {
  const [accordion, setAccordion] = useState(-1);
  const arr = [1, 2, 3, 4, 5];
  const mappedAccordion = arr.map((item, index) => (
    <div className="px-6" key={index}>
      <div className="flex justify-between py-3">
        <h1 className="font-bold">Firewall </h1>
        <div className="flex gap-x-3">
          <h2 className="">Total Price</h2>
          <h2 className="">28,038,725</h2>
        </div>
        <div
          className="flex cursor-pointer items-center gap-x-2"
          onClick={() => {
            setAccordion(accordion === -1 ? index : -1);
            {
              `This is a  dropdown list`;
            }
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
              3,100,000 * 5 = <span className="font-semibold"> 15,500,00 </span>
            </p>
          </div>
          <div className="flex w-full justify-between gap-x-16 py-2">
            <p className="font-semibold">Custom Tax </p>
            <p className="">
              (15,500,000 )*15% ={" "}
              <span className="font-semibold"> 4,650,000 </span>
            </p>
          </div>
          <div className="flex w-full justify-between gap-x-16 py-2">
            <p className="font-semibold">Excise Tax </p>
            <p className="">
              (15,500,000 + 4,650,000)*10%={" "}
              <span className="font-semibold"> 2,015,000 </span>
            </p>
          </div>
          <div className="flex w-full justify-between gap-x-16 py-2">
            <p className="font-semibold">VAT </p>
            <p className="">
              (15,500,000 + 4,650,000+2,015,000)*10%={" "}
              <span className="font-semibold"> 3,324,750 </span>
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
