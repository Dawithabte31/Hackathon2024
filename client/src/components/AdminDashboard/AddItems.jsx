import React, { useRef } from "react";

function AddItems({ isOpen, setIsOpen, taxes }) {
  //This is to make a reference of the the whole division
  const modalRef = useRef(null);
  //if the user clicks outside the div then close the modal
  const handleClose = (e) => {
    if (modalRef.current === e.target) {
      setIsOpen(false);
    }
  };
  //the following code will make the form disappear after it it is sebmitted
  function handleSubmit(e) {
    e.preventDefault();
    setIsOpen(false);
  }

  function handleChange() {}

  return (
    // add the product name and the corresponding taxes
    <div
      ref={modalRef}
      onClick={handleClose}
      className="mx-auto mt-12 w-[400px]"
    >
      <form class="mx-auto w-[400px]">
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="text"
            name="product_type"
            id="product_type"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            onChange={handleChange}
            required
          />
          <label
            for="product_type"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
          >
            Product type
          </label>
        </div>

        <div class="group relative z-0 mb-5 w-full">
          <input
            type="number"
            name="TAX"
            id="TAX"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            onChange={handleChange}
            required
          />
          <label
            for="TAX"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            TAX
          </label>
        </div>

        <div class="group relative z-0 mb-5 w-full">
          <input
            type="number"
            name="TOT"
            id="TOT"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            onChange={handleChange}
            required
          />
          <label
            for="TOT"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            TOT
          </label>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="number"
            name="customs"
            id="customs"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            onChange={handleChange}
            required
          />
          <label
            for="customs"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Customs
          </label>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="number"
            name="excise"
            id="excise"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            onChange={handleChange}
            required
          />
          <label
            for="excise"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Excise
          </label>
        </div>
        <div class="group relative z-0 mb-5 w-full">
          <input
            type="number"
            name="sur"
            id="sur"
            class="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            onChange={handleChange}
            required
          />
          <label
            for="sur"
            class="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            Sur
          </label>
        </div>
        <button
          type="submit"
          class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddItems;
