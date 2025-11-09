import React from "react";
import { Helmet } from "react-helmet-async";

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
      {/* SEO Helmet meta tags */}
      <Helmet>
        <title>
          Square Polytechnic Institute | Government Approved Diploma Engineering
          Institute
        </title>
        <meta
          name="description"
          content="Square Polytechnic Institute (Code: 20294 | AIIN: 139309) is a government-approved polytechnic institute located in Garidaha, Sherpur, Bogura. We offer Diploma Engineering programs in Civil, Electrical, Computer, Textile, and Mechanical, along with short courses and scholarships."
        />
        <meta
          name="keywords"
          content="Square Polytechnic Institute, Polytechnic in Bogura, Diploma Engineering Bangladesh, Civil, Electrical, Computer, Textile, Mechanical, Bogura Polytechnic, Square Institute"
        />
        <meta name="author" content="Square Polytechnic Institute" />
        <meta
          property="og:title"
          content="Square Polytechnic Institute | Bogura"
        />
        <meta
          property="og:description"
          content="One of the best government-approved polytechnic institutes in Bogura offering modern facilities, experienced teachers, hostels, and scholarships."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://squarepolytechnic.edu.bd/" />
        <meta
          property="og:image"
          content="https://squarepolytechnic.edu.bd/assets/images/logo.png"
        />
        <link rel="canonical" href="https://squarepolytechnic.edu.bd/" />
        <meta name="robots" content="index, follow" />
        <html lang="bn" />
      </Helmet>

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
      <section
        className="w-full mt-12 bg-white py-16"
        aria-label="Institute Info"
      >
        <AboutInstituteAndMap />
      </section>

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
      <SectionWrapper bg="bg-white">
        <IndustrialTraining />
      </SectionWrapper>

      {/* Student Testimonials */}
      <section aria-label="testimonial">
        <StudentsTestimonialSection />
      </section>
    </main>
  );
};

export default HomePage;
