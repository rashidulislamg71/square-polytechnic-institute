import React from "react";

import { AnyEmail } from "@components/UI/Email/Email";
import { AnyContactNumber } from "@components/UI/ContactNumber/ContactNumber";

const AcademyManagementCard = ({ image, name, designation, phone, email }) => {
  return (
    <div className="w-[350px] bg-green-200 p-6 rounded ">
      <div>
        {/* <img
          src={image}
          alt={name}
          className="w-[100px] h- object-cover border-4 border-gray-100 shadow"
        /> */}
      </div>
      <div>
        <div className="border-b-1 border-gray-300 w-full mb-3">
          <h3 className=" font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-700">{designation}</p>
        </div>

        <div className="text-gray-700 text-[15px] space-y-1">
          <AnyContactNumber number={phone} />
          <AnyEmail email={email} />
        </div>
      </div>
    </div>
  );
};

export default AcademyManagementCard;
