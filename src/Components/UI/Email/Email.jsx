


export const FixedEmail = ({ className = "text-gray-600" }) => {
  return (
    <div>
      <a
        className={` hover:text-green-300 ${className}`}
        href="mailto:squarepoly@gmail.com"
      >
        squarepoly@gmail.com
      </a>
    </div>
  );
};

import React from "react";
import { FaEnvelope } from "react-icons/fa";

/**
 * AnyEmail Component
 * Reusable component to display any email address.
 * Props:
 *  - email: string (required) → email address to display
 *  - className: string (optional) → additional Tailwind classes
 */
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
