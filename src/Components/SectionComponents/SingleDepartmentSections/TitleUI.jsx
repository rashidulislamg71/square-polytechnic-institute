import React from "react";
import SubTitle from "@components/Shared/Titles/SubTitle/SubTitle";

function TitleUI({ title }) {
  return (
    <div
      className="mb-3 border-b-2
       border-amber-400 pb-1 text-center md:text-left"
    >
      <SubTitle subTitle={title} />
    </div>
  );
}

export default TitleUI;
