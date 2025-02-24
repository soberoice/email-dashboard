import { LuLayoutDashboard, LuLayoutTemplate } from "react-icons/lu";
import { BsCart2 } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { FaPerson } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { GrSupport } from "react-icons/gr";

export const links = [
  { img: <LuLayoutDashboard />, name: "Dashboard" },
  { img: <FaRegPaperPlane />, name: "Reports" },
  { img: <LuLayoutTemplate />, name: "Wallets" },
  { img: <BsCart2 />, name: "Pricing" },
  { img: <GoGear />, name: "Settings" },
  { img: <FaPerson />, name: "Developer" },
  { img: <CgProfile />, name: "Profile" },
];

export const supports = [
  { name: "support", img: <GrSupport /> },
  { name: "API Console", img: <GoGear /> },
];
