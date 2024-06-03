import React from "react";

import BuyerRegistrationForm from "../components/Authentication/BuyerRegistrationForm";
import SellerRegisterForm from "../components/Authentication/SellerRegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <BuyerRegistrationForm />
      <SellerRegisterForm />
    </div>
  );
};

export default RegisterPage;
