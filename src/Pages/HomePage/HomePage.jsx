import HomeHeroSlider from "@components/SectionComponents/HomePageSections/HomeHeroSlider/HomeHeroSlider";
import InstituteFeaturesCard from "@components/UI/Cards/InstituteFeaturesCard/InstituteFeaturesCard";
import Notice from "@components/SectionComponents/HomePageSections/Notice/Notice";
import AllDepartment from "@components/Shared/AllDepartment/AllDepartment";

import ActionButton from "@components/UI/ActionButton/ActionButton";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import WhyReadDiploma from "@components/SectionComponents/HomePageSections/WhyReadDiploma/WhyReadDiploma";

import HostelSection from "@components/SectionComponents/HomePageSections/Hostel/Hostel";
import IndustrialTraining from "@components/Shared/IndustryInternshipTraining/IndustrialTraining";
import AboutInstituteAndMap from "@components/Shared/AboutInstituteAndMap/AboutInstituteAndMap";
import StudentsTestimonialSection from "@components/Widgets/StudentsTestimonial/StudentsTestimonialSection";
import InstituteFeatures from "@components/Shared/InstituteFeatures/InstituteFeatures";
import campusVideo from "@assets/video/spi_campus_video.mp4";
import ScholarshipSection from "@components/Shared/ScholarshipSection/ScholarshipSection";
import LocalVideo from "@components/Video/LocalVideo";
import SectionWrapper from './../../Components/Shared/SectionWrapper/SectionWrapper';


const HomePage = () => {
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
      <section
        className=" py-16 px-4 md:px-10 lg:px-20 bg-gray-100"
        aria-label="Institute Features"
      >
        <InstituteFeatures />
        <div className="text-center mt-10 md:mt-15 ">
          <ActionButton link="features" />
        </div>
      </section>

      {/* Campus Video Section */}
      <section
        className="px-[15px] lg:px-[50px] py-[60px]"
        aria-label="Campus Videos"
      >
        <SectionTitle title={"এক নজরে ক্যাম্পাস ট্যুর"} />

        {/* Local Video */}
        <div className="mt-12">
          <LocalVideo
            src={campusVideo}
            title="Campus Tour Video"
            controls
            poster=""
            
          />
        </div>
      </section>

      <section>
        <ScholarshipSection />
      </section>

      {/* Hostel Section */}
      <section>
        <HostelSection />
      </section>
      {/* Industrial Training and Internship */}
      <SectionWrapper>
        <IndustrialTraining />
      </SectionWrapper>

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
