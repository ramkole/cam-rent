import Image from "next/image";
import Link from "next/link";
import React from "react";
import civiLogo from "@/public/civi.png";
import UserNav from "./UserNav";
const NavBar = () => {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src={civiLogo}
            alt="logo"
            className="w-[100px] border-4 rounded-md border-slate-400"
          />
        </Link>
        <div className="rounded-full border px-5 py-2">
          <h1>Hellow from search</h1>
        </div>
        <div>
          <UserNav />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
