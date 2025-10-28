
// ====================================================================
// useScrollLock Hook
// --------------------------------------------------------------------
// This custom hook is used to control (lock/unlock) page scrolling.
// When 'lock' is true page scrolling is disabled (useful for modals, lightbox,
//  popups, etc.).
// When 'lock' is false → scrolling is enabled again.
// 
// It automatically restores the scroll state when the component unmounts.
// ====================================================================



import { useEffect } from "react";

export const useScrollLock = (lock = false) => {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lock]);
};
