import React from "react";
import ActionButton from "../../../UI/ActionButton/ActionButton";
import { ContactNumber } from "../../../UI/ContactNumber/ContactNumber";

const InstituteInfo = ({ instituteInfo }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-[#122436]">
        {instituteInfo.welcomeMessage}
      </h3>
      <p className="text-gray-700">{instituteInfo.description}</p>

      <ul className="mt-1 space-y-2">
        {instituteInfo.details.map((detail, idx) => (
          <li key={idx}>
            <strong className="text-[#122436]">{detail.label}:</strong>{" "}
            {detail.label === "ফোন নম্বর" ? (
              <>
                <ContactNumber number={detail.value} />{" | "}
                <a
                  href="tel:+8801718043487"
                  className="text-blue-500 hover:underline"
                >
                  01718-043487
                </a>
              </>
            ) : (
              <span className="text-gray-700">{detail.value}</span>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <ActionButton
          text="বিস্তারিত পড়ুন..."
          link="/about"
          bg_color="bg-[#27ae60] hover:bg-green-600"
        />
      </div>
    </div>
  );
};

export default InstituteInfo;
