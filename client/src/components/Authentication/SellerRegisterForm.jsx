import React from "react";

function SellerRegisterForm() {
  return (
    // Registration form for Seller
    <div className="mt-12">
      <form className="mx-auto flex w-[500px] flex-col gap-y-4">
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="company"
            id="company"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="company"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Company Name
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="number"
            name="TIN_number"
            id="TIN_number"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="TIN_number"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          >
            TIN Number
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="business_type"
            id="business_type"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="business_type"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Business type
          </label>
        </div>
        <div className="group relative z-0 mb-5 flex w-full border-b-2 text-gray-900">
          <select name="" id="" className="w-full text-gray-900 outline-none">
            <option value="" className="text-gray-900">
              Select Tax Type
            </option>
            <option value="" className="text-gray-900">
              VAT
            </option>
            <option value="" className="text-gray-900">
              TOT
            </option>
            <option value="" className="text-gray-900">
              Excise
            </option>
            <option value="" className="text-gray-900">
              Customs TAX
            </option>
            <option value="" className="text-gray-900">
              SUR
            </option>
          </select>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="number"
            name="capital"
            id="capital"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="capital"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          >
            Capital
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          >
            Email address
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="floating_phone"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Phone number
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="Address"
            id="Address"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="Address"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Address
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Password
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="floating_repeat_password"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Confirm password
          </label>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-lg font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default SellerRegisterForm;
