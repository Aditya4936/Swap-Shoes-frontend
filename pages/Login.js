import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-8 rounded  w-96">
        {/* <h2 className="text-2xl font-semibold mb-4">Login</h2> */}
        <div className="mb-8 text-center">
          <img
            className="mx-auto mb-5 h-[6rem] w-auto"
            src="/Logo.png"
            alt="Nike Logo"
          />
          <h2 className="text-xl font-semibold  text-gray-800">
            YOUR ACCOUNT FOR EVERYTHING SWAP-SHOES
          </h2>
        </div>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="w-full px-3 py-2 border rounded-3xl shadow appearance-none"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-3xl shadow appearance-none"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between flex-col">
            <Link
              href="/"
              className="text-white bg-gradient-to-b from-black to-gray-600 
                px-6 py-3  mx-auto flex item-center rounded-md hover:scale-110 duration-300"
              type="submit"
            >
              Sign In
            </Link>
            <a
              className="inline-block align-baseline font-medium mt-3 text-sm text-gray-600 hover:text-blue-800"
              href="/Register"
            >
             Not a Member? Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
