
import { useEffect } from "react";

export const useScrollLock = (lock = false) => {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup: আবার আগের অবস্থা ফিরিয়ে দেবে
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lock]);
};
