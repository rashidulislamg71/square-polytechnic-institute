import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { IoIosVideocam } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import DepartmentAboutsIcon from "./DepartmentAboutsIcon";
import TitleUI from "./TitleUI.jsx";

function AboutDepartment({ data, videoUrl, sectionTitle }) {
  if (!data || !videoUrl) return null;

  const { title, description } = data;

  return (
    <section>
      <SectionTitle title={sectionTitle} />
      <div className="flex flex-col md:flex-row gap-8 md:gap-15">
        {/* Left side - About text */}
        <div className="flex-1">
          {/* Icon & Title */}
          <div className="flex flex-col items-center md:items-start">
            <DepartmentAboutsIcon icon={MdCastForEducation} />
            <TitleUI title={title} />
          </div>
          {/* Description */}
          <p
            className="text-gray-700 text-justify 
          leading-relaxed"
          >
            {description}
          </p>
        </div>

        {/* Right side - Video */}
        <div className="flex-1">
          {/* Icon & Title */}

           <div className="flex flex-col items-center md:items-start">
            <DepartmentAboutsIcon  icon={IoIosVideocam} />
            <TitleUI title={title} />
          </div>
          

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
