import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavProp {
  setIsNavToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({ setIsNavToggle }: NavProp) => {
  return (
    <div
      className="flex items-center justify-between bg-teal h-[1rem] md:h-[3rem] rounded-xl text-white py-6 md:py-10 px-4 md:px-6 text-center"
      aria-label="Hero Section"
    >
      <div className="">
        <div className="font-bold text-xl flex items-center text-yellow  w-[50%] md:w-[80%] aspect-[1/1] h-fit">
          <Link href="/">
            <Image
              src={"/images/img/brand.png"}
              width={100}
              height={100}
              alt="brand"
              className="object-contain"
            />
          </Link>
        </div>
      </div>
      <div className="menu hidden md:block">
        <ul className="font-semibold inline-flex gap-x-12">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="#we_are">About</Link>
          </li>
          <li>
            <Link href="#vision">Our Vision</Link>
          </li>
          <li>
            <Link href="#experts">Our Experts</Link>
          </li>
          <li>
            <Link href="#focus">Expertise</Link>
          </li>
          <li>
            <Link href="#choose">Advantage</Link>
          </li>
          <li>
            <Link href="#contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <button
        className="block md:hidden text-3xl "
        onClick={() => setIsNavToggle(true)}
      >
        <GiHamburgerMenu />
      </button>
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
