import React from "react";
import { useState } from "react";
import axios from "axios";

const BuyerRegistrationForm = () => {
   const [fullname,setFullname]= useState("");
   const [address,setAddress]= useState("");
   const [phone,setPhone]=useState("");
   const [email,setEmail]=useState("");
   const [username,setUsername]=useState("");
   const [password,setPassword]=useState("");


   const handleAdd = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}api/registers/create`, {
        fullname: username,
        address: address,
        phone: phone,
        email: email,
        username: username,
        password: password,
       
      
        
      });

  
      console.log("done!");
    } catch (error) {
      console.log(error);
    }
  };
















  return (
    <div className="mx-auto mt-8 max-w-lg">
      <h2 className="text- mb-5 text-3xl font-semibold">
        Buyers Registration Form{" "}
      </h2>
      <form className="mx-auto max-w-lg" onSubmit={handleAdd}>
        <div className="grid md:gap-6">
          <div className="group relative z-0 mb-5 w-full">
            <input
              onChange={(e) => setFullname(e.target.value)}
              type="text"
              name="buyer_first_name"
              id="buyer_first_name"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="buyer_first_name"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
            >
              Full name
            </label>
          </div>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
                                    onChange={(e) => setEmail(e.target.value)}


            type="email"
            name="buyer_email"
            id="buyer_email"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            htmlFor="buyer_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          >
            Email
          </label>
        </div>

        <div className="group relative z-0 mb-5 w-full">
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            name="buyer_phone"
            id="buyer_phone"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            htmlFor="buyer_phone"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Phone number
          </label>
        </div>
        <div className="grid md:gap-6">
          <div className="group relative z-0 mb-5 w-full">
            <input
              
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              name="buyer_address"
              id="buyer_address"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="buyer_company"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
            >
              Address
            </label>
          </div>
        </div>
        <div className="grid md:gap-6">
          <div className="group relative z-0 mb-5 w-full">
            <input
                          onChange={(e) => setUsername(e.target.value)}

              type="text"
              name="buyer_company"
              id="buyer_company"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder=" "
              required
            />
            <label
              htmlFor="buyer_company"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
            >
              Username
            </label>
          </div>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
                        onChange={(e) => setPassword(e.target.value)}

            type="password"
            name="buyer_password"
            id="buyer_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            htmlFor="buyer_password"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Password
          </label>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BuyerRegistrationForm;
