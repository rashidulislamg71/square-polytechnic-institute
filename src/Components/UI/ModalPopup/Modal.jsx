import React from "react";
import { GoX } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, children, maxWidth = "max-w-3xl" }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={`bg-white rounded-xl w-auto ${maxWidth} p-0 md:p-0 relative max-h-[95vh] overflow-y-auto shadow-xl`}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Close Button */}
            <button
              className="sticky top-3 left-200 text-red-500 hover:text-gray-700 text-2xl cursor-pointer"
              onClick={onClose}
            >
              <GoX />
            </button>

            {/* Modal Content */}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
