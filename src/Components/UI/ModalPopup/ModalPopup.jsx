import React from "react";
import { GoX } from "react-icons/go";

const ModalPopup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative">
        {children}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-600 cursor-pointer text-2xl font-bold text-white 
          py-1 px-2 rounded"
        >
          <GoX />
        </button>
      </div>
    </div>
  );
};

export default ModalPopup;
