import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { IoIosVideocam } from "react-icons/io";
import SubTitle from "../../Shared/Titles/SubTitle/SubTitle";
import SectionTitle from "../../Shared/Titles/SectionTitle/SectionTitle";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";
import TitleAndIconUI from "./TitleAndIconUI.jsX";

function AboutDepartment({ data, videoUrl }) {
  if (!data || !videoUrl) return null;

  const { title, description } = data;

  return (
    <section>
      <SectionTitle title="CIVIL" />
      <div className="flex flex-col md:flex-row gap-8 md:gap-15">
        {/* Left side - About text */}
        <div className="flex-1">
          {/* Icon & Title */}
          <TitleAndIconUI
            icon={BsFillBuildingsFill}
            title={title}
            className="md:text-left"
          />
          {/* Description */}
          <p className="text-gray-700 text-justify leading-relaxed">{description}</p>
        </div>

        {/* Right side - Video */}
        <div className="flex-1">
          {/* Icon & Title */}
          <TitleAndIconUI
            icon={IoIosVideocam}
            title={"একনজরে পুরো ডিপার্টমেন্ট"}
            className=" md:text-left"
          />

          {/* Video */}
          <div className="">
            <iframe
              src={videoUrl.url}
              title="Department Overview Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full aspect-video rounded shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutDepartment;
