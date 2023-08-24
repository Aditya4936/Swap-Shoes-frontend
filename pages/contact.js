import React from "react";

const contact = () => {
  return (
    <div name="Contact" className="w-full h-full bg-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        
        <div className="mb-8 text-center">
          <img
            className="mx-auto h-[7rem] w-auto"
            src="/Logo.png"
            alt="Nike Logo"
          />
          <h2 className="text-2xl font-semibold  text-gray-800">
            Contact Swap-Shoes
          </h2>
        </div>
        <div className="flex justify-center items-center ">
          <form
            action="https://getform.io/f/f769210d-de7a-4cb4-a3c0-45c804e749fc"
            method="POST"
            className="flex flex-col w-full md:w-1/2 rounded-md"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your Name"
              className="p-2
                bg-transparent border-2  rounded-3xl text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+[a-z]{2,}$"
              required
              className="p-2
               my-4 bg-transparent border-2 rounded-3xl text-black focus:outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Enter Message"
              required
              className="p-2
                bg-transparent border-2 rounded-3xl text-black focus:outline-none"
            ></textarea>
            <div className="mb-4 mt-5">
              <p className="text-gray-700 text-sm">
                For inquiries, you can reach us at:
              </p>
              <p className="text-blue-500 font-semibold">
                Email: contact@Swap-Shoes.com
              </p>
              <p className="text-blue-500 font-semibold">
                Phone: 1-800-Swap-Shoes-INFO
              </p>
            </div>
            <button
              className="text-white bg-gradient-to-b from-black to-gray-600 
                px-6 py-3 my-8 mx-auto flex item-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
