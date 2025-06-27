import Image from "next/image";
import React from "react";
import { PiDna, PiTree } from "react-icons/pi";
import doctor from "../../../../public/images/img/doctor.png";

const HeroSection = () => {
  return (
    <section
      className="relative bg-teal min-h-[35rem] rounded-xl text-white py-8 md:py-2 px-4 md:px-16 text-center"
      aria-label="Hero Section"
    >
      {" "}
      <h1 className="text-[2.5rem] md:text-[5rem]  text-yellow lg:text-[11rem] font-extrabold md:font-bold max-w-10xl leading-tight">
        KEON &nbsp; PHARM
      </h1>
      <p className="md:hidden text-xs text-teal-200">
        Where ancient wisdom meets modern science
      </p>
      <div className="hidden md:flex max-w-8xl justify-between items-center gap-x-2  lg:px-4 ">
        <p className="flex  justify-start items-center  md:gap-x-4 text-xs text-purple-200  font-light md:text-xl md:max-w-3xl ">
          <span className="flex justify-center items-center w-8 h-8 font-semibold  rounded-full bg-purple-200 text-black">
            <PiTree />
          </span>{" "}
          Where ancient wisdom
        </p>
        <p className=" flex items-center  md:gap-x-4 text-xs text-teal-200 font-light md:text-xl md:max-w-3xl  ">
          <span className=" flex justify-center items-center w-8 h-8 font-semibold  rounded-full bg-teal-200 text-black">
            <PiDna />
          </span>{" "}
          Meets modern science
        </p>
      </div>
      <div className=" translate-y-6 md:translate-y-50 md:flex justify-between items-start max-w-8xl mx-auto">
        <p className=" w-full text-sm font-medium  md:text-sm md:max-w-[15rem] md:text-justify">
          World-Class Pharma Research & Development from the Heart of Varanasi
        </p>

        <a
          href="#contact"
          className=" inline-block justify-end bg-yellow mt-4 md:mt-0 text-teal font-semibold px-4 py-1 md:py-2 md:px-6 rounded-2xl shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          Contact us
        </a>
      </div>
      <div className="absolute flex  bottom-0  md:top-2.5 z-10 lg:right-[35.3%]  ">
        <Image
          src={doctor}
          alt="doctor"
          width={550}
        />
      </div>
    </section>
  );
};

export default HeroSection;
