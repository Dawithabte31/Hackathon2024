import React from "react";
import { Link } from "react-router-dom";

//simple landing page that will help the user to see what they can do
const LandingPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="">
        <h1 className="text-center text-5xl font-bold uppercase text-yellow-400">
          Ethiopian Revenue Minster
        </h1>
        <h1 className="text-center text-4xl font-bold uppercase">
          National Tax Management
        </h1>
        <p className="mx-auto mt-8 max-w-[700px] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, ipsum.
          Reprehenderit explicabo voluptates dolor temporibus voluptas hic
          deserunt labore ipsam. Neque minima temporibus sapiente sint magni
          recusandae impedit, non esse. Tempore qui nemo repellendus amet atque
          saepe, modi provident, eveniet sit, non aliquid libero. Fugit, unde
          repellendus reprehender
        </p>
      </div>
      <div className="mt-10 flex gap-x-8">
        <Link to="login">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-16 py-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
          >
            Login
          </button>
        </Link>

        <Link to="register">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-700 px-16 py-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
