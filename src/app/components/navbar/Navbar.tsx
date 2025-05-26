import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div
      className="flex items-center justify-between bg-teal h-[1rem] md:h-[3rem] rounded-xl text-white py-6 md:py-10 px-6 text-center"
      aria-label="Hero Section"
    >
      <div className="">
        <h1 className="font-bold text-xl text-yellow">KEON PHARM</h1>
      </div>
      <div className="menu hidden md:block">
        <ul className="font-semibold inline-flex gap-x-12">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Our Services</Link>
          </li>
          <li>
            <Link href="/">Doctor</Link>
          </li>
          <li>
            <Link href="/">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <a
          href="#contact"
          className=" inline-block justify-end bg-white text-teal font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Contact us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
