import React from "react";

function AddItems() {

  const handleAdd = async () => {
    try {
      await axios.post(`http://localhost:3000/api/products/create`, {
        product_name: user.user.username,
        amount: amount,
        product_price: product_price,
        product_desc: product_desc,
        turnover_tax: turnover_tax,
        sur: departement,
        customs_tax: skill,
        exicise: why,
        vat:vat,
        seller_id: seller.username

      });

      if (user.user.role === 0) {
        window.location.href = "/user";
      } else {
        window.location.href = "/admin";
      }
      console.log("done!");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <h2 className="mb-4 text-center text-2xl">
        Here are your recent transactions
      </h2>
      <form className="mx-8 max-w-md" onSubmit={handleAdd}>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="product_name"
            id="product_name"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="product_name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Product Name
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="number"
            name="product_amount"
            id="product_amount"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="product_amount"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            product amount
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            type="number"
            name="product_amount"
            id="product_amount"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="product_amount"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            product price
          </label>
        </div>

        <div className="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="product_description"
            id="product_description"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            for="floating_company"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Product Descriptions
          </label>
        </div>
        <button
          type="submit"
          className="w-[200px] rounded-lg bg-blue-700 px-20 py-2.5 text-center text-xl font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddItems;
