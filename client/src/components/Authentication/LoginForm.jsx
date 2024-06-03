import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { sellercontext } from "../context/sellercontext";

const LoginForm = () => {
  const [userType, setUserType] = useState("admin");
  console.log(userType);
  const navigate = useNavigate();
  const sellerApi = "http://localhost:3000/api/loginseller";
  const userApi = "http://localhost:3000/api/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:3000/api/loginseller", {
        email,
        password,
      });
      // dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && window.location.replace(`/${userType}`);
      setEmail("");
      setPassword("");
    } catch (error) {
      // setError(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-16 text-3xl font-bold text-blue-500">Login</h1>
      <form
        className="mx-auto max-w-sm"
        // onSubmit={() => {
        //   navigate(`/${userType}`);
        // }}
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-[380px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="block w-[380px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-5 flex items-center gap-x-4 text-black">
          <label htmlFor="countries" className="block">
            User Type :
          </label>

          <select
            name="auth"
            id="auth"
            className="rounded-sm bg-slate-300 p-1 outline-none"
            onChange={(e) => {
              setUserType(e.target.value);
            }}
          >
            <option value="login">Admin</option>
            <option value="seller">Seller </option>
            <option value="buyer">Buyer </option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
