

// ====================================================================
//  useAdmissionStatus Hook
// --------------------------------------------------------------------
// This custom hook checks whether the admission is currently active
// based on the configuration in `ADMISSION` (That's Components set the admission time).
//
// Features:
//   - Reads `ADMISSION.active` and `ADMISSION.expires` from config
//   - Returns a boolean `isActive`
//   - Automatically updates the status in real-time
//   - Cleans up interval when the component unmounts
//
// Usage:
//   const isAdmissionOpen = useAdmissionStatus();
//   return <div>{isAdmissionOpen ? "Admission Open" : "Admission Closed"}</div>
// ====================================================================


import { useEffect, useState } from "react";
import { ADMISSION } from "../config/admissionConfig";

export function useAdmissionStatus() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!ADMISSION.active || !ADMISSION.expires) {
      setIsActive(false);
      return;
    }

    const expireDate = new Date(ADMISSION.expires);

    const checkStatus = () => {
      const now = new Date();
      if (now < expireDate) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    checkStatus();
    const timer = setInterval(checkStatus, 1000);

    return () => clearInterval(timer);
  }, []);

  return isActive;
}
