import React from "react";
import { FaEnvelope } from "react-icons/fa";

export const FixedEmail = ({ className = "text-gray-600" }) => {
  return (
    <div className="flex gap-2 items-center">
      <FaEnvelope className="text-[15px] text-green-600" />
      <a
        className={` hover:text-green-300 ${className}`}
        href="mailto:squarepoly@gmail.com"
      >
        squarepoly@gmail.com
      </a>
    </div>
  );
};

export const AnyEmail = ({
  email,
  className = "",
  iconClass = "text-green-600 text-[16px]",
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`${iconClass}`}>
        <FaEnvelope />
      </div>
      <a
        href={`mailto:${email}`}
        className={`font-semibold hover:text-blue-500 ${className}`}
      >
        {email}
      </a>
    </div>
  );
};
