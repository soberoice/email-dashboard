import { Avatar } from "@mui/material";
import React from "react";
import { FaRegBell } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
export default function Navbar() {
  const name = "john smith";
  return (
    <div
      style={{ borderBottom: "1px solid #E9ECEF" }}
      className="flex w-full h-20 px-8 items-center text-xl border-b-1 justify-between bg-white"
    >
      <div className="font-semibold">Welcome, {name}</div>
      <div className="flex my-auto">
        <span className="flex my-auto mx-2">
          <FaRegBell className="mx-2" />
          <FiMoon className="mx-2" />
        </span>
        <Avatar {...stringAvatar(name)} className="mr-2" />
        <span className="flex flex-col text-sm my-auto">
          <span>{name}</span>
          david@gmail.com
        </span>
        <IoIosArrowDown className="my-auto ml-4" />
      </div>
    </div>
  );
}
