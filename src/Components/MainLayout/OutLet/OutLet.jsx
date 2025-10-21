import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import HeaderAndNavScrollAnimation from "../../Animation/HeaderAndNavScrollAnimation/HeaderAndNavScrollAnimation";
import TabTitle from "../../TabTitle/TabTitle";

const OutLet = () => {
  const location = useLocation(); // Get the current URL path to determine the page

  const isHomePage = location.pathname === "/"; // Check if the current page is the home page

  // 👉 Dynamically change the page title based on the URL path
  const path =
    location.pathname === "/" ? "Home" : location.pathname.replace("/", ""); // If on the home page, set title as "Home", otherwise remove "/" and use the rest of the path
  const formattedTitle = path.charAt(0).toUpperCase() + path.slice(1); // Capitalize the first letter of the title (e.g., "about" becomes "About")
  TabTitle(formattedTitle); // Call the custom Title function to update the page title in the browser

  return (
    <div
      className={`${!isHomePage ? "mt-[124px]" : ""}  mt-[154px]`}
    >
      {/* This component handles the scroll animation for the header and navbar */}
      <HeaderAndNavScrollAnimation />

      <Outlet />
      <Footer />
    </div>
  );
};

export default OutLet;

// 🔍 English Explanation:
// useLocation: This hook is used to get the current URL path. It helps determine which page the user is on.

// Dynamic Page Title:

// If the user is on the homepage (/), the title is set to "Home".
// If the user is on any other page, it removes the "/" from the start of the URL path and uses that as the title.
// The first letter of the title is capitalized using charAt(0).toUpperCase().
// Finally, the title is updated in the browser tab using the Title(formattedTitle) function.
// Outlet: Renders the child route content based on the active route.
// Footer: This is a reusable component that will be displayed on every page.

// 🔍 বাংলা ব্যাখ্যা:
// useLocation: এই হুকটি বর্তমান URL পাথ নিয়ে আসে। এর মাধ্যমে আমরা জানি ইউজার কোন পেইজে আছে।

// ডাইনামিক পেইজ টাইটেল:
// যদি ইউজার হোমপেজে থাকে (/), তবে টাইটেল "Home" হবে।
// অন্য কোনো পেইজে থাকলে, URL এর প্রথম "/" বাদ দিয়ে বাকি অংশটুকু টাইটেল হিসেবে সেট করা হবে।
// টাইটেলের প্রথম অক্ষরটি বড় করা হচ্ছে charAt(0).toUpperCase() দিয়ে।
// শেষে, Title(formattedTitle) ফাংশনটি ব্যবহার করে ব্রাউজারের ট্যাবের টাইটেল আপডেট করা হচ্ছে।

// Outlet: এটি রাউট অনুযায়ী পেইজের কনটেন্ট দেখায়।
// Footer: এটি একটি রিইউজেবল কম্পোনেন্ট যা প্রতিটি পেইজে দেখা যাবে।
