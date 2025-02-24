import React, { useState } from "react";
import { Link } from "react-router";
import { links, supports } from "../utils/constants";

export default function SideNav() {
  const [page, setPage] = useState("Dashboard");
  function handleclick(value) {}

  return (
    <div className="flex fixed justify-evenly flex-col w-80 p-3 h-screen border-r-1">
      <div className="flex flex-col">
        <span className="flex text-2xl font-bold mt-auto mb-2">
          <img
            style={{ width: "40px", height: "40px" }}
            src="mail-02.png"
            alt=""
          />
          Good Mail
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
            <Link>
              <span className="p-3 flex flex-row gap-2 text-lg">
                <span className="my-auto">{link.img}</span>
                {link.name}
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
  );
}
