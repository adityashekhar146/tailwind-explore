import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header: React.FC = () => {

  return (
    <nav className="bg-gray-50 w-full mt-0 flex flex-row">
      <div className="flex flex-row items-center p-2">
        <Image src="/images/cloud-refresh.png" height={48} width={48} alt="" 
          className="m-2 p-2"
        />
        <h2 className="text-3xl font-bold mx-3">Discover Next</h2>
      </div>
      <ul className="mx-10 sm:hidden md:inline-flex flex-row items-start">
        <li className="header-link"><Link href="/">Home</Link></li>
        <li className="header-link"><Link href="/about">About Us</Link></li>
      </ul>

    </nav>
  );
}

export default Header;