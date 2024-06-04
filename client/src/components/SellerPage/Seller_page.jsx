import React, { useState } from "react";
import AddItems from "./AddItems";
import Transaction from "./Transaction";
import ItemsLeft from "./ItemsLeft";

function Seller_page() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
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
      <h1 className="my-8 text-center text-[30px] font-semibold">
        Hello User, Welcome to your Dashboard
      </h1>
      <div className="flex h-[80vh] justify-center">
        <div className="flex h-full w-1/6 justify-center border-r-2">
          <ul className="">
            <li
              onClick={() => setSelectedMenuItem("addItems")}
              className={`mb-6 h-8 w-[210px] cursor-pointer border-b-2`}
            >
              Add items
            </li>
            <li
              onClick={() => setSelectedMenuItem("transactions")}
              className="mb-6 h-8 w-[210px] cursor-pointer border-b-2"
            >
              Transactions
            </li>
            <li
              onClick={() => setSelectedMenuItem("itemsLeft")}
              className="mb-6 h-8 w-[210px] cursor-pointer border-b-2"
            >
              items left
            </li>
          </ul>
        </div>
        <div className="my-auto h-[80vh] w-5/6">{renderContent()}</div>
      </div>
    </div>
  );
}

export default Seller_page;
