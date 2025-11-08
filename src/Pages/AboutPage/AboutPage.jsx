import React from "react";
import HeroSection from "@components/Shared/HeroSection/HeroSection";
import aboutUsImage from "@assets/images/aboutUs_image/about-banner.jpg";
import InstituteFeatures from "@components/Shared/InstituteFeatures/InstituteFeatures";
import DepartmentMenu from "@components/Shared/DepartmentMenu/DepartmentMenu";
import InstituteAboutInfo from "@components/SectionComponents/AboutPageSections/InstituteAboutInfo/InstituteAboutInfo";
import VisionMissionCard from "@components/SectionComponents/AboutPageSections/MissionAndVission/MissionAndVission";
import LeadersSpeechSection from "@components/SectionComponents/AboutPageSections/LeadersSpeech/LeadersSpeechSection";
import ScholarshipSection from "@components/Shared/ScholarshipSection/ScholarshipSection";
import SectionWrapper from "@components/Shared/SectionWrapper/SectionWrapper";

const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection
        className="bg-bottom"
        bgImage={aboutUsImage}
        title="About Us"
        subtitle=""
        extraText=""
        overlayColor="bg-black/40"
      />

      {/* About Institute Section */}
      <SectionWrapper>
        <InstituteAboutInfo />
      </SectionWrapper>

      {/* Mission & Vision + Features + Leader’s Speech */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-13 items-start">
          {/* Left Side: Mission & Vision + Features */}
          <div className="lg:col-span-2 space-y-16">
            <VisionMissionCard />
          <div className="mt-[-80px] ">
              <InstituteFeatures />
          </div>
          </div>

          {/* Right Side: Leader’s Speech */}
          <aside className="lg:col-span-1 mt-15 md:mt-0">
            <LeadersSpeechSection />
          </aside>
        </div>
      </SectionWrapper>

      {/* Scholarship Section */}

      <ScholarshipSection />

      {/*Department Menu */}
      <SectionWrapper>
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          Our Departments
        </h2>
        <DepartmentMenu />
      </SectionWrapper>
    </div>
  );
};

export default AboutPage;
