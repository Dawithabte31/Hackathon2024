import React, { useState } from "react";

import BuyerRegistrationForm from "../components/Authentication/BuyerRegistrationForm";
import SellerRegisterForm from "../components/Authentication/SellerRegisterForm";

const RegisterPage = () => {
  const [registerType, setRegisterType] = useState("null");
  let requesterElement;
  switch (registerType) {
    case "seller":
      requesterElement = <SellerRegisterForm />;
      break;
    case "buyer":
      requesterElement = <BuyerRegistrationForm />;
      break;
    default:
      requesterElement = <div className=""></div>;
      break;
  }

  return (
    <div>
      <div className="">
        <h1 className="my-8 text-center text-4xl font-semibold">
          REGISTRATION PAGE{" "}
        </h1>

        <p className="my-5 text-center text-[26px]">
          Choose what do you want to do
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setRegisterType("buyer")}
            className="rounded-md bg-red-300 px-5 py-2"
          >
            I want to buy
          </button>
          <button
            onClick={() => setRegisterType("seller")}
            className="rounded-md bg-blue-400 px-5 py-2"
          >
            I want to Sell
          </button>
        </div>
        <div className="">{requesterElement}</div>
      </div>
    </div>
  );
};

export default RegisterPage;
