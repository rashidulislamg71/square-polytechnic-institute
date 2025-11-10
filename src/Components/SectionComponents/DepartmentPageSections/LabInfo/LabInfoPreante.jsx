import ActionButton from "@components/UI/ActionButton/ActionButton";
import PeragraphText from "@components/Shared/PeragraphText/PeragraphText";
import SubTitle from "@components/Shared/Titles/SubTitle/SubTitle";
import { DoubleMediumImage } from "@components/UI/GeneralImage/GeneralImage";
import useFetchingData from "../../../../hooks/useFetchData";
import Loader from "../../../UI/Loader/Loader";
import Error from "../../../UI/Error/Error";

import labData from "@data/DepartmentsData/LabInfoData";

const LabInfoParents = () => {
  const { data, loading, error } = useFetchingData(labData);

  if (loading) <Loader />;
  if (error) <Error />;

  return (
    <section>
      {data.map((lab, index) => (
        <div
          key={lab.id}
          className={` flex flex-col-reverse md:flex-row
             items-center
             justify-center mb-12 gap-0 md:gap-10 lg:gap-20
                      ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
        >
          {/* Image side */}
          <div className="mt-[-25px] md:mt-0 w-full md:w-5/12 lg:w-4/12">
            <DoubleMediumImage image1={lab.images[0]} image2={lab.images[1]} />
          </div>

          {/* Text side */}
          <div className="w-full md:w-7/12 lg:w-6/12">
            <div className="border-b-3 border-orange-400 mb-3">
              <SubTitle subTitle={lab.title} className="text-[24px]" />
            </div>
            <PeragraphText peraText1={lab.description} />
            <div className="mt-4">
              <ActionButton text={"আরও জানুন..."} link={lab.linkUrl} />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LabInfoParents;
