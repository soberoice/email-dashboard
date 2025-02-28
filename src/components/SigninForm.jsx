import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router";
import { useAuth } from "../API/authentication";
import { Alert } from "@mui/material";

export default function SigninForm() {
  const { signIn, loading, error } = useAuth();
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(formData);
    navigate("/home/dashboard");
  };
  return (
    <div>
      <div
        style={{ backgroundColor: "#F7F9FF" }}
        className="mt-12 rounded-2xl flex flex-col py-4 px-12 w-100 h-80vh items-center"
      >
        <p className="text-4xl m-4">👋</p>
        <p className="text-3xl mt-2 mb-2">Welcome Back</p>
        <p className="text-sm text-gray-700">let's build something great</p>
        <form onSubmit={handleSubmit}>
          <label className="text-gray-500" htmlFor="contact">
            Your Email
          </label>
          <input
            placeholder="Enter your e-mail or phone number"
            className="focus:outline-none rounded-lg shadow-lg bg-white mb-8 w-80 p-3"
            type="text"
            id="contact"
            name="login"
            onChange={handleChange}
          />
          <label className="text-gray-500" htmlFor="password">
            Password
          </label>
          <input
            placeholder="Enter your password"
            className="focus:outline-none rounded-lg shadow-lg bg-white mb-2 w-80 p-3"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />{" "}
          <Link to="/forgot-password">
            <p className="text-sm text-gray-700 mb-2">Forgot password?</p>
          </Link>
          {error && <Alert severity="error">{error}</Alert>}
          <button
            type="submit"
            className="hover:bg-blue-400 bg-blue-500 w-80 rounded-lg py-2 cursor-pointer text-white mb-2"
            disabled={loading}
          >
            {loading ? "logging in..." : "log in"}
          </button>
        </form>
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
        <p>
          don't have an account?{" "}
          <Link to="/" className="text-blue-700">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
