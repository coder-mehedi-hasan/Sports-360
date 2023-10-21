"use client";

import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import Abater from "./Abater";
import LoginLogoutButton from "./LoginLogoutButton";
import Logo from "./Logo";
import NavData from "./NavData";

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-container py-2 ">
      <div className=" flex items-center justify-between">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          <HiMenuAlt2 className="text-2xl cursor-pointer" />
        </button>
        <Link href="/" className="flex items-center gap-2">
          <Logo /> <h3 className="font-bold text-xl text-[#35B7FF]">Sports 360</h3>
        </Link>
        <Abater />
      </div>
      <div className={`absolute top-16 ${isOpen ? "left-0" : "-left-96"} z-30 bg-white w-[50%] px-4 pb-5 ease-in-out duration-500 space-y-4 rounded-br-lg shadow-black shadow-lg`}>
        <NavData />
        <LoginLogoutButton />
      </div>
    </div>
  );
};

export default ResponsiveNavbar;
