import HomeHeroSlider from "../../Components/SectionComponents/HomePageSections/HomeHeroSlider/HomeHeroSlider";
import InstituteFeaturesCard from "../../Components/UI/Cards/InstituteFeaturesCard/InstituteFeaturesCard";
import Notice from "../../Components/SectionComponents/HomePageSections/Notice/Notice";
import AllDepartment from "../../Components/Shared/AllDepartment/AllDepartment";
import Video from "../../Components/Video/Video";
import ActionButton from "../../Components/UI/ActionButton/ActionButton";
import SectionTitle from "../../Components/Shared/Titles/SectionTitle/SectionTitle";
import WhyReadDiploma from "../../Components/SectionComponents/HomePageSections/WhyReadDiploma/WhyReadDiploma";
// json Data
import instituteFeaturesData from "../../Data/HomePageJsonData/instituteFeatures.json";

import HostelSection from "../../Components/SectionComponents/HomePageSections/Hostel/Hostel";
import IndustrialTraining from "../../Components/Shared/IndustryInternshipTraining/IndustrialTraining";
import AboutInstituteAndMap from "../../Components/Shared/AboutInstituteAndMap/AboutInstituteAndMap";
import StudentsTestimonialSection from "../../Components/Widgets/StudentsTestimonial/StudentsTestimonialSection";
import InstituteFeatures from "../../Components/Shared/InstituteFeatures/InstituteFeatures";

const HomePage = () => {
  const { features } = instituteFeaturesData.instituteFeaturesInfo;

  return (
    <main className="home-page">
      {/* Hero Section */}
      <header className="-mt-10">
        <HomeHeroSlider />
      </header>

      {/* Notice Section */}
      <section
        className="px-4 md:px-10 lg:px-20"
        aria-label="Institute Notices"
      >
        <Notice />
      </section>

      {/* Department Section */}
      <section aria-label="Departments">
        <AllDepartment />
      </section>

      {/* Institute Info  */}
      <section className="w-full   py-15 bg-white" aria-label="Institute Info">
        
        <AboutInstituteAndMap />
      </section>

      {/* Institute Features */}
      <section className=" py-15  bg-gray-100" aria-label="Institute Features">
        <h2 className="text-center  mx-auto">
          <SectionTitle title={"বিশেষ সুবিধা ও বৈশিষ্ট্য"} />
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {/* {features &&
            features.slice(0, 4).map((feature) => (
              <article className=" md:w-[360px] lg:w-[490px]" key={feature.id}>
                <InstituteFeaturesCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </article>
            ))} */}
            <InstituteFeatures />
        </div>
        <div className="flex justify-center mt-15">
          <ActionButton link="features" />
        </div>
      </section>

      {/* Campus Video Section */}
      <section
        className="px-[15px] lg:px-[50px] py-[60px]"
        aria-label="Campus Videos"
      >
        <div>
          <SectionTitle title={"এক নজরে ক্যাম্পাস ট্যুর"} />
        </div>
        <Video />

        {/* Local Video */}
        {/* <div className="mt-12">
          <Video src={sampleVideo} controls autoPlay muted loop />
        </div> */}
      </section>

      <section>
        <HostelSection />
      </section>
      {/* Industrial Training and Internship */}
      <section className="px-4 md:px-10 lg:px-20">
        <IndustrialTraining />
      </section>

      {/* Why Read Diploma */}
      <section className="px-[15px] bg-gray-100" aria-label="Why Read Diploma">
        <WhyReadDiploma />
      </section>

      {/* Student Testimonial */}
      <StudentsTestimonialSection />
    </main>
  );
};

export default HomePage;
