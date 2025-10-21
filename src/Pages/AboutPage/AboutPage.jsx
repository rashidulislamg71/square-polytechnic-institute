import React from "react";
import HeroSection from "@components/Shared/HeroSection/HeroSection";
import aboutUsImage from "@assets/images/aboutUs_image/aboutUs.jpeg";
import InstituteFeatures from "@components/Shared/InstituteFeatures/InstituteFeatures";
import DepartmentMenu from "@components/Shared/DepartmentMenu/DepartmentMenu";
import InstituteAboutInfo from "@components/SectionComponents/AboutPageSections/InstituteAboutInfo/InstituteAboutInfo";
import VisionMissionCard from "@components/SectionComponents/AboutPageSections/MissionAndVission/MissionAndVission";
import LeadersSpeechSection from "@components/SectionComponents/AboutPageSections/LeadersSpeech/LeadersSpeechSection";
import ScholarshipSection from "@components/Shared/ScholarshipSection/ScholarshipSection";

const AboutPage = () => {
  return (
    <div>
      {/*Hero Section */}
      <HeroSection
        className="bg-top"
        bgImage={aboutUsImage}
        title="About Us"
        subtitle="জ্ঞান, দক্ষতা, আত্মবিশ্বাস: ভবিষ্যত প্রযুক্তির ভিত্তি।"
        extraText=""
      />

      {/* About Institute Section */}
      <section className="py-16">
        <InstituteAboutInfo />
      </section>

      {/* Mission & Vision + Features + Leader’s Speech */}
      <section className="py-16 bg-gray-50 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Side: Mission & Vision + Features */}
          <div className="lg:col-span-2 space-y-16">
            <VisionMissionCard />
            <InstituteFeatures />
          </div>

          {/* Right Side: Leader’s Speech */}
          <div className="lg:col-span-1">
            <LeadersSpeechSection />
          </div>
        </div>
      </section>
      <section>
        <ScholarshipSection />
      </section>
      {/*Department Menu Section */}
      <section className="py-16">
        <DepartmentMenu />
      </section>
    </div>
  );
};

export default AboutPage;
