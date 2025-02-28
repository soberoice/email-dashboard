import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { Avatar } from "@mui/material";
import { Link } from "react-router";
import { Scale } from "@mui/icons-material";
import { useAuth } from "../API/authentication";

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
  const { user } = useAuth();
  const [toggle, setToggle] = useState(false);
  const name = "john smith";
  return (
    <div
      style={{ borderBottom: "1px solid #E9ECEF" }}
      className="flex w-full px-8 mt-3 h-20 items-center text-xl border-b-1 bg-white"
    >
      <div className="font-semibold">
        Welcome, {user?.first_name} {user?.last_name}
      </div>
      <div className="flex ml-auto h-18">
        <span className="flex my-auto">
          <FaRegBell className="mx-2" />
          <FiMoon className="mx-2" />
        </span>
        <Accordion
          sx={{
            width: "190",
            height: "full",
            boxShadow: "none",
          }}
        >
          <AccordionSummary>
            <Typography>
              <span className="flex">
                <Avatar {...stringAvatar(name)} className="mr-2" />
                <span className="flex flex-col text-sm my-auto">
                  <span>{user?.username}</span>
                  {console.log(user)}
                  {user?.email}
                </span>
                <IoIosArrowDown className="my-auto ml-4" />
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="text-center ">
            <button
              style={{ width: "190px", color: "red", border: "1px solid red" }}
              className="bg-white h-15 text-red rounded-xl "
            >
              Sign Out
            </button>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
