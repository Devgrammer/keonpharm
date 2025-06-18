import React, { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}
const SectionWrapper = ({ children }: SectionProps) => {
  return (
    <section
      className="max-w-8xl px-4 md:px-16 mx-auto  py-16"
      aria-labelledby="who-we-are-title"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
