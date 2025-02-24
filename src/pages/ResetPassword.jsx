import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router";

export default function ResetPassword() {
  return (
    <div className="flex h-full">
      <div
        style={{ backgroundColor: "#F7F9FF" }}
        className="flex-1 flex justify-center bg-blue-50"
      >
        <img
          src="Clever.jpg"
          alt=""
          style={{ height: "675px" }}
          className=" m-0"
        />
      </div>
      <div className="flex-1 flex justify-center">
        <div>
          <div className="mt-12 rounded-2xl flex flex-col py-4 px-12 w-100 h-80vh ">
            <p className="text-4xl m-4 w-20">
              <img src="lock.jpg" alt="" />
            </p>
            <p className="text-3xl mt-2 mb-2">Reset-password</p>
            <p className="text-sm text-gray-700 mb-4">
              Enter your email and we'll send a link
            </p>
            <form>
              <label className="text-gray-500" htmlFor="contact">
                E-mail or Phone number
              </label>
              <input
                placeholder="Enter your e-mail or phone number"
                className="focus:outline-none rounded-lg shadow-lg bg-white mb-8 w-80 p-3"
                type="text"
                id="contact"
              />
            </form>

            <button
              type="submit"
              className="hover:bg-blue-400 bg-blue-500 w-80 rounded-lg py-2 cursor-pointer text-white mb-2"
            >
              Send me the link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
