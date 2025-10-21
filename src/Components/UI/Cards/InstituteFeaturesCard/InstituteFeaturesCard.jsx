// import SubTitle from "../../../Shared/Titles/SubTitle/SubTitle";
// import * as FaIcons from "react-icons/fa";

// const InstituteFeatureCard = ({ icon, title, description }) => {
//   const IconComponent = FaIcons[icon]; // Dynamically get the icon component

//   return (
//     <div className="bg-white shadow-md rounded-xl p-3 text-center 
//      hover:bg-green-50">
//       {/* Dynamic Icon */}
//       <div className="flex justify-center mb-3">
//         {IconComponent && (
//           <IconComponent className="text-4xl text-green-600 transition-transform duration-300 hover:scale-110" />
//         )}
//       </div>

//       {/* Title */}
//       <SubTitle subTitle={title}  />

//       {/* Description */}
//       <p className="text-gray-600 text-sm mt-2">{description}</p>
//     </div>
//   );
// };

// export default InstituteFeatureCard;


// components/UI/Cards/InstituteFeaturesCard/InstituteFeaturesCard.jsx
import React from "react";
import SubTitle from "@components/Shared/Titles/SubTitle/SubTitle";
import * as FaIcons from "react-icons/fa";
import Tooltip from "@components/UI/Tooltip/Tooltip"; 

const InstituteFeatureCard = ({ icon, title, description }) => {
  const IconComponent = FaIcons[icon];
  console.log(description);

  return (
    <Tooltip text={description}>
      <div className="m-auto">
        {/* Icon */}
        <div className="flex justify-center items-center gap-2 ">
          {IconComponent && (
            <IconComponent className="text-2xl border-1 p-1 rounded text-green-600 transition-transform duration-300 hover:scale-110" />
          )}
        <SubTitle subTitle={title} className="text-[16px] cursor-pointer "/>
        </div>


      </div>
    </Tooltip>
  );
};

export default InstituteFeatureCard;