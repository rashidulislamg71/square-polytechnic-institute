import React from "react";
import { GoX } from "react-icons/go";

const ModalPopup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        {children}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer text-2xl font-bold bg-red-500 text-white px-2
         rounded"
        >
          <GoX />
        </button>
      </div>
    </div>
  );
};

export default ModalPopup;
