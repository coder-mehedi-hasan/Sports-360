"use client";

import { GlobalContext } from "@/GlobalProvider/GlobalProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FaUserAlt } from "react-icons/fa";

const Abater = () => {
  const { logOut, user } = useContext(GlobalContext);
  const handelLogOut = () => {
    logOut().then(() => {
      toast.success("Log Out Successful");
    });
  };
  return (
    <div className="flex items-center gap-6">
      {user ? (
        <button onClick={handelLogOut} className="bg-[#f7564ac9] text-white font-medium px-4 py-1 rounded-md cursor-pointer">
          Log Out
        </button>
      ) : (
        <Link href="/login" className="bg-[#35B7FF] text-white font-medium px-4 py-1 rounded-md cursor-pointer">
          Login
        </Link>
      )}
      {user ? <Image src={user?.photoURL} width={100} height={100} className="w-12 rounded-full cursor-pointer" /> : <FaUserAlt className="text-3xl text-[#35B7FF] cursor-pointer" />}
    </div>
  );
};

export default Abater;
