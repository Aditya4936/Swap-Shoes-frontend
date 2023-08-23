import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8 text-center">
          <img
            className="mx-auto h-12 w-auto"
            src="/logo.svg"
            alt="Nike Logo"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            Contact Swap-Shoes
          </h2>
        </div>
    
        <form action='https://getform.io/f/f769210d-de7a-4cb4-a3c0-45c804e749fc' method='POST'>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border  rounded-3xl focus:outline-none focus:ring focus:border-blue-500"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border  rounded-3xl focus:outline-none focus:ring focus:border-blue-500"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full h-24 px-3 py-2 border rounded-3xl focus:outline-none focus:ring focus:border-blue-500"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
              type="button"
            >
              Send Message
            </button>
            
          </div>
          <div className="mb-4">
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
