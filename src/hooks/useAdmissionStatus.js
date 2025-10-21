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

//    
//     checkStatus();

//     
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

    checkStatus(); 
    const timer = setInterval(checkStatus, 1000); 

    return () => clearInterval(timer);
  }, []);

  return isActive;
}
