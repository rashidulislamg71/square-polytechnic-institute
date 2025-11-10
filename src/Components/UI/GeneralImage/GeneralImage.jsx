import React, { useState } from "react";
import ModalPopup from "@components/UI/ModalPopup/ModalPopup";

// Single Big size image for a sections
export const SingleBigImage = ({
  image,
  alt = "Section Image",
  className = "",
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <img
        onClick={() => setSelectedImage(image)}
        src={image}
        alt={alt}
        className={`w-full md:w-[450px] lg:w-[560px] h-[280px] md:h-[350px] lg:h-[370px] 
          md:rounded 
         object-cover 
        ${className}`}
      />

      {/* Reusable Modal*/}
      <ModalPopup
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Enlarged Lab"
            className="md:max-w-[800px] md:max-h-[600px] rounded shadow-2xl"
          />
        )}
      </ModalPopup>
    </div>
  );
};

export const DoubleMediumImage = ({ image1, image2 }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      {/* Images */}
      <div className="relative pb-2 max-w-[450px] h-[350px] md:h-[450px] m-auto flex ">
        <div className="flex items-end">
          <img
            onClick={() => setSelectedImage(image1)}
            className=" shadow-2xl cursor-pointer rounded-2xl w-[200px]
             h-[180px] md:w-[280px] md:h-[230px] transition-transform hover:scale-105"
            src={image1}
            alt="Lab 1"
          />
        </div>
        <div className="flex absolute top-16 right-0 ">
          <img
            onClick={() => setSelectedImage(image2)}
            className=" cursor-pointer drop-shadow-2xl rounded-2xl
             w-[200px] h-[180px] md:w-[290px] md:h-[250px]  transition-transform hover:scale-105"
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
            className="md:max-w-[800px] md:max-h-[600px] md:rounded shadow-2xl"
          />
        )}
      </ModalPopup>
    </div>
  );
};
