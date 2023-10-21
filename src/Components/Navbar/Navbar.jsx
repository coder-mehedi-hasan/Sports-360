import Link from "next/link";
import Abater from "./Abater";
import Logo from "./Logo";
import NavData from "./NavData";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex justify-between items-center py-2 my-container">
          <Link href="/" className="flex gap-4 items-center">
            <Logo />
            <h3 className="font-bold text-2xl text-[#35B7FF]">Sports 360</h3>
          </Link>
          <NavData />
          <Abater />
        </div>
        <hr className="drop-shadow-xl" />
      </div>
      <div className="md:hidden">
        <ResponsiveNavbar />
      </div>
    </div>
  );
};

export default Navbar;
