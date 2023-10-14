import SignUpForm from "@/Components/Login&SignUp/SignUpForm";
import loginBanner from "@/assart/login-banner.jpg";
import Image from "next/image";

const SignUpPage = () => {
  return (
    <div className="w-full max-w-[2250px] px-20 ">
      <div className="border border-[#EBF2FB] mt-14">
        <h3 className="text-center text-2xl md:text-4xl font-bold mt-14 mb-5 text-[#35B7FF]">Register For a New Account</h3>

        <div className="flex justify-between items-center gap-4 flex-col md:flex-row rounded-md">
          <div className="w-full md:w-[50%]">
            <Image src={loginBanner} />
          </div>
          <div className="w-full md:w-[50%]">
            <SignUpForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
