import GoogleMap from "@components/Shared/GoogleMap/GoogleMap";
import SectionTitle from "@components/Shared//Titles/SectionTitle/SectionTitle";
import InstituteInfo from "@components/SectionComponents/HomePageSections/InstituteInfo/InstituteInfo";

const AboutInstituteAndMap = () => {
  return (
    <section
      className="px-4 md:px-10 lg:px-14"
      id="about-institute"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      {/* SEO META TAGS */}
      <title>ইন্সটিটিউট সম্পর্কে | Square Polytechnic Institute</title>
      <meta
        name="description"
        content="স্কয়ার পলিটেকনিক ইন্সটিটিউট সম্পর্কে জানুন — আমাদের ইতিহাস, বিভাগ, আধুনিক ল্যাব, এবং অবস্থান দেখুন মানচিত্রে।"
      />
      <meta
        name="keywords"
        content="Square Polytechnic Institute, Polytechnic Bogura, স্কয়ার পলিটেকনিক, ইন্সটিটিউট সম্পর্কে, টেকনিক্যাল শিক্ষা"
      />
      <link rel="canonical" href="https://square.edu.bd/about" />

      {/* Section Title */}
      <h2 className="text-center mb-12">
        <SectionTitle title={"ইন্সটিটিউট সম্পর্কে"} />
        <p
          className="text-gray-700 text-base md:text-lg mt-[-15px]"
          itemProp="description"
        >
          আমাদের ইন্সটিটিউট সম্পর্কে জানুন এবং আমাদের অবস্থান দেখুন।
        </p>
      </h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row gap-10 md:gap-20 items-start">
        <article
          className="lg:w-1/2 flex flex-col gap-6 text-justify"
          itemProp="about"
        >
          <InstituteInfo />
        </article>

        <aside
          className="lg:w-1/2 w-full h-[300px] lg:h-[385px]"
          itemProp="map"
        >
          <GoogleMap className="w-full h-full rounded-xl shadow-lg" />
        </aside>
      </div>
    </section>
  );
};

export default AboutInstituteAndMap;
