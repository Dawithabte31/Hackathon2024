import React, { useContext, useState } from "react";
// import { Context } from "../../context/Context";
// import MembersTable from "./member/MembersTable";
// import EventsTable from "./Event/EventsTable";
// import ProjectsTable from "./project/ProjectsTable";
// import RegistrationTable from "./registration/RegistrationTable";
// import ServicesTable from "./service/ServicesTable";
// import MessagesTable from "./message/MessagesTable";
// import axios from "axios";
// import Registered from "./registeredusers/Registered";

const AdminDashboard = () => {
  //   const { dispatch } = useContext(Context);
  //   const handleLogout = (e) => {
  //     e.preventDefault();
  //     try {
  //       axios.post(`${import.meta.env.VITE_BASE_URL}api/logout`);
  //       dispatch({ type: "LogOut" });
  //       localStorage.removeItem("token");
  //       window.location.href = "/login";
  //     } catch (error) {
  //       console.error("Error logging out:", error);
  //     }
  //   };

  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const renderContent = () => {
    switch (selectedMenuItem) {
      case "Users":
        return <RegisteredUsers />;
      case "History":
        return <TransactionHistory />;
      case "ManageTax":
        return <ManageTax />;
      default:
        return null;
    }
  };
  const [active, seActive] = useState(false);
  const handlclickopen = () => {
    seActive(true);
  };
  const handlclickclose = () => {
    seActive(false);
  };
  return (
    <div className="flex h-screen">
      <div
        className={`${active ? "" : "hidden"} w-[300px] bg-[#2c3e50] p-5 text-[#ecf0f1] sm:block lg:block`}
      >
        <div className="flex">
          <h2 className="my-4 flex h-auto w-auto justify-center font-extrabold">
            <span className="text-2xl">Admin Dashboard</span>
          </h2>
        </div>
        <ul className="list-none divide-y border-b p-0">
          <li
            className="cursor-pointer px-2.5 py-5 opacity-100 transition-all duration-300 hover:bg-white hover:text-black"
            onClick={() => setSelectedMenuItem("Members")}
          >
            Registered Users
          </li>
          <li
            className="cursor-pointer px-2.5 py-5 opacity-100 transition-all duration-300 hover:bg-white hover:text-black"
            onClick={() => setSelectedMenuItem("MembersList")}
          >
            Transaction History
          </li>
          <li
            className="cursor-pointer px-2.5 py-5 opacity-100 transition-all duration-300 hover:bg-white hover:text-black"
            onClick={() => setSelectedMenuItem("Events")}
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
      <div
        style={{ flex: 1, padding: "20px", backgroundColor: "#ecf0f1" }}
      ></div>
    </div>
  );
};

export default AdminDashboard;
