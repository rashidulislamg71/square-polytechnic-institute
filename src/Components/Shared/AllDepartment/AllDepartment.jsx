import React from "react";
import DepartmentCard from "@components/UI/Cards/DepartmentCard/DepartmentCard";
import departmentCardData from "@data/DepartmentsData/departmentCardData";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import GeneralParagraphText from "@components/Shared/GeneralParagraphText/GeneralParagraphText";
import useFetchingData from "./../../../hooks/useFetchData";
import Loader from "../../UI/Loader/Loader";
import Error from "./../../UI/Error/Error";

const AllDepartment = () => {
  const title = departmentCardData?.title || "আমাদের বিভাগসমূহ";

  // Use Custom Hook for fetch data
  const { data, loading, error } = useFetchingData(
    departmentCardData.departments
  );

  // Handle Loading and Error
  if (loading) <Loader />;
  if (error) <Error />;

  // Structured Data for SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Square Polytechnic Institute",
    department: data.map((dept) => ({
      "@type": "EducationalOccupationalProgram",
      name: dept.name,
      alternateName: dept.shortName,
      description: dept.description,
      url: `https://squarepolytechnic.edu.bd${dept.url}`,
      image: dept.image,
      provider: {
        "@type": "CollegeOrUniversity",
        name: "Square Polytechnic Institute",
      },
    })),
  };

  return (
    <section id="departments" aria-labelledby="departments-title">
      {/*Inject JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>

      {/* Section Title */}
      <div className="text-center">
        <h2 id="departments-title">
          <SectionTitle title={title} />
        </h2>
        <GeneralParagraphText text="বর্তমান সময়ের প্রযুক্তি নির্ভর শিক্ষার সাথে তাল মিলিয়ে আমাদের ইন্সটিটিউটে রয়েছে আধুনিক ৫টি বিভাগ। প্রতিটি বিভাগ শিক্ষার্থীদের জন্য উন্মুক্ত করছে নতুন নতুন সুযোগ, যেখানে রয়েছে মানসম্মত শিক্ষা, আধুনিক ল্যাব এবং বাস্তব অভিজ্ঞতা অর্জনের সুবিধা।" />
      </div>

      {/* Department Cards */}
      <div className="flex flex-wrap gap-8 md:gap-15 justify-center mt-10">
        {data.map((dept) => (
          <article key={dept.id} aria-label={`${dept.name} Department`}>
            <DepartmentCard
              name={dept.name}
              shortName={dept.shortName}
              image={dept.image}
              description={dept.description}
              url={dept.url}
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default AllDepartment;
