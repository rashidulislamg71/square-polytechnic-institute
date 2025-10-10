
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
