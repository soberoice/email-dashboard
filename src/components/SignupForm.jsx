import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

export default function SignupForm() {
  return (
    <div>
      <div
        style={{ backgroundColor: "#F7F9FF" }}
        className="mt-12 rounded-2xl flex flex-col py-4 px-12 w-100 items-center"
      >
        <p className="text-3xl mt-2 mb-2">Create Your Account</p>
        <p className="text-sm text-gray-700">it's easy and free</p>
        <form>
          <label className="text-gray-500" htmlFor="name">
            Your name
          </label>
          <input
            placeholder="Enter your name"
            className="focus:outline-none rounded-lg shadow-lg bg-white mb-8 w-80 p-3"
            type="text"
            id="name"
          />
          <label className="text-gray-500" htmlFor="contact">
            Your name
          </label>
          <input
            placeholder="Enter your e-mail or phone number"
            className="focus:outline-none rounded-lg shadow-lg bg-white mb-8 w-80 p-3"
            type="text"
            id="contact"
          />
          <label className="text-gray-500" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter your password"
            className="focus:outline-none rounded-lg shadow-lg bg-white mb-2 w-80 p-3"
            type="password"
            id="password"
          />
          <p className="text-sm text-gray-400 mb-2">8 characters at least</p>
        </form>
        <button
          type="submit"
          className="hover:bg-blue-400 bg-blue-500 w-80 rounded-lg py-2 cursor-pointer text-white mb-2"
        >
          Register
        </button>
        <p className="text-sm text-gray-700">or via other accounts</p>
        <span>
          <button className="bg-white rounded-lg p-3 m-3 shadow-lg text-3xl w-14 h-14">
            <img src="GoogleLogo.jpg" alt="google" />
          </button>
          <button className="bg-white rounded-lg p-3 m-3 shadow-lg text-3xl w-13 h-14">
            <img src="AppleLogo.jpg" alt="apple" />
          </button>
          <button className="bg-white rounded-lg p-3 m-3 shadow-lg text-3xl text-blue-500">
            <FaFacebook />
          </button>
        </span>
        <span>
          <p>
            already have an account?{" "}
            <Link to="/signin" className="text-blue-700">
              Signin
            </Link>
          </p>
        </span>
        <p>
          <Link to="/home/dashboard" className="text-blue-700">
            Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}
