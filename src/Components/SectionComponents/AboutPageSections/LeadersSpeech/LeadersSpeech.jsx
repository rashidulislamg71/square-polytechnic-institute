import React from "react";
import Modal from "@components/UI/ModalPopup/Modal";
import { useModal } from "@hooks/useModal";
import { getShortText } from "../../../utils/textShowControlUtils";

const placeholderImg =
  "https://via.placeholder.com/400x250.png?text=No+Image+Available";

const LeadersSpeech = ({ leader }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const { shortText, isLong } = getShortText(leader.speech, 30);

  return (
    <>
      {/* Card Section */}
      <div
        className="bg-white rounded-xl shadow-sm hover:shadow-xl overflow-hidden 
        transition-all duration-500 border border-gray-100 hover:border-green-300 group"
      >
        {/* Image Section */}
        <div className="relative h-[200px] w-full overflow-hidden rounded-t-xl">
          <img
            src={leader.image || placeholderImg}
            alt={leader.name || "Leader"}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-105
             transition-transform duration-700"
          />
          {/* Overlay Gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/40 
          to-transparent"
          ></div>
        </div>

        {/* Content */}
        <div className="p-5 text-center">
          <h3 className="text-green-800 font-semibold text-lg md:text-xl mb-1">
            {leader.title}
          </h3>
          <p className="text-gray-800 font-bold text-base md:text-lg mb-3">
            {leader.name}
          </p>

          <p
            className="text-[15px] text-gray-700 italic text-left border-t
             border-orange-400 pt-3"
          >
            {isLong ? (
              <>
                {shortText}...
                <button
                  onClick={openModal}
                  className="ml-2 text-blue-500 font-medium hover:text-blue-700
                   underline transition-colors"
                >
                  আরও পড়ুন
                </button>
              </>
            ) : (
              leader.speech
            )}
          </p>
        </div>
      </div>

      {/* Modal Popup */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        <div className="text-center px-4">
          <img
            src={leader.image || placeholderImg}
            alt={leader.name}
            className="w-36 h-36 mx-auto rounded-full border-4 border-green-200 shadow-md mb-4 object-cover"
          />

          <h3 className="text-xl font-bold text-green-900 mb-1">
            {leader.title}
          </h3>
          <p className="font-medium text-gray-700 mb-4">{leader.name}</p>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line text-justify">
            {leader.speech}
          </p>
        </div>
      </Modal>
    </>
  );
};

export default LeadersSpeech;
