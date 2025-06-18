import React from "react";
import { BsPatchCheck } from "react-icons/bs";
import { LiaBalanceScaleSolid, LiaHandshakeSolid } from "react-icons/lia";
import { PiHandHeartBold, PiPottedPlant } from "react-icons/pi";
import { TbSettingsSpark, TbWorldCheck } from "react-icons/tb";

interface FeatureProp {
  key: number;
  id: number;
  icon: string;
  heading: string;
  content: string;
}

const IconRenderer = (ch) => {
  switch (ch) {
    case "TbSettingsSpark":
      return <TbSettingsSpark />;
    case "BsPatchCheck":
      return <BsPatchCheck />;
    case "LiaHandshakeSolid":
      return <LiaHandshakeSolid />;
    case "PiPottedPlant":
      return <PiPottedPlant />;
    case "TbWorldCheck":
      return <TbWorldCheck />;
    case "PiHandHeartBold":
      return <PiHandHeartBold />;
    case "LiaBalanceScaleSolid":
      return <LiaBalanceScaleSolid />;
    default:
      return null;
  }
};
const FeatureCard = ({ id, icon, heading, content }: FeatureProp) => {
  return (
    <div
      className={`feature-card-container flex items-center gap-4 h-24 min-w-64 max-w-3xl rounded-md p-4 ${
        id ? "bg-teal text-white" : "text-black"
      }`}
    >
      <div className="text-3xl">{IconRenderer(icon)}</div>
      <div className="content space-y-1">
        <div className="heading text-sm md:text-normal font-medium">{heading}</div>
        <div className="description text-xs">{content}</div>
      </div>
    </div>
  );
};

export default FeatureCard;
