import React, { useState } from "react";

function Admin_page() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const renderContent = () => {
    switch (selectedMenuItem) {
      case "mangeTax":
        return <h1>Hello</h1>;
      case "manageTransactions":
        return <h1>Halas</h1>;
      case "manageUsers":
        return <h1>Holla</h1>;
      default:
        return <h1>Hellsoe</h1>;
    }
  };

  return (
    <div className="flex">
      <div className="flex h-full w-1/6 justify-center border-r-2">
        <ul className="">
          <li
            onClick={() => setSelectedMenuItem("mangeTax")}
            className={`mb-6 h-8 w-[210px] cursor-pointer border-b-2`}
          >
            Manage Tax
          </li>
          <li
            onClick={() => setSelectedMenuItem("manageTransactions")}
            className="mb-6 h-8 w-[210px] cursor-pointer border-b-2"
          >
            Manage Transactions
          </li>
          <li
            onClick={() => setSelectedMenuItem("manageUsers")}
            className="mb-6 h-8 w-[210px] cursor-pointer border-b-2"
          >
            Manage Users
          </li>
        </ul>
      </div>
      <div className="my-auto h-[80vh] w-5/6">{renderContent()}</div>
    </div>
  );
}

export default Admin_page;
