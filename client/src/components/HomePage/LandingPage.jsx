import React from "react";
import { Link } from "react-router-dom";
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
          The a platform where seller and buyer get together in easy and
          convenient way , calculate different types of taxes in one stop{" "}
        </p>
      </div>
      <div className="mt-10 flex gap-x-8">
        <Link to="login">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-16 py-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
          >
            Login
          </button>
        </Link>

        <Link to="register">
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-16 py-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto"
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
