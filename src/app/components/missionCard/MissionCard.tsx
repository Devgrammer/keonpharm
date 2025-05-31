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
    <div className="w-64 h-72  cursor-pointer p-8 space-y-8 text-black rounded-xl bg-white hover:bg-teal 
    hover:text-white group">
      <div className="text-6xl ">
        <Icon />
      </div>
      <h3 className="font-semibold text-2xl">{heading}</h3>
      <p className="text-sm text-normal text-gray-500 group-hover:text-white">{content}</p>
    </div>
  );
};

export default MissionCard;
