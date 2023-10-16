import { GlobalContext } from "@/GlobalProvider/GlobalProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const { loading, setLoading, googleLogin } = useContext(GlobalContext);

  const handelGoogleLogin = () => {
    setLoading(true);
    googleLogin()
      .then(() => {
        toast.success("login Successfully");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <button onClick={handelGoogleLogin} disabled={loading} className="flex items-center gap-4 mx-auto font-semibold border border-green-600 py-1 px-12 rounded-full text-lg cursor-pointer mb-6">
      <FcGoogle className="text-3xl" /> Continue With Google
    </button>
  );
};

export default GoogleLogin;
