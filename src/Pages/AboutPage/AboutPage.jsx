import React from "react";

import HeroSection from "../../Components/Shared/HeroSection/HeroSection";
import aboutUsImage from "../../assets/images/aboutUs_image/aboutUs.jpeg";
import AboutInstituteAndMap from "../../Components/Shared/AboutInstituteAndMap/AboutInstituteAndMap";
import InstituteFeatures from "../../Components/Shared/InstituteFeatures/InstituteFeatures";
import DepartmentMenu from "./../../Components/Shared/DepartmentMenu/DepartmentMenu";
import InstituteAboutInfo from "../../Components/SectionComponents/AboutPageSections/InstituteAboutInfo/InstituteAboutInfo";
import { GeneralCard } from "../../Components/UI/Cards/GeneralCard/GeneralCard";
import { FaPhone } from "react-icons/fa6";
import VisionMissionCard from "../../Components/SectionComponents/AboutPageSections/MissionAndVission/MissionAndVission";
import SectionTitle from "../../Components/Shared/Titles/SectionTitle/SectionTitle";
import LeadersSpeechSection from "../../Components/SectionComponents/AboutPageSections/LeadersSpeech/LeadersSpeechSection";

const AboutPage = () => {
  return (
    <div className="">
      <HeroSection
        className="bg-top"
        bgImage={aboutUsImage}
        title={"About Us"}
        subtitle={"জ্ঞান, দক্ষতা, আত্মবিশ্বাস: ভবিষ্যত প্রযুক্তির ভিত্তি।"}
        extraText={""}
      />

      <section className="py-16 ">
        <InstituteAboutInfo />
      </section>

      <div className=" py-10 flex flex-wrap justify-between gap-8 px-4 md:px-10 lg:px-20">
        <article className="lg:flex-1/2 ">
          <section className="">
            <SectionTitle title={"আমাদের লক্ষ্য ও উদ্দেশ্য"} />
            <VisionMissionCard />
          </section>
        </article>
        <article className=" lg:flex-1/4">
          <LeadersSpeechSection />
        </article>
      </div>

      <section id="features">
        <InstituteFeatures />
      </section>
      <DepartmentMenu />
    </div>
  );
};

export default AboutPage;
