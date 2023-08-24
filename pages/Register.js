import Link from "next/link";
import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here, e.g., API call or state update
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4">
      {/* <h2 className="text-2xl font-semibold mb-4">Register</h2> */}
      <div className="mb-8 text-center">
        <img className="mx-auto h-10 mb-5 w-auto" src="/Logo.png" alt="Nike Logo" />
        <h2 className="text-xl font-semibold  text-gray-800">
          BECOME A SWAP-SHOES MEMBER
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded-3xl"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-3xl"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-3xl"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-3xl"
            required
          />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <Link
            href="/Login"
            type="submit"
            className="text-white bg-gradient-to-b from-black to-gray-600 
                px-6 py-3 mx-auto flex item-center rounded-md hover:scale-110 duration-300"
          >
            Register
          </Link>

          <Link
            href="/Login"
            className="inline-block align-baseline font-medium mt-3 text-sm text-gray-600 hover:text-blue-800"
          >
            Already a Member ? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
