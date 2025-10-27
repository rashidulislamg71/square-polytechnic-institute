import React, { useEffect, useState } from "react";
import NavBar from "@components/MainLayout/NavBar/NavBar";
import ScrollToTop from "@components/ScrollToTop/ScrollToTop";

const HeaderAndNavScrollAnimation = () => {
  // State to show or hide the header and navbar
  const [showHeaderAndNavBar, setShowHeaderAndNavBar] = useState(true);

  // State to store the last Y position of the scroll
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Debounced scroll handler
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If the scroll difference is too small, ignore it
      if (Math.abs(currentScrollY - lastScrollY) < 20) return;

      if (currentScrollY > lastScrollY) {
        // User is scrolling down  Hide Header/NavBar
        setShowHeaderAndNavBar(false); //hidde
      } else {
        // User is scrolling up Show Header/NavBar
        setShowHeaderAndNavBar(true); 
      }

      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };
    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      <ScrollToTop />
      <NavBar show={showHeaderAndNavBar} scrollController={lastScrollY} />
    </>
  );
};

export default HeaderAndNavScrollAnimation;
