import React from "react";

function AddItems() {
  // seller add items to the system using the below form
  return (
    <div>
      <h2 className="mb-4 text-center text-2xl">
        Here are your recent transactions
      </h2>
      <form class="mx-8 max-w-md">
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="product_name"
            id="product_name"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="product_name"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Product Name
          </label>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="number"
            name="product_amount"
            id="product_amount"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="product_amount"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            product amount
          </label>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="number"
            name="product_amount"
            id="product_amount"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="product_amount"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            product price
          </label>
        </div>

        <div class="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="product_description"
            id="product_description"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="floating_company"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Product Descriptions
          </label>
        </div>
        <div className="order-0 mb-5 flex items-center justify-between gap-x-4 border-b-2 border-gray-300 text-black">
          <label htmlFor="countries" className="block text-xl text-gray-500">
            Product Type
          </label>

          <select
            name="auth"
            id="auth"
            className="bg w-[200px] rounded-sm p-1 outline-none"
            onChange={(e) => {
              setUserType(e.target.value);
            }}
            // select the product type to determine the tax
          >
            <option value="login">Select Product Type</option>
            <option value="login">Car</option>
            <option value="seller">House Hold </option>
            <option value="buyer">Food </option>
          </select>
        </div>
        <button
          type="submit"
          class="w-[200px] rounded-lg bg-blue-700 px-20 py-2.5 text-center text-xl font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddItems;
