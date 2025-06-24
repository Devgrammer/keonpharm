import React from "react";

import {  TbCertificate, TbFlask, TbHeartHandshake, TbHistory, TbLeaf, TbUsers } from "react-icons/tb";

interface FeatureProp {
  key: number;
  id: number;
  icon: string;
  heading: string;
}

const IconRenderer = (ch:string) => {
  switch (ch) {
    case "TbHistory":
      return <TbHistory />;
    case "TbCertificate":
      return <TbCertificate />;
    case "TbFlask":
      return <TbFlask />;
    case "TbHeartHandshake":
      return <TbHeartHandshake />;
    case "TbLeaf":
      return <TbLeaf />;
    case "TbUsers":
      return <TbUsers />;
    default:
      return null;
  }
};
const ChooseCard = ({ id, icon, heading }: FeatureProp) => {
  return (
    <div
      className={`choose-card-container flex items-center gap-4 h-16 w-full rounded-md p-4 ${
        id ? "bg-teal text-white" : "text-black"
      }`}
    >
      <div className="text-3xl">{IconRenderer(icon)}</div>
      <div className="content space-y-1">
        <div className="heading text-sm md:text-lg font-medium">{heading}</div>
      </div>
    </div>
  );
};

export default ChooseCard;
