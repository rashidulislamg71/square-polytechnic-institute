import React from "react";
import GoogleMap from "@components/Shared/GoogleMap/GoogleMap";
import SectionTitle from "@components/Shared//Titles/SectionTitle/SectionTitle";
import InstituteInfo from "@components/SectionComponents/HomePageSections/InstituteInfo/InstituteInfo";

const AboutInstituteAndMap = () => {
  return (
    <section
      id="about-institute"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
      aria-labelledby="about-institute-title"
    >
      {/* ================= SEO Meta Tags ================= */}
      <title>ইন্সটিটিউট সম্পর্কে | Square Polytechnic Institute</title>
      <meta
        name="description"
        content="স্কয়ার পলিটেকনিক ইন্সটিটিউট সম্পর্কে জানুন — আমাদের ইতিহাস, বিভাগ, আধুনিক ল্যাব, এবং অবস্থান দেখুন মানচিত্রে।"
      />
      <meta
        name="keywords"
        content="Square Polytechnic, Polytechnic, Education, Square, Square Polytechnic Institute, Polytechnic Bogura, স্কয়ার পলিটেকনিক, ইন্সটিটিউট সম্পর্কে, টেকনিক্যাল শিক্ষা"
      />

      {/* ================= Section Header ================= */}
      <header className="text-center mb-12">
        <h2 id="about-institute-title" className="text-3xl font-semibold">
          <SectionTitle title={"ইন্সটিটিউট সম্পর্কে"} />
        </h2>
        <p
          className="text-gray-700 text-base md:text-lg mt-2"
          itemProp="description"
        >
          আমাদের ইন্সটিটিউট সম্পর্কে জানুন এবং আমাদের অবস্থান দেখুন।
        </p>
      </header>

      {/* ================= Content ================= */}
      <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-start">
        {/* Left - About Institute */}
        <article
          className="lg:w-1/2 flex flex-col gap-6 text-justify"
          itemProp="about"
        >
          <InstituteInfo />
        </article>

        {/* Right - Google Map */}
        <aside
          className="lg:w-1/2 w-full h-[300px] lg:h-[385px]"
          itemProp="hasMap"
          aria-label="Institute Location Map"
        >
          <GoogleMap className="w-full h-full md:rounded-xl" />
        </aside>
      </div>

      {/* Optional Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Square Polytechnic Institute",
            url: "https://square.edu.bd",
            logo: "https://square.edu.bd/logo.png",
            description:
              "স্কয়ার পলিটেকনিক ইন্সটিটিউট সম্পর্কে জানুন — আমাদের ইতিহাস, বিভাগ, আধুনিক ল্যাব, এবং অবস্থান দেখুন মানচিত্রে।",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Garidaha, Sherpur, Bogura",
              addressLocality: "Bogura",
              addressCountry: "Bangladesh",
            },
            sameAs: [
              "https://www.facebook.com/squarepolytechnic",
              "https://www.linkedin.com/in/rashidulislam71/",
            ],
            hasMap: "https://www.google.com/maps/embed?pb=...",
          }),
        }}
      />
    </section>
  );
};

export default AboutInstituteAndMap;
