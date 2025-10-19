import { FiPhone } from "react-icons/fi";
import SubTitle from "../../../Shared/Titles/SubTitle/SubTitle";

export const GeneralCard = ({
  title,
  subTitle,
  description,
  isDescriptionArray,
  icon,
  parentClassName = "",
  iconTitleClassName = "",
  descriptionClassName = "",
}) => {
  return (
    <div
      className={` m-auto bg-white shadow-md rounded p-3
        ${parentClassName}`}
    >
      {/* Title Section */}
      {title && (
        <h2
          className={`text-2xl font-bold text-gray-800 mb-2 ${iconTitleClassName}`}
        >
          {title}
        </h2>
      )}
      {/* Icon and Subtitle Section */}
      <span className="text-3xl text-green-600  "> {icon}</span>
      <SubTitle className="text-lg" subTitle={subTitle} />
      {/* Description Section */}
      <div className={`text-left mt-3 text-gray-600
         ${descriptionClassName}`}>
        {isDescriptionArray && (
          <>
            {isDescriptionArray.map((info, i) => (
              <p key={i}>
                <span className="font-medium
                 text-gray-800">{info.label}:</span>
                {info.value}
              </p>
            ))}
          </>
        )}
        {description}
      </div>
    </div>
  );
};
