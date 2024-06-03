import React from "react";

const LoginForm = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <form className="mx-auto max-w-sm">
        <div className="mb-5">
          <label
            for="email"
            className="mb-2 block text-sm font-medium text-gray-900"
          >
            Username
          </label>
          <input
            type="email"
            id="email"
            className="block w-[380px] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            placeholder="name"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
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
          <label for="countries" className="block">
            User Type :
          </label>

          <select
            name="auth"
            id="auth"
            className="rounded-sm bg-black p-1 text-white outline-none"
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
