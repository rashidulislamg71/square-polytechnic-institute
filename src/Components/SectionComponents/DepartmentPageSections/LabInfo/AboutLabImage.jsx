import React, { useState } from "react";
import ModalPopup from "../../../UI/ModalPopup/ModalPopup";

const AboutLabImage = ({ image1, image2 }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {/* Images */}
      <div className="relative pb-2 max-w-[450px] h-[350px] md:h-[450px] m-auto flex ">
        <div className="flex items-end">
          <img
            onClick={() => setSelectedImage(image1)}
            className=" shadow-2xl cursor-pointer rounded-2xl w-[180px] h-[180px] md:w-[270px] md:h-[220px] transition-transform hover:scale-105"
            src={image1}
            alt="Lab 1"
          />
        </div>
        <div className="flex absolute top-16 right-0 ">
          <img
            onClick={() => setSelectedImage(image2)}
            className=" cursor-pointer drop-shadow-2xl  rounded-2xl w-[200px] h-[180px] md:w-[280px] md:h-[240px]  transition-transform hover:scale-105"
            src={image2}
            alt="Lab 2"
          />
        </div>
      </div>

      {/* Reusable Modal*/}
      <ModalPopup
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Enlarged Lab"
            className="max-w-[90vw] max-h-[90vh] rounded-2xl shadow-2xl"
          />
        )}
      </ModalPopup>
    </div>
  );
};

export default AboutLabImage;
