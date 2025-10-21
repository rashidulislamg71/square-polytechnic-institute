


import ActionButton from "@components/UI/ActionButton/ActionButton";
import { useNavigate } from "react-router-dom";

const DepartmentCard = ({ name, shortName, image, description, url }) => {
  const navigate = useNavigate();

  const handleDepartmentClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-white md:w-[290px] rounded-md hover:drop-shadow-lg flex flex-col cursor-pointer">
      {/* 🔹 Image Click */}
      <img
        onClick={() => handleDepartmentClick(url)}
        src={image}
        alt={name}
        className="w-full h-32 object-cover rounded-t-md transition-transform duration-200 hover:scale-105"
      />

      <div className="px-4 pb-6 flex-1 flex flex-col justify-between">
        {/* 🔹 Title & Description Click */}
        <div onClick={() => handleDepartmentClick(url)} className="cursor-pointer">
          <h3 className="text-md font-semibold mt-3">
            {name} <span className="text-gray-400">({shortName})</span>
          </h3>
          <small className="text-sm text-gray-600 mt-1">{description}</small>
        </div>

        {/* 🔹 Button */}
        <div className="mt-6">
          <ActionButton
            text="বিস্তারিত পড়ুন..."
            bg_color="bg-[#27ae60]"
            link={url}
            fontSize="text-[14px]"
          />
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
