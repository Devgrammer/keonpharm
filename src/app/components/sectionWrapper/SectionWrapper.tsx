import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id:string;
  subHead:string;
}
const SectionWrapper = ({ children, id, subHead }: SectionProps) => {
  return (
    <section id={id}
      className="max-w-8xl px-4 md:px-16 mx-auto  py-16"
      aria-labelledby="who-we-are-title"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
