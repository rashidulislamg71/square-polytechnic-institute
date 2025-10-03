import React from "react";

import HeroSlider from "../../Components/Shared/HeroSection/HeroSlider";
import campus_img1 from "../../assets/images/Campus_images/campus1.jpeg";
import campus_img2 from "../../assets/images/Campus_images/campus2.jpeg";
import campus_img3 from "../../assets/images/Campus_images/campus3.jpeg";
import campus_img4 from "../../assets/images/Campus_images/campus4.jpeg";
import SectionTitle from "./../../Components/Shared/Titles/SectionTitle/SectionTitle";

import GeneralParagraphText from './../../Components/Shared/GeneralParagraphText/GeneralParagraphText';
import CampusTourSection from "../../Components/SectionComponents/CampusPageSections/CampusTourSecation/CampusTourSection";
import CampusFeaturesSection from "../../Components/SectionComponents/CampusPageSections/CampusFeaturesSection/CampusFeaturesSection";

const slidesData = [
  {
    image: campus_img1,
    title: "Welcome to Square Polytechnic",
    subtitle: "Modern Education, Smart Future",
    buttonText: "Apply Now",
  },
  {
    image: campus_img2,
    title: "Modern Campus Facilities",
    subtitle: "Labs, Hostels, Sports & More",
    buttonText: "Explore",
  },
  {
    image: campus_img3,
    title: "Bright Future Awaits",
    subtitle: "Join us today and achieve success",
    buttonText: "Contact Us",
  },
  {
    image: campus_img4,
    title: "Bright Future Awaits",
    subtitle: "Join us today and achieve success",
    buttonText: "Contact Us",
  },
];


const CampusPage = () => {
  return (
    <div className="mt-[-25px]">
      <HeroSlider slides={slidesData} />
     
        <CampusTourSection />
      <section>
        <CampusFeaturesSection />
      </section>
    </div>
  );
};

export default CampusPage;
