import React, { useState } from "react";
import AddItems from "./AddItems";
import Transaction from "./Transaction";
import ItemsLeft from "./ItemsLeft";

function Seller_page() {
  //This help to display the content to the right based on some condition
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  //this helps to render the contents of those three based on the condition
  const renderContent = () => {
    switch (selectedMenuItem) {
      case "addItems":
        return <AddItems />;
      case "transactions":
        return <Transaction />;
      case "itemsLeft":
        return <ItemsLeft />;
      default:
        return <AddItems />;
    }
  };

  return (
    <div>
      {/* this one will display the left side of the component which act like a sidebar  */}
      <div className="flex h-screen -translate-x-4 justify-center border-t-2 border-gray-600">
        <div className="h-[90vh] w-[300px] bg-[#2c3e50] p-5 text-[#ecf0f1]">
          <div className="flex">
            <h2 className="my-4 flex h-auto w-auto justify-center font-extrabold">
              <span className="text-2xl">Seller Dashboard</span>
            </h2>
          </div>
          <ul className="list-none divide-y border-b p-0">
            <li
              onClick={() => setSelectedMenuItem("addItems")}
              className={`cursor-pointer px-2.5 py-5 opacity-100 transition-all duration-300 hover:bg-white hover:text-black`}
            >
              Add items
            </li>
            <li
              onClick={() => setSelectedMenuItem("transactions")}
              className="cursor-pointer px-2.5 py-5 opacity-100 transition-all duration-300 hover:bg-white hover:text-black"
            >
              Transactions
            </li>
            <li
              onClick={() => setSelectedMenuItem("itemsLeft")}
              className="cursor-pointer px-2.5 py-5 opacity-100 transition-all duration-300 hover:bg-white hover:text-black"
            >
              Items left
            </li>
          </ul>
        </div>
        {/* and this one will be rendered in the right side of the sidebar  */}
        <div className="mt-8 h-[80vh] w-5/6">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Seller_page;
