"use client";

import { GlobalContext } from "@/GlobalProvider/GlobalProvider";
import Link from "next/link";
import { useContext } from "react";

const LoginLogoutButton = () => {
  const { logOut, user } = useContext(GlobalContext);
  const handelLogOut = () => {
    logOut().then(() => {
      toast.success("Log Out Successful");
    });
  };
  return (
    <div>
      {user ? (
        <button onClick={handelLogOut} className="bg-[#f7564ac9] text-white font-medium px-4 py-1 rounded-md cursor-pointer">
          Log Out
        </button>
      ) : (
        <Link href="/login" className="bg-[#35B7FF] text-white font-medium px-4 py-1 rounded-md cursor-pointer">
          Login
        </Link>
      )}
    </div>
  );
};

export default LoginLogoutButton;
