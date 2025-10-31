import React from "react";
import { getShortTextByChar } from "../../utils/textShowControlUtils";

function StudentsTestimonialCard({
  index,
  image,
  name,
  department,
  session,
  comments,
  onSeeMore,
}) {
  const { shortText, isLong } = getShortTextByChar(comments, 80);

  return (
    <section>
      <div
        className="flex md:gap-4 gap-2 bg-white rounded shadow-md hover:shadow-xl 
    transition-shadow duration-300 p-2 max-w-[400px] md:max-w-[500px]
     max-h-[260px] md:max-h-[300px]"
      >
        {/* Profile Image */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover
           border-3 border-gray-300"
          />
        </div>

        {/* Text Section */}
        <div
          className="flex flex-col border-l-2 md:border-l-3 border-amber-400 pl-2 
      md:pl-4 justify-center"
        >
          <div>
            <h4 className="text-green-600">{name}</h4>
            <p className="text-xs text-gray-500">
              {department} | {session}
            </p>
          </div>

          <div className="md:mt-2">
            <span className="text-gray-600 text-sm">{`“${shortText}”`}</span>{" "}
            {isLong && (
              <button
                onClick={() => onSeeMore(index)}
                className="text-amber-500 text-xs font-semibold 
          mt-1 hover:underline self-start cursor-pointer"
              >
                See More
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudentsTestimonialCard;
