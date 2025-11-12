import React from "react";

const SectionWrapper = ({ children, className = "", bg = "", id }) => {
  return (
    <section
      id={id}
      className={`w-full ${bg} py-10 md:py-15 px-2 md:px-10 lg:px-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto space-y-10">{children}</div>
    </section>
  );
};

export default SectionWrapper;
