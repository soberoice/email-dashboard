import { Avatar } from "@chakra-ui/react";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const name = "john smith";
  return (
    <div
      style={{ borderBottom: "1px solid #E9ECEF" }}
      className="flex w-full h-20 px-8 items-center text-xl border-b-1 justify-between bg-white"
    >
      <div className="font-semibold">Welcome, David</div>
      <div className="flex my-auto">
        <span className="flex my-auto mx-2">
          <FaRegBell className="mx-2" />
          <FiMoon className="mx-2" />
        </span>
        <Avatar name={name} className="mx-2" />
        <span className="flex flex-col text-sm my-auto">
          <span>{name}</span>
          david@gmail.com
        </span>
        <IoIosArrowDown className="my-auto ml-4" />
      </div>
    </div>
  );
}
