import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import HeaderAndNavScrollAnimation from "../../Animation/HeaderAndNavScrollAnimation/HeaderAndNavScrollAnimation";
import TabTitle from "../../TabTitle/TabTitle";

const OutLet = () => {
  const location = useLocation(); // Get the current URL path to determine the page

  const isHomePage = location.pathname === "/"; // Check if the current page is the home page

  //Dynamically change the page title based on the URL path
  const path =
    location.pathname === "/" ? "Home" : location.pathname.replace("/", ""); // If on the home page, set title as "Home", otherwise remove "/" and use the rest of the path
  const formattedTitle = path.charAt(0).toUpperCase() + path.slice(1); // Capitalize the first letter of the title (e.g., "about" becomes "About")
  TabTitle(formattedTitle); // Call the custom Title function to update the page title in the browser

  return (
    <div className={`${!isHomePage ? "mt-[124px]" : ""}  mt-[154px]`}>
      {/*  handles the scroll animation */}
      <HeaderAndNavScrollAnimation />

      <Outlet />
      <Footer />
    </div>
  );
};

export default OutLet;
