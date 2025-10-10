
import React from "react";
import Modal from "../../../UI/ModalPopup/Modal";
import { useModal } from "../../../../hooks/useModal";

const LeadersSpeech = ({ leader, previewWords = 30 }) => {
  const { isOpen, openModal, closeModal } = useModal();

  const words = leader.speech.split(" ");
  const showReadMore = words.length > previewWords;
  const shortText = words.slice(0, previewWords).join(" ");

  return (
    <>
      <div className="text-center bg-white p-2 md:p-4">
        {leader.image && (
          <img
            src={leader.image}
            alt={leader.name}
            className="h-[160px] w-[250px] mx-auto rounded mb-4 object-cover"
          />
        )}
        <div>
          <h3 className="font-semibold mt-[-10px]">{leader.title}</h3>
          <p className="text-sm text-gray-700">{leader.name}</p>
        </div>
        <p className="text-xs italic border-t-2 border-orange-400 text-gray-600 mt-2 text-justify pt-1">
          {showReadMore ? (
            <>
              {shortText}...
              <button
                onClick={openModal}
                className="ml-2 text-blue-500 underline hover:text-blue-700"
              >
                আরও পড়ুন
              </button>
            </>
          ) : (
            leader.speech
          )}
        </p>
      </div>

      {/* Animated Modal */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        {leader.image && (
          <img
            src={leader.image}
            alt={leader.name}
            className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-gray-200 mb-4"
          />
        )}
        <h3 className="text-xl font-bold text-center mb-2">{leader.title}</h3>
        <p className="text-center font-medium text-gray-700 mb-4">
          {leader.name}
        </p>
        <p className="text-gray-600 whitespace-pre-line">{leader.speech}</p>
      </Modal>
    </>
  );
};

export default LeadersSpeech;
