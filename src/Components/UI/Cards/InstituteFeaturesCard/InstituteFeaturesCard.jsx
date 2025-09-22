import SubTitle from "../../../Shared/Titles/SubTitle/SubTitle";
import CustomIcon from "../../../CustomIcon/CoustomIcon"; 

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:bg-green-50">
      <CustomIcon iconName={icon} className="text-4xl text-green-700 mb-4 mx-auto" />
      <h3><SubTitle subTitle={title} /></h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
