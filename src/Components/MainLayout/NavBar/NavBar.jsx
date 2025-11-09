import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import SPILogo from "@components/UI/SPILogo/SPILogo";
import Header from "../Header/Header";

// React Icons
import {
  IoMdMenu,
  IoMdPeople,
  IoMdNotifications,
  IoIosSchool,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io";
import { FaHome, FaBookOpen, FaBuilding } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

// Nav menu data
import navMenuDataJson from "@data/HomePageJsonData/navMenu.json";

// Map icon names to corresponding components
const iconComponents = {
  FaHome: FaHome,
  FaBuilding: FaBuilding,
  FaBookOpen: FaBookOpen,
  IoIosSchool: IoIosSchool,
  IoMdPeople: IoMdPeople,
  IoMdNotifications: IoMdNotifications,
  PiStudentBold: PiStudentBold,
  LiaChalkboardTeacherSolid: LiaChalkboardTeacherSolid,
  MdConnectWithoutContact: MdConnectWithoutContact,
};

const NavBar = ({ show }) => {
  const [openMenu, setOpenMenu] = useState(false); // Mobile menu toggle
  const [openDeptMobile, setOpenDeptMobile] = useState(null); // Mobile dropdown toggle
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
        setOpenDeptMobile(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <header
      className={`fixed top-0 left-0 w-full
         z-40 transition-all duration-500 ease-in-out ${
           show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
         }`}
    >
      {/* Header Section */}
      <Header />

      {/* Navigation Bar */}
      <div className="bg-white  shadow-md">
        <nav className="flex flex-wrap justify-between items-center py-2 px-3 md:px-6">
          {/* Logo */}
          <div onClick={() => setOpenMenu(false)}>
            <SPILogo />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center justify-center gap-8">
            {navMenuDataJson.navMenuData.map((item) => {
              const hasSubMenu = item.subMenu && item.subMenu.length > 0;

              return (
                <li key={item.id} className="relative flex items-center">
                  {/* NavLink wrapper with group */}
                  <div className="group">
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive
                          ? "text-green-700 flex items-center gap-1"
                          : "text-black hover:text-green-700 flex items-center gap-1 "
                      }
                    >
                      <p>{item.text}</p>
                    </NavLink>

                    {/* Desktop Dropdown: only visible when NavLink hovered */}
                    {hasSubMenu && (
                      <ul
                        className="absolute left-0 top-full mt-2
                       bg-white shadow-md rounded-md opacity-0 invisible
                        group-hover:visible group-hover:opacity-100 transition-all duration-300 min-w-[150px] z-50"
                      >
                        {item.subMenu.map((sub) => (
                          <li
                            key={sub.id}
                            className="px-4 py-2 hover:bg-[#bbbdbc96] cursor-pointer"
                          >
                            <NavLink
                              to={sub.link}
                              className="text-black hover:text-green-700 block"
                            >
                              {sub.text}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="block lg:hidden text-3xl cursor-pointer">
            <button onClick={toggleMenu}>
              {openMenu ? <VscChromeClose /> : <IoMdMenu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed lg:hidden left-0 top-[124px] w-full bg-white 
            transition-all duration-500 ease-in-out z-40 ${
              openMenu
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
        >
          <ul>
            {navMenuDataJson.navMenuData.map((item) => {
              const hasSubMenu = item.subMenu && item.subMenu.length > 0;
              const isDeptOpen = openDeptMobile === item.id;

              return (
                <li key={item.id} className="border-b">
                  <div className="flex justify-between items-center p-4">
                    {/* Left: Parent link */}
                    <NavLink
                      to={item.link}
                      className="flex items-center gap-2"
                      onClick={() => setOpenMenu(false)}
                    >
                      {item.icon &&
                        React.createElement(iconComponents[item.icon])}
                      <span>{item.text}</span>
                    </NavLink>

                    {/* Right: Dropdown toggle */}
                    {hasSubMenu && (
                      <button
                        onClick={() =>
                          setOpenDeptMobile(isDeptOpen ? null : item.id)
                        }
                      >
                        {isDeptOpen ? (
                          <IoMdArrowDropup />
                        ) : (
                          <IoMdArrowDropdown />
                        )}
                      </button>
                    )}
                  </div>

                  {/* Mobile Sub-menu */}
                  {hasSubMenu && isDeptOpen && (
                    <ul className="bg-gray-100">
                      {item.subMenu.map((sub) => (
                        <li
                          key={sub.id}
                          className="px-6 py-2 hover:bg-[#bbbdbc96]"
                        >
                          <NavLink
                            to={sub.link}
                            className="text-black hover:text-green-700 block"
                            onClick={() => setOpenMenu(false)}
                          >
                            {sub.text}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
