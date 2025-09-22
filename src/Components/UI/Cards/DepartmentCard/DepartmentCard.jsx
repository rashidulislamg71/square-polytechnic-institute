import ActionButton from "../../ActionButton/ActionButton";
import { Link, useNavigate } from "react-router-dom";
// import ContentTitle from "../ContentTitle/ContentTitle";

const DepartmentCard = ({ name, shortName, image, description, url }) => {
  const nevigat = useNavigate();

  const handledepartmentClick = (shortName) => {
    nevigat(`/admission/${shortName}`);
  };

  return (
    <div>
      <div>
        <div
          onClick={handledepartmentClick}
          className="bg-white md:w-[290px] rounded-md hover:drop-shadow-lg flex flex-col cursor-pointer "
        >
          <img
            src={image}
            alt={name}
            className="w-full h-32 object-cover rounded-t-md"
          />
          <div className="px-4  pb-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-md font-semibold mt-3">
                {name} <span className="text-gray-400">({shortName})</span>
              </h3>
              <small className="text-sm text-gray-600 mt-1">
                {description}
              </small>
            </div>
            <div className="mt-6 ">
              <ActionButton
                text=" বিস্তারিত পড়ুন..."
                bg_color="bg-[#27ae60] "
                link={url}
                fontSize="text-[14px]"
              />
              {/* <ActionButton
                text="ভর্তির জন্য"
                bg_color=" bg-orange-500"
                link={`/admission/${shortName}`}
                className=" hover:bg-orange-600 "
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;
