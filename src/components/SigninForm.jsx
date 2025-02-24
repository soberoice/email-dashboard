import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router";

export default function SigninForm() {
  return (
    <div>
      <div
        style={{ backgroundColor: "#F7F9FF" }}
        className="mt-12 rounded-2xl flex flex-col py-4 px-12 w-100 h-80vh items-center"
      >
        <p className="text-4xl m-4">👋</p>
        <p className="text-3xl mt-2 mb-2">Welcome Back</p>
        <p className="text-sm text-gray-700">let's build something great</p>
        <form>
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
          />{" "}
          <Link to="/forgot-password">
            <p className="text-sm text-gray-700 mb-2">Forgot password?</p>
          </Link>
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
      </div>
    </div>
  );
}
