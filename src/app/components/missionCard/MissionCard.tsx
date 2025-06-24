import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface cardProps {
  icon: IconType;
  heading: string;
  content: string;
}

const MissionCard = ({ icon, heading, content }: cardProps) => {
  const Icon = icon;
  return (
    <div
      className="max-w-64  h-72  cursor-pointer mx-auto p-8 space-y-8 text-black rounded-xl transition-all duration-300 ease-in-out bg-white hover:bg-teal  hover:scale-105
    hover:text-white group text-center sm:text-left "
    >
      <div className="text-6xl flex justify-center sm:justify-start">
        <Icon />
      </div>
      <h3 className="font-semibold text-2xl">{heading}</h3>
      <p className="text-sm text-normal text-gray-500 group-hover:text-white text-justify md:text-left">
        {content}
      </p>
    </div>
  );
};

export default MissionCard;
