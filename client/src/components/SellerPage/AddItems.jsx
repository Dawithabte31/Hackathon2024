import axios from "axios";
import React from "react";
import { Contextseller } from "./../../sellercontext/Contextseller";
import { useState, useEffect } from "react";
function AddItems() {
 
  // seller add items to the system using the below form
 
  const { dispatch,seller } = useContext(Contextseller);
  const [producttax, setProducttax] = useState([]);
  const [product_name, setProduct_name] = useState([]);
  const [product_type, setProduct_type] = useState([]);
  const [amount, setAmount] = useState([]);
  const [product_price, setProduct_price] = useState([]);
  const [product_desc, setProduct_desc] = useState([]);
  const [turnover_tax, setTurnover_tax] = useState([]);
  const [sur, setSur] = useState([]);
  const [customs_tax, setCustoms_tax] = useState([]);
  const [exicise, setExicise] = useState([]);
  const [vat, setVat] = useState([]);
  const [seller_id, setSeller_id] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/producttax/allproductstax`,
      );
      setProducttax(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(seller.username)

  const handleAdd = async (e) => {
    e.preventDefault();

    // producttax.find((item)=> item.product_type===product.product_type).map((item)(
    //   {...product,tax1:item.tax1,tax2:item.tax2}
    // ))
    console.log(producttax);

    const foundedItem = producttax.find((item) => {
      return item.product_type === product_type;
    });
    console.log(foundedItem);

    setTurnover_tax(foundedItem.setTurnover_tax);
    setSur(foundedItem.sur);
    setExicise(foundedItem.exicise);
    setTurnover_tax(foundedItem.turnover_tax);
    setCustoms_tax(foundedItem.customs_tax);
    setVat(foundedItem.vat);
    try {
      await axios.post(`http://localhost:3000/api/products/create`, {
        product_name: product_name,
        product_type: product_type,
        amount: amount,
        product_price: product_price,
        product_desc: product_desc,
        turnover_tax: turnover_tax,
        sur: sur,
        customs_tax: customs_tax,
        exicise: exicise,
        vat: vat,
        seller_id: "seller1",
      });

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
            onChange={(e) => setProduct_name(e.target.value)}
            id="product_name"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            htmlFor="product_name"
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
            onChange={(e) => setAmount(e.target.value)}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            htmlFor="product_amount"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            product amount
          </label>
        </div>
        <div className="group relative z-0 mb-5 w-full">
          <input
            onChange={(e) => setProduct_price(e.target.value)}
            type="number"
            name="product_price"
            id="product_price"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            htmlFor="product_amount"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
          >
            product price
          </label>
        </div>

        <div className="group relative z-0 mb-5 w-full">
          <input
            onChange={(e) => setProduct_desc(e.target.value)}
            type="text"
            name="product_description"
            id="product_description"
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-xl text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_company"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-xl text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
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
              setProduct_type(e.target.value);
            }}
            // select the product type to determine the tax
          >
            <option value="login">Select Product Type</option>
            <option value="car">Car</option>
            <option value="household">House Hold </option>
            <option value="alcoholic">Alcoholic Drink </option>
            <option value="cosmotics">Cosmotics Goods </option>
            <option value="essential">Essential Goods </option>
            <option value="service">Services </option>
            <option value="service">Services </option>
          </select>
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
