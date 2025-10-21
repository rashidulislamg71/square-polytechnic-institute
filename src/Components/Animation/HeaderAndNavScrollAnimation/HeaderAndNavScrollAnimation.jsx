import React, { useEffect, useState } from "react";
import NavBar from "@components/MainLayout/NavBar/NavBar";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";
import  DepartmentMenu  from '@components/Shared/DepartmentMenu/DepartmentMenu';

const HeaderAndNavScrollAnimation = () => {
  // State to track whether to show or hide the header and navbar
  const [showHeaderAndNavBar, setShowHeaderAndNavBar] = useState(true);

  // State to store the last Y position of the scroll
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Debounced scroll handler
    const handleScroll =() => {
      const currentScrollY = window.scrollY;

      // If the scroll difference is too small, ignore it
      if (Math.abs(currentScrollY - lastScrollY) < 20) return;
      
      if (currentScrollY > lastScrollY) {
        // User is scrolling down → Hide Header/NavBar
        setShowHeaderAndNavBar(false); //hidde
      } else {
        // User is scrolling up → Show Header/NavBar
        setShowHeaderAndNavBar(true); //show
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    }; 
    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
    <ScrollToTop />
      {/* Pass the visibility state as a prop to NavBar */}
      <NavBar show={showHeaderAndNavBar} scrollController = {lastScrollY} />
      {/* <DepartmentMenu show={showHeaderAndNavBar} scrollController = {lastScrollY} /> */}
    </>
  );
};

export default HeaderAndNavScrollAnimation;

// 📄 Component Name: HeaderAndNavScrollAnimation
// 🔍 Purpose | উদ্দেশ্য
// This component shows or hides the Header and NavBar based on the user's scroll direction (up/down), using a debounced scroll listener for performance optimization.

// এই কম্পোনেন্টটি ইউজার যদি স্ক্রল করে উপরের দিকে যায়, তাহলে Header ও NavBar দেখায়, আর নিচে নামলে সেটি লুকিয়ে ফেলে। এতে performance ভালো রাখতে debounce ব্যবহার করা হয়েছে।

// showHeaderAndNavBar: Tracks whether to show or hide the NavBar.
// lastScrollY: Stores the last scroll position to compare with the new position.

// 🔁 ব্যাখ্যা (Bangla):
// এই দুইটি state দিয়ে track করা হয় ইউজার নিচে নেমেছে না উপরে উঠেছে, আর সেই অনুযায়ী NavBar দেখা যাবে না লুকাবে।

// 📘 English Explanation:

// We detect scroll using window.scrollY.
// If scrolling down → hide header (false).
// If scrolling up → show header (true).
// The debounce ensures the scroll handler doesn't run too often (runs every 80ms max).

// 📗 বাংলা ব্যাখ্যা:

// ইউজার স্ক্রল করলে window.scrollY দিয়ে position নেওয়া হয়।
// যদি নিচে যায় → Header/NavBar লুকানো হয়।
// যদি উপরে আসে → Header/NavBar আবার দেখানো হয়।
// debounce দিয়ে করা হয়েছে যাতে বারবার event trigger না হয় (৮০ms পরপর কাজ করে)।
