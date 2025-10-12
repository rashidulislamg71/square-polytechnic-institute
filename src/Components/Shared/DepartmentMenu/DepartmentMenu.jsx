import React from "react";
import { NavLink } from "react-router-dom";
import "./DepartmentMenu.css";
import { BsStars } from "react-icons/bs";
  const departmentMenu = [
    {
      id: 1,
      text: "ইলেকট্রিক্যাল",
      url: "/electrical_page",
    },
    {
      id: 2,
      text: "কম্পিউটার",
      url: "/computer_page",
    },
    {
      id: 3,
      text: "সিভিল",
      url: "/civil_page",
    },
    {
      id: 4,
      text: "টেক্সটাইল",
      url: "/textile_page",
    },
    {
      id: 5,
      text: "মেকানিক্যাল",
      url: "/mechanical_page",
    },
  ];
const DepartmentMenu = () => {
  return (
      <div >
        <ul className="flex flex-wrap items-center justify-center lg:justify-evenly  gap-4">
          {departmentMenu.map((item) => {
            return (
              <li
                key={item.id}
                className=" drop-shadow-[0_2px_2px_rgba(52,73,94,1)] bg-orange-400 
                py-1 px-4 flex items-center font-bold  text-[16px] lg:text-lg cursor-pointer "
              >
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    isActive
                      ? `text-[#10573f]  `
                      : " text-[#ecf0f1] hover:text-[#2c3e50]"
                  }
                >
                  <p>{item.text}</p>
                </NavLink>

                {/* Star animation */}
                  <div className="star-anim">
                    <span className="star animate-star">
                      <BsStars />
                    </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
  );
};

export default DepartmentMenu;
