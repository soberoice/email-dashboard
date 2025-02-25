import React from "react";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

export default function Dashboard() {
  return (
    <div className="">
      <div className="flex">
        <SideNav />
        <div className="w-full">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
