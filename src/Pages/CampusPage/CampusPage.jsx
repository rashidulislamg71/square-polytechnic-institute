import React from "react";

import HeroSlider from "@components/Shared/HeroSection/HeroSlider";
import campus_img1 from "../../assets/images/Campus_images/hero-banner/campus.jpg";
import campus_img2 from "../../assets/images/Campus_images/hero-banner/campus1.jpg";
import campus_img3 from "../../assets/images/Campus_images/hero-banner/campus2.jpg";
import campus_img4 from "../../assets/images/Campus_images/hero-banner/campus3.jpg";
import campus_img5 from "../../assets/images/Campus_images/hero-banner/campus4.jpg";
import campus_img6 from "../../assets/images/Campus_images/hero-banner/campus5.jpg";

import CampusTourSection from "@components/SectionComponents/CampusPageSections/CampusTourSecation/CampusTourSection";
import CampusFeaturesSection from "@components/SectionComponents/CampusPageSections/CampusFeaturesSection/CampusFeaturesSection";
import HostelSection from "@components/SectionComponents/HomePageSections/Hostel/Hostel";
import CampusGallerySection from "@components/SectionComponents/CampusPageSections/CampusGallerySection/CampusGallerySection";
import StudentsLifeAndActivites from "@components/SectionComponents/CampusPageSections/StudentsLifeAndActivitesSection/StudentsLifeAndActivitesSection";
import StudentsTestimonialSection from "@components/Widgets/StudentsTestimonial/StudentsTestimonialSection";

const heroSlidesData = [
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
  {
    image: campus_img5,
    title: "Bright Future Awaits",
    subtitle: "Join us today and achieve success",
    buttonText: "Contact Us",
  },
  {
    image: campus_img6,
    title: "Bright Future Awaits",
    subtitle: "Join us today and achieve success",
    buttonText: "Contact Us",
  },
];

const CampusPage = () => {
  return (
    <div className="mt-[-25px]">
      <HeroSlider slides={heroSlidesData} imagePosition = "bg-center" />
      <CampusTourSection />

      <CampusFeaturesSection />

      <CampusGallerySection />

      <StudentsLifeAndActivites />

      <HostelSection />

      <StudentsTestimonialSection />
    </div>
  );
};

export default CampusPage;
