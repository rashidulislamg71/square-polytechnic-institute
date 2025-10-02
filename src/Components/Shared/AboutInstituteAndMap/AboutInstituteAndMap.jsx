import GoogleMap from "../GoogleMap/GoogleMap";
import InstituteInfo from "./../../SectionComponents/HomePageSections/InstituteInfo/InstituteInfo";

const AboutInstituteAndMap = () => {
  return (
    <section className="px-4 md:px-10 lg:px-20">
      <div className="flex flex-col lg:flex-row gap-8  items-start">
        <article className="lg:w-1/2 flex flex-col gap-6 text-justify">
          <InstituteInfo />
        </article>

        <aside className="lg:w-1/2 w-full h-[300px] lg:h-[350px]">
          <GoogleMap className="w-full h-full rounded-xl shadow-lg" />
        </aside>
      </div>
    </section>
  );
};

export default AboutInstituteAndMap;
