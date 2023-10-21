"use client";

import { GlobalContext } from "@/GlobalProvider/GlobalProvider";
import Image from "next/image";
import { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import LoginLogoutButton from "./LoginLogoutButton";

const Abater = () => {
  const { user } = useContext(GlobalContext);

  return (
    <div className="flex items-center gap-6">
      <div className="hidden md:block">
        <LoginLogoutButton />
      </div>
      {user ? <Image src={user?.photoURL} width={100} height={100} className="w-12 rounded-full cursor-pointer" /> : <FaUserAlt className="text-3xl text-[#35B7FF] cursor-pointer" />}
    </div>
  );
};

export default Abater;
