/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className="w-10/12 mx-auto ">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-black">Log In</h2>
      <form className="space-y-5">
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
        <input className="bg-[#35B7FF] w-full py-2 rounded-full text-white font-bold cursor-pointer" type="submit" value="Log In" />
      </form>
      <p className="text-center mt-6">
        Don't have any account?{" "}
        <Link className="text-[#35B7FF]" href="/sign-up">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
