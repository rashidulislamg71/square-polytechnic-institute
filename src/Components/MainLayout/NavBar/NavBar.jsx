// Import necessary hooks and components
import React, { useEffect, useRef, useState } from "react";
import { NavLink} from "react-router-dom";
import { VscChromeClose } from "react-icons/vsc";
import SPILogo from "../../UI/SPILogo/SPILogo";
import styles from "./NavBar.module.css";

// Import React Icons
import {
  IoMdMenu,
  IoMdPeople,
  IoMdNotifications,
  IoIosSchool,
} from "react-icons/io";
import { FaHome, FaBookOpen, FaBuilding } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";

// Import menu data from JSON file
import navMenuDataJson from "@data/HomePageJsonData/navMenu.json";
import Header from "../Header/Header";

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

// NavBar component receives a prop 'show' for NavBar scroll animation
const NavBar = ({ show }) => {
  const [openMenu, setOpenMenu] = useState(false); // For mobile menu toggle

  const menuRef = useRef(null); // To detect click outside

  // Close menu when clicking outside the menu (mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Toggle Menu Function (menu open & close)
  const openMenuHandeling = () => {
    setOpenMenu(!openMenu);
  };

  // Close Menu Function
  const closeMenuHandeling = () => {
    setOpenMenu(false);
  };

  return (
    <>
      {/* Sticky Header Section */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all  duration-500 ease-in-out ${
          show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`} // If the window is scrolled to the top, then show the menu & when scrolled bottom, then hide the menu.
      >
        {/* Header component import heare (contact info and addmisson btn)*/}
        <div>
          <Header />
        </div>

        {/* Navigation Bar */}
        <div className="bg-white shadow-md">
          <nav className="flex flex-wrap justify-between items-center py-2 px-3 md:px-6">
            {/* Logo Section */}
            <div onClick={closeMenuHandeling}>
              
                <SPILogo />
          
            </div>

            {/* Big Screen Menu */}
            <div className="md:flex items-center">
              <ul className="hidden md:flex items-center justify-center gap-8">
                {navMenuDataJson.navMenuData.map((item) => {
                  return (
                    <li
                      key={item.id}
                      onClick={closeMenuHandeling}
                      className={`flex items-center text-[15px] ${
                        item.id === 9
                          ? "lg:border lg:ml-6 lg:rounded lg:px-2 lg:py-1 hover:border-[#1f8383]"
                          : ""
                      }`}
                    >
                      <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                          isActive
                            ? `text-[#25755c] flex items-center gap-1 border-b ${
                                item.id === 9
                                  ? "lg:bg-transparent lg:border-none"
                                  : ""
                              }`
                            : "text-black hover:text-[#1f8383] flex items-center gap-1"
                        }
                      >
                        <p className={`${styles.custom_font_size}`}>
                          {item.text}
                        </p>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Menu Toggle Icon */}
              <div className="block md:hidden text-3xl cursor-pointer">
                <button onClick={openMenuHandeling}>
                  {openMenu ? <VscChromeClose /> : <IoMdMenu />}
                </button>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div>
          <ul
            ref={menuRef}
            className={
              openMenu
                ? "fixed md:hidden left-0 top-[124px] border-t border-gray-200 w-full bg-[#ffff] ease-in-out duration-500 opacity-100 translate-x-0"
                : "fixed md:hidden top-[124px] w-full bg-[#ffff] ease-in-out duration-500 opacity-0 -translate-x-full"
            }
          >
            {navMenuDataJson.navMenuData.map((item) => {
              const Icon = iconComponents[item.icon]; // Dynamic icon shows
              return (
                <li
                  key={item.id}
                  onClick={closeMenuHandeling}
                  className="p-4 border-b hover:bg-[#bbbdbc96] duration-300 hover:text-black cursor-pointer border-gray-600"
                >
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#00df9a] font-bold flex items-center gap-1"
                        : "text-black hover:text-[#00df9a] flex items-center gap-1"
                    }
                  >
                    <div className="flex justify-center items-center gap-2">
                      {Icon && <Icon />} 
                      <p>{item.text}</p>
                    </div>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default NavBar;
