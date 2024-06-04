import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="mb-10 flex h-[80vh] items-center justify-center">
      <div className="grid items-center gap-x-3 px-4 md:grid-cols-2 min-[1440px]:gap-x-16">
        <div className="z-[-1]">
          <img
            src="images/astronaut_error.png "
            alt=""
            className="mx-auto max-w-[340px] translate-x-4 md:max-w-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <h1 className="font-MOSKOMAPPA text-[80px] font-extrabold text-[#2178ac] xl:text-[120px]">
              Oops!
            </h1>
            <p className="mb-2 mt-4">looks like somethings's missing</p>
            <p className="text-gray-500">
              You may have mistyped the address or this page may have moved
            </p>
          </div>
          <Link to="/">
            <button
              type="button"
              class="mx-auto mt-8 h-[50px] w-[200px] items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[#2178ac] stroke-white px-6 py-2 align-middle text-sm font-semibold text-white transition-all duration-300 ease-in-out"
            >
              <span> Go to Home Page</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
