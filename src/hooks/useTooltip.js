


import { useState } from "react";

export const useTooltip = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const openTooltip = () => setIsOpen(true);
  const closeTooltip = () => setIsOpen(false);
  const toggleTooltip = () => setIsOpen((prev) => !prev);

  return { isOpen, openTooltip, closeTooltip, toggleTooltip };
};
