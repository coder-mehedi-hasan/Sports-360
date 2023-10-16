"use client";
/* eslint-disable react/no-unescaped-entities */
import { GlobalContext } from "@/GlobalProvider/GlobalProvider";
import { uploadImage } from "@/hooks/uploadImage";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext } from "react";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import GoogleLogin from "./GoogleLogin";

const SignUpForm = () => {
  const { loading, setLoading, createUser, profileUpdate } = useContext(GlobalContext);
  const params = useParams();

  const handelSighup = (event) => {
    setLoading(true);
    event.preventDefault();
    const name = event.target.name.value;
    const image = event.target.image.files[0];
    const email = event.target.email.value;
    const password = event.target.password.value;
    uploadImage(image)
      .then(({ data }) => {
        const photo = data?.display_url;
        createUser(email, password)
          .then((result) => {
            profileUpdate(name, photo).then(() => {
              toast.success("login success");
              setLoading(false);
              params("/");
            });
          })
          .catch((error) => {
            console.log(error.message);
            toast.error(error.message);
            setLoading(false);
          });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="w-10/12 mx-auto ">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-black">Sign Up</h2>
      <form className="space-y-5" onSubmit={handelSighup}>
        <div>
          <input
            className="border-2 border-gray-300 rounded-full py-2 px-5 w-full focus:border-2 focus:border-[#35B7FF] focus:outline-none"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="image">
            <p className="w-full border-2 border-[#35B7FF] border-dashed cursor-pointer text-center py-2 rounded-full font-bold text-[#35B7FF] uppercase">Upload Image</p>
          </label>
          <input className="hidden" type="file" name="image" id="image" required />
        </div>
        <div>
          <input
            className="border-2 border-gray-300 rounded-full py-2 px-5 w-full focus:border-2 focus:border-[#35B7FF] focus:outline-none"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <input
            className="border-2 border-gray-300 rounded-full py-2 px-5 w-full focus:border-spacing-2 focus:border-[#35B7FF] focus:outline-none"
            type="password"
            name="password"
            placeholder="Your Password"
            required
          />
        </div>

        <button disabled={loading} className="bg-[#35B7FF] w-full py-2 rounded-full text-white font-bold cursor-pointer flex justify-center">
          {!loading ? <span>Sign Up</span> : <TbFidgetSpinner className="text-2xl animate-spin" />}
        </button>
      </form>
      <p className="text-center my-4">
        Already have an account?{" "}
        <Link className="text-[#35B7FF]" href="/login">
          Login
        </Link>
      </p>
      <GoogleLogin />
    </div>
  );
};

export default SignUpForm;
