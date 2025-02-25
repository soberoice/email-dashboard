import React from "react";
import SideNav from "../components/SideNav";
import Navbar from "../components/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";

export default function Dashboard() {
  return (
    <div style={{ color: "#343A40" }} className="font-semibold">
      <div className="flex">
        <SideNav />
        <div className="flex flex-col w-full">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
