
// ====================================================================
// useModal Hook
// --------------------------------------------------------------------
// This custom hook provides reusable logic for controlling modals.
// It manages modal open/close state, handles ESC key press to close,
// and locks the page scroll when the modal is open.
//
// Features:
//   openModal()   - Opens the modal
//   closeModal()  - Closes the modal
//   ESC key       - Closes the modal when "Escape" is pressed
//   Scroll Lock   - Disables background scrolling when open
//
// It uses:
//   - useState()     - To store modal open/close state
//   - useCallback()  - To memoize open/close functions
//   - useEffect()    - To manage keyboard and scroll behavior
//   - useScrollLock()- To handle scroll locking in a reusable way
// ====================================================================


import { useState, useCallback, useEffect } from "react";
import { useScrollLock } from "./useScrollLock";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Open Modal
  const openModal = useCallback(() => setIsOpen(true), []);

  // Close Modal
  const closeModal = useCallback(() => setIsOpen(false), []);

  // ESC Key Close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeModal]);

  // Scroll Lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  // Scroll Lock (reusable)
  useScrollLock(isOpen);

  return { isOpen, openModal, closeModal };
};
