import React from "react";
import ActionButton from "@components/UI/ActionButton/ActionButton";
import { Link } from "react-router-dom";

const DepartmentCard = ({ name, shortName, image, description, url }) => {
  return (
    <article
      className="group max-w-[290px] bg-white/90 backdrop-blur-md rounded-xl shadow-md 
                 hover:shadow-2xl border border-gray-100 hover:border-emerald-500 
                 transform hover:-translate-y-2 transition-all duration-500 
                 overflow-hidden flex flex-col"
    >
      {/* Image Section */}
      <figure className="relative overflow-hidden">
        <Link to={url} aria-label={`${name} Department`}>
          <img
            src={image}
            alt={`${name} Department - ${shortName}`}
            loading="lazy"
            className="w-full h-40 object-cover rounded-t-xl 
                       transition-transform duration-700 ease-in-out 
                       group-hover:scale-110"
          />
        </Link>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

        {/* Department Title */}
        <figcaption className="absolute bottom-2 left-4">
          <Link to={url}>
            <h2 className="text-white font-bold text-lg drop-shadow-md">
              {name}{" "}
              <span className="text-teal-400 font-semibold">({shortName})</span>
            </h2>
          </Link>
        </figcaption>
      </figure>

      {/* Content Section */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <p className="text-gray-700 text-[15px] leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="mt-5">
          <ActionButton
            text="বিস্তারিত পড়ুন..."
            bg_color="bg-green-600 hover:bg-green-700"
            link={url}
            fontSize="text-[15px]"
            ariaLabel={`Learn more about ${name} Department`}
          />
        </div>
      </div>
    </article>
  );
};

export default DepartmentCard;
