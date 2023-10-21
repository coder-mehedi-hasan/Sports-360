"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavData = () => {
  const user = null;
  const pathName = usePathname();

  let items = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/all-news",
      name: "All News",
    },
    {
      path: "/cricket",
      name: "Cricket",
    },
    {
      path: "/food-boll",
      name: "Food Boll",
    },
  ];

  if (user === "admin") {
    items.push({
      path: "/dashboard",
      name: "Admin-Dashboard",
    });
  }

  return (
    <div>
      <ul className="flex flex-col md:flex-row gap-2 md:gap-3 lg:gap-5 md:items-center md:justify-center">
        {items.map((item) => (
          <li className={` font-medium hover:text-[#35B7FF] ${item.path === pathName ? "text-[#35B7FF] " : ""}`} key={item.path}>
            <Link href={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavData;
