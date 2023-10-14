import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";

const Abater = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href="/login" className="bg-[#35B7FF] text-white font-medium px-4 py-1 rounded-md cursor-pointer">
        Login
      </Link>
      <FaUserAlt className="text-3xl text-[#35B7FF] cursor-pointer" />
    </div>
  );
};

export default Abater;
