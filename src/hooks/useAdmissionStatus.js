// // src/hooks/useAdmissionStatus.js
// import { useEffect, useState } from "react";
// import { ADMISSION } from "../config/admissionConfig";

// export function useAdmissionStatus() {
//   const [isActive, setIsActive] = useState(false);

//   useEffect(() => {
//     if (!ADMISSION.active || !ADMISSION.expires) {
//       setIsActive(false);
//       return;
//     }

//     const checkStatus = () => {
//       const now = new Date();
//       const expireDate = new Date(ADMISSION.expires);
//       setIsActive(now < expireDate);
//     };

//     // প্রথমবার চেক করব
//     checkStatus();

//     // প্রতি 1 মিনিট পর পর চেক করবে
//     const timer = setInterval(checkStatus, 1000 * 60);

//     return () => clearInterval(timer);
//   }, []);

//   return isActive;
// }


// src/hooks/useAdmissionStatus.js
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

    checkStatus(); // প্রথমবার run
    const timer = setInterval(checkStatus, 1000); // প্রতি ১ সেকেন্ডে চেক

    return () => clearInterval(timer);
  }, []);

  return isActive;
}
