
// ====================================================================
// useTooltip Hook
// --------------------------------------------------------------------
// This custom hook is used in the Institute Features component.
// It controls the tooltip behavior (showing details on hover).
// When the user hovers over an element, the tooltip opens,
// and when the mouse leaves, it closes.
// It provides three main functions:
//   - openTooltip()   → opens the tooltip
//   - closeTooltip()  → closes the tooltip
//   - toggleTooltip() → toggles the tooltip state (open/close)
// ====================================================================


import { useState } from "react";

export const useTooltip = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  const openTooltip = () => setIsOpen(true);
  const closeTooltip = () => setIsOpen(false);
  const toggleTooltip = () => setIsOpen((prev) => !prev);

  return { isOpen, openTooltip, closeTooltip, toggleTooltip };
};
