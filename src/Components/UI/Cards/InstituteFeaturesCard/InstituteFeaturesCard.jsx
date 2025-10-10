import SubTitle from "../../../Shared/Titles/SubTitle/SubTitle";
import * as FaIcons from "react-icons/fa";

const InstituteFeatureCard = ({ icon, title, description }) => {
  const IconComponent = FaIcons[icon]; // ডাইনামিক আইকন

  return (
    <div className="bg-white shadow-md rounded-xl p-3 text-center 
     hover:bg-green-50">
      {/* Dynamic Icon */}
      <div className="flex justify-center mb-3">
        {IconComponent && (
          <IconComponent className="text-4xl text-green-600 transition-transform duration-300 hover:scale-110" />
        )}
      </div>

      {/* Title */}
      <SubTitle subTitle={title}  />

      {/* Description */}
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};

export default InstituteFeatureCard;
