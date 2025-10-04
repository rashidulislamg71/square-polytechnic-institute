import React from "react";

function StudentsTestimonialCard({
  image,
  name,
  department,
  session,
  comments,
}) {
  return (
    <div className="flex md:gap-4 gap-2 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-2 max-w-[400px] md:max-w-[500px] max-h[260px] md:max-h[300px]">
      {/* Profile Image */}
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-3 border-gray-300"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col border-l-2 md:border-l-3 border-amber-400 pl-2 
      md:pl-4 justify-center">
        <div className="">
          <h4 className="text-green-600">{name}</h4>
          <p className="text-sm text-gray-500">
            {department} | {session}
          </p>
        </div>
        <p className=" md:mt-2 text-gray-600 italic text-[14px]">
          {`“${comments}”`}
        </p>
      </div>
    </div>
  );
}

export default StudentsTestimonialCard;
