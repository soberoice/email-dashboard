import React from "react";
import SigninForm from "../components/signinForm";

export default function Signin() {
  return (
    <div className="flex items-center">
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
      <div className="flex-1 flex justify-center items-center bg-white">
        <SigninForm />
      </div>
    </div>
  );
}
