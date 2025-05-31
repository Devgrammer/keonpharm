import React from "react";
interface HeadingProps{
heading:{primary: string;
secondary: string}
}

const SectionHeading = ({heading}: HeadingProps) => {
  return (
    <h2
      id="who-we-are-title"
      className="text-4xl lg:text-6xl font-normal text-black mb-12 text-center"
    >
      {heading.primary}&nbsp;
      <span className="text-teal">{heading.secondary}</span>
    </h2>
  );
};

export default SectionHeading;
