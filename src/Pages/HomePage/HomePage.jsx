import React from "react";

import HomeHeroSlider from "@components/SectionComponents/HomePageSections/HomeHeroSlider/HomeHeroSlider";
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
import SectionWrapper from "@components/Shared/SectionWrapper/SectionWrapper";

const HomePage = () => {
  return (
    <main className="home-page bg-gray-50">
      {/* Hero Section */}
      <header className="-mt-10">
        <HomeHeroSlider />
      </header>

      {/* Why Read Diploma Section */}
      <SectionWrapper bg="bg-gray-50">
        <WhyReadDiploma />
      </SectionWrapper>

      {/* Department Section */}
      <SectionWrapper>
        <section aria-label="Departments">
          <AllDepartment />
        </section>
      </SectionWrapper>

      {/* Institute Info & Map */}

      <SectionWrapper bg="bg-white">
        <section aria-label="Institute Info">
          <AboutInstituteAndMap />
        </section>
      </SectionWrapper>

      {/* Institute Features */}
      <SectionWrapper bg="bg-gray-100">
        <section aria-label="Institute Features">
          <InstituteFeatures />

          {/* <div className="text-center mt-10 md:mt-14">
            <ActionButton link="/about" text="আরও পড়ুন..." />
          </div> */}
        </section>
      </SectionWrapper>

      {/* Campus Tour Video */}
      <SectionWrapper>
        <section aria-label="Campus Tour">
          <SectionTitle title="এক নজরে ক্যাম্পাস ট্যুর" />
          <div className="mt-12">
            <LocalVideo
              src={campusVideo}
              title="Campus Tour Video"
              controls
              height=""
              className="rounded-xl shadow-lg overflow-hidden"
            />
          </div>
        </section>
      </SectionWrapper>

      {/* Scholarship Section */}
      <ScholarshipSection />

      {/* Hostel Section */}
      <SectionWrapper bg="bg-gray-100">
        <HostelSection />
      </SectionWrapper>

      {/* Industrial Training Section */}
      <section className="bg-white">
        <IndustrialTraining />
      </section>

      {/* Student Testimonials */}
      <section aria-label="testimonial">
        <StudentsTestimonialSection />
      </section>
    </main>
  );
};

export default HomePage;
