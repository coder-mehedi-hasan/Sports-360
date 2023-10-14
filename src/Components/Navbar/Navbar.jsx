import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full max-w-[2250px] px-10 mx-auto bg-red-300">
      <div className="">
        <Link href="/" className="flex gap-5 items-center">
          <Logo />
          <h3 className="font-bold text-3xl text-[#35B7FF]">Sports 360</h3>
        </Link>
      </div>
      <div>Nav Items</div>
      <div>Abater</div>
    </div>
  );
};

export default Navbar;
