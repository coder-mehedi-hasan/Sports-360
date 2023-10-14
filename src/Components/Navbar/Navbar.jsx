import Link from "next/link";
import Abater from "./Abater";
import Logo from "./Logo";
import NavData from "./NavData";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 mx-auto">
      <div className="">
        <Link href="/" className="flex gap-5 items-center">
          <Logo />
          <h3 className="font-bold text-3xl text-[#35B7FF]">Sports 360</h3>
        </Link>
      </div>
        <NavData />
        <Abater />
    </div>
  );
};

export default Navbar;
