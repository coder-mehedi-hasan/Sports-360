"use client";

/* eslint-disable react/no-unescaped-entities */
import { GlobalContext } from "@/GlobalProvider/GlobalProvider";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import GoogleLogin from "./GoogleLogin";

const LoginForm = () => {
  const { loading, setLoading, loginUser } = useContext(GlobalContext);

  const handelLogin = (event) => {
    setLoading(true);
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success("login Successful");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="w-10/12 mx-auto ">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-black">Log In</h2>
      <form className="space-y-5" onSubmit={handelLogin}>
        <div>
          <input className="border-2 border-gray-300 rounded-full py-2 px-5 w-full focus:border-2 focus:border-[#35B7FF] focus:outline-none" type="email" name="email" placeholder="Your Email" />
        </div>
        <div>
          <input
            className="border-2 border-gray-300 rounded-full py-2 px-5 w-full focus:border-spacing-2 focus:border-[#35B7FF] focus:outline-none"
            type="password"
            name="password"
            placeholder="Your Password"
          />
        </div>
        <button disabled={loading} className="bg-[#35B7FF] w-full py-2 rounded-full text-white font-bold cursor-pointer flex justify-center">
          {!loading ? <span>Login</span> : <TbFidgetSpinner className="text-2xl animate-spin" />}
        </button>
      </form>
      <p className="text-center my-4">
        Don't have any account?{" "}
        <Link className="text-[#35B7FF]" href="/sign-up">
          Register
        </Link>
      </p>
      <GoogleLogin />
    </div>
  );
};

export default LoginForm;
