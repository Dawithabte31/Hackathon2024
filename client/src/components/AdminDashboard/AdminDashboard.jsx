import React, { useContext, useState } from "react";
import ManageTaxes from "./ManageTaxes";
import TransactionHistory from "./TransactionHistory";
import RegisteredUsers from "./RegisteredUsers";

const AdminDashboard = () => {
  //This help to display the content to the right based on some condition
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  //this helps to render the contents of those three based on the condition
  const renderContent = () => {
    switch (selectedMenuItem) {
      case "Users":
        return <RegisteredUsers />;
      case "History":
        return <TransactionHistory />;
      case "ManageTax":
        return <ManageTaxes />;
      default:
        return <RegisteredUsers />;
    }
  };

  return (
    //The admin dashboard
    <div className="flex h-screen">
      <div
        className={`w-[300px] bg-[#2c3e50] p-5 text-[#ecf0f1] sm:block lg:block`}
      >
        <div className="flex">
          <h2 className="my-4 flex h-auto w-auto justify-center font-extrabold">
            <span className="text-2xl">Admin Dashboard</span>
          </h2>
        </div>
        <ul className="list-none divide-y border-b p-0">
          <li
            className="cursor-pointer px-2.5 py-5 opacity-100 transition-all duration-300 hover:bg-white hover:text-black"
            onClick={() => setSelectedMenuItem("Users")}
          >
            Registered Users
          </li>
          <li
            className="cursor-pointer px-2.5 py-5 opacity-100 transition-all duration-300 hover:bg-white hover:text-black"
            onClick={() => setSelectedMenuItem("History")}
          >
            Transaction History
          </li>
          <li
            className="cursor-pointer px-2.5 py-5 opacity-100 transition-all duration-300 hover:bg-white hover:text-black"
            onClick={() => setSelectedMenuItem("ManageTax")}
          >
            Manage Tax
          </li>
        </ul>
        <div
          className="mt-[105%] flex w-fit cursor-pointer gap-x-5 rounded-md bg-white px-5 py-2 text-black"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </div>
      </div>
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#ecf0f1" }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
