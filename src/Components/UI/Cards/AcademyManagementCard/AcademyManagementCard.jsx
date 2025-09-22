import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import GeneralIcons from "../../../Icons/GeneralIcons/GeneralIcons"; // Assuming you have this component

const AcademyManagementCard = ({ image, name, designation, phone, email }) => {
  return (
    <div className="flex items-center gap-1 text-left bg-green-100 rounded max-w-md p-4 shadow-md mb-4">
      <div>
        <img
          src={image}
          alt={name}
          className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-gray-100 shadow"
        />
      </div>
      <div>
        <div>
          <h3 className=" font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500">{designation}</p>
        </div>

        <div className="text-gray-600 text-[15px] space-y-1">
          <GeneralIcons
            icon={FaPhone}
            label={phone}
            iconSize={14}
            textSize={14}
          />
          <GeneralIcons
            icon={FaEnvelope}
            label={email}
            iconSize={14}
            textSize={14}
          />
        </div>
      </div>
    </div>
  );
};

export default AcademyManagementCard;
