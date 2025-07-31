import React from "react";

const HeroSection = () => {
  return (
    <section
      className="bg-wrapper relative bg-teal rounded-xl transition-all duration-300 ease-in-out "
      aria-label="Hero Section"
    >
      <div className="bg-[url('/images/img/Keon_Pharma_heroM.png')] min-[480px]:bg-[url('/images/img/Keon_Pharma_hero.png')] h-[20rem] min-[380px]:h-[30rem] min-[480px]:h-[13rem] sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[35rem] bg-bottom bg-contain bg-no-repeat rounded-xl text-white py-8 md:py-2 px-4 md:px-16 text-center  transition-all duration-300 ease-in-out  max-w-[1920px] mx-auto">
        <a
          href="#contact"
          className="translate-y-15 min-[320px]:translate-y-14 min-[380px]:translate-y-28  min-[480px]:translate-y-30 sm:translate-y-37 md:translate-y-65 lg:translate-y-80 xl:translate-y-120 min-[480px]:translate-x-40  sm:translate-x-55 md:translate-x-75 lg:translate-x-95 xl:translate-x-138 2xl:translate-x-140 text-[14px] sm:text-xs lg:text-regular inline-block justify-end bg-yellow mt-4  md:mt-0 text-teal font-semibold px-2 md:py-1  md:px-6 rounded-2xl shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 ease-in-out"
        >
          Contact us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
