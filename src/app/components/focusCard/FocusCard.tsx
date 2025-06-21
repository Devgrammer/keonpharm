import React from "react";

interface FocusState {
  ayu: boolean;
  mod: boolean;
  nat: boolean;
}

interface focusProp {
  heading: string;
  desc: string;
  img: string;
  isFocused: FocusState;
  id: keyof FocusState;
  setIsFocused: React.Dispatch<React.SetStateAction<FocusState>>;
}

const FocusCard = ({
  heading,
  desc,
  id,
  img,
  isFocused,
  setIsFocused,
}: focusProp) => {
  return (
    <div
      className={` flex w-full h-96 rounded-xl bg-cover bg-center transition-all duration-600 ease-in-out relative  ${
        isFocused[id] ? "md:w-[50%]" : "md:w-[25%]"
      }`}
      style={{
        backgroundImage: `url(${img})`,
      }}
      onClick={() => setIsFocused(prev=>({...prev, [id]: true }))}
    >
      <div className="w-full h-full z-1 rounded-xl bg-gradient-to-b  from-black to-black to-40% opacity-40 absolute"></div>
      <div
        className={`w-full h-full bg-gradient-to-b  from-none ${
          isFocused[id] ? "to-yellow to-150%" : "to-teal to-120%"
        } flex flex-col justify-between  z-2 rounded-xl text-white p-8  cursor-pointer`}
      >
        <div className="font-bold text-xl">{heading}</div>
        <div className="text-sm align-bottom">{desc}</div>
      </div>
    </div>
  );
};

export default FocusCard;
