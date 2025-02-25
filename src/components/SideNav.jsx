import React, { useState } from "react";
import { Link } from "react-router";
import { links, supports } from "../utils/constants";

export default function SideNav() {
  const [page, setPage] = useState("Dashboard");

  return (
    <div className="flex">
      <div
        style={{ borderRight: "1px solid #E9ECEF" }}
        className="flex border-gray-300 justify-evenly flex-col w-80 p-3 h-screen border-r-1"
      >
        <div className="flex flex-col">
          <span className="flex text-2xl font-bold mt-auto mb-2">
            <img
              style={{ width: "40px", height: "40px" }}
              src="../public/mail-02.png"
              alt=""
            />
            <p className="my-auto">Good Mail</p>
          </span>
          {links.map((link, index) => (
            <button
              className="rounded-lg"
              onClick={() => setPage(link.name)}
              style={{
                backgroundColor: page === link.name && "#4263EB",
                color: page === link.name && "white",
              }}
              key={index}
            >
              <Link
                to={link.name === "Dashboard" ? "" : link.name.toLowerCase()}
              >
                <span className="flex justify-between">
                  <span className="p-3 flex flex-row gap-2 text-lg">
                    <span className="my-auto">{link.img}</span>
                    {link.name}
                  </span>
                  <span className="my-auto mr-4">{link.arrow || ""}</span>
                </span>
              </Link>
            </button>
          ))}
        </div>

        <div className="flex flex-col mt-auto">
          <div className="flex flex-col ml-2 mb-4">
            <p>Your plan</p>
            <div className="text-gray-500 flex flex-col">
              <span className="flex justify-between">
                units left<span>100</span>
              </span>
              <span className="flex justify-between">
                Total Requests<span>50</span>
              </span>
            </div>
          </div>

          {supports.map((link, index) => (
            <button
              className="rounded-lg"
              onClick={() => setPage(link.name)}
              style={{
                backgroundColor: page === link.name && "#4263EB",
                color: page === link.name && "white",
              }}
              key={index}
            >
              <Link>
                <span className="p-3 flex flex-row gap-2 text-lg">
                  <span className="my-auto">{link.img}</span>
                  {link.name}
                </span>
              </Link>
            </button>
          ))}
        </div>
      </div>
      {/* <div className="flex-2 w-96 float-right border-b-1">Welcome, David</div> */}
    </div>
  );
}
