

import React from "react";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaTelegramPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socialMediaData = [
  {
    id: 1,
    name: "Facebook",
    icon: <FaFacebookSquare />,
    color: "#1877F2",
    link: "#",
  },
  {
    id: 2,
    name: "YouTube",
    icon: <FaYoutubeSquare />,
    color: "#FF0000",
    link: "#",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: <FaLinkedin />,
    color: "#0A66C2",
    link: "#",
  },
  {
    id: 4,
    name: "Instagram",
    icon: <FaInstagramSquare />,
    color: "#D81B60",
    link: "#",
  },
  {
    id: 5,
    name: "Telegram",
    icon: <FaTelegramPlane />,
    color: "#0088CC",
    link: "#",
  },
];


export const SocialIcons = () => (
  <div className="flex md:flex-col flex-wrap justify-center gap-4">
    {socialMediaData.map((social) => (
      <Link
        key={social.id}
        to={social.link} 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 group"
      >
        {/* icon bg */}
        <div
          className="p-2 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: social.color }}
        >
          <span className="text-white text-xl">{social.icon}</span>
        </div>

        {/* icon name */}
        <span className="text-sm text-gray-200 group-hover:underline">
          {social.name}
        </span>
      </Link>
    ))}
  </div>
);

// Icon + Name (responsive: mobile = icon only, desktop = icon + name)
export const SocialIconAndName = () => (
  <div className="flex flex-wrap justify-center gap-2 md:gap-4">
    {socialMediaData.map((social) => (
      <Link
        key={social.id}
        to={social.link}
        target="_blank"
        rel="noopener noreferrer"
        // phone rounded-full, md to border + rounded-md
        className="flex items-center justify-center p-3 md:px-3 md:py-2 rounded-full md:rounded border md:border-gray-400  "
      >
        <div className="hover:scale-110 flex items-center transition-transform duration-300">
          <span className="text-[25px]" style={{ color: social.color }}>
            {social.icon}
          </span>
          {/* Mobile  hidden, md screen+  visible */}
          <span className="font-medium hidden md:inline ml-2">
            {social.name}
          </span>
        </div>
      </Link>
    ))}
  </div>
);
