import facebook from "@/assart/icons/Footer/facebook.png";
import email from "@/assart/icons/Footer/gmail.png";
import instagram from "@/assart/icons/Footer/instagram.png";
import linkedin from "@/assart/icons/Footer/linkedin.png";
import twitter from "@/assart/icons/Footer/twitter.png";
import youtube from "@/assart/icons/Footer/youtube.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#262833]">
      <div className="w-full max-w-[2250px] px-20 text-gray-300 py-12">
        <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6">
          <div>
            <Image src="/logo.png" width={150} height={150} />
            <h3 className="text-3xl font-bold mt-2">Sports 360</h3>
          </div>
          <div>
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="mt-5 ">Sports 360: Your ultimate destination for comprehensive sports news coverage, delivering the latest updates, scores, and insights across the sporting world.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Menu</h3>
            <ul className=" mt-5 space-y-2">
              <li className="hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:underline">
                <Link href="/all-news">All News</Link>
              </li>
              <li className="hover:underline">
                <Link href="/cricket">Cricket</Link>
              </li>
              <li className="hover:underline">
                <Link href="/food-boll">Food Boll</Link>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h3 className="text-lg font-semibold">Flow Us</h3>
              <div className="mt-5 flex gap-4">
                <Link href="https://www.facebook.com/" target="_blanck">
                  <Image src={facebook} width={100} height={100} className="w-12    " />
                </Link>
                <Link href="https://www.instagram.com/" target="_blanck">
                  <Image src={instagram} width={100} height={100} className="w-12   " />
                </Link>
                <Link href="https://twitter.com/" target="_blanck">
                  <Image src={twitter} width={100} height={100} className="w-12     " />
                </Link>
                <Link href="https://www.linkedin.com/" target="_blanck">
                  <Image src={linkedin} width={100} height={100} className="w-12    " />
                </Link>
                <Link href="https://www.youtube.com/" target="_blanck">
                  <Image src={youtube} width={100} height={100} className="w-12     " />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mt-5">Contract Info</h3>
              <p className="flex items-center gap-3">
                <Image src={email} width={100} height={100} className="w-6" /> <span className="text-blue-500 underline cursor-pointer text-sm">sihabmolla1971@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 bg-[#19191a] text-white text-center">
        <small>The app creating by sihab uddin molla in-@-2023</small>
      </div>
    </div>
  );
};

export default Footer;
