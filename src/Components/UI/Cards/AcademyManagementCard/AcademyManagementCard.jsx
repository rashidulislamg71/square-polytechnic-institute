import React from "react";

import { AnyEmail } from "@components/UI/Email/Email";
import { AnyContactNumber } from "@components/UI/ContactNumber/ContactNumber";

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
          <AnyContactNumber number={phone} className="text-[14px]" iconClass = "text-[14px]" />
          <AnyEmail email={email} className="text-[14px]" iconClass="text-[14px] "  />
        </div>
      </div>
    </div>
  );
};

export default AcademyManagementCard;
