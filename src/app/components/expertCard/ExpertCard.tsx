import Image from "next/image";
import React from "react";

interface ExpertProps {
  heading: string;
  des: string;
  img: string;
}

const ExpertCard = ({ heading, des, img }: ExpertProps) => {
  return (
    <div className="expert-card  flex w-full min-h-96 rounded-xl leading-tight">
      <div
        className={`w-full h-full bg-gradient-to-t  from-none to-teal to-80%
         flex flex-col justify-between  z-2 rounded-xl text-white p-8  cursor-pointer hover:via-yellow`}
      >
        <div className="font-bold text-2xl mb-4 text-center ">{heading}</div>
        <div className="text-sm  text-center align-text-top">{des}</div>
        <Image src={img} width={900} height={100} alt="alt" />
      </div>
    </div>
  );
};

export default ExpertCard;
