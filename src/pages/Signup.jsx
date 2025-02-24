import React from "react";
import SignupForm from "../components/SignupForm";
import { MdOutlineEmail } from "react-icons/md";

export default function Signup() {
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
        <SignupForm />
      </div>
    </div>
  );
}
