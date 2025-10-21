import React from "react";

import DepartmentCard from "@components/UI/Cards/DepartmentCard/DepartmentCard";
import departmentCardData from "@data/DepartmentsData/departmentCardData";

// images
import computerImg from "@assets/images/Departments_img/computer.png";
import civilImg from "@assets/images/Departments_img/civil.png";
import electricalImg from "@assets/images/Departments_img/electircal.jpg";
import textileImg from "@assets/images/Departments_img/textile.jpeg";
import mechImg from "@assets/images/Departments_img/mechnical.jpg";

import SectionTitle from "@components/Shared//Titles/SectionTitle/SectionTitle";
import GeneralParagraphText from "@components/Shared/GeneralParagraphText/GeneralParagraphText";

const AllDepartment = () => {
  // destructure
  const title = departmentCardData?.title || "আমাদের বিভাগসমূহ";
  const departments = departmentCardData?.departments || [];

  const departmentImages = [
    electricalImg,
    computerImg,
    civilImg,
    textileImg,
    mechImg,
  ];

  // create a new array with images added (no mutation)
  const updatedDepartments = departments.map((data, index) => ({
    ...data,
    image: departmentImages[index],
  }));

  return (
    <section className="bg-[#f9fafb] px-4 lg:px-20 py-12 md:py-15">
      <SectionTitle title={title} />
      <GeneralParagraphText
        text={
          "বর্তমান সময়ের প্রযুক্তি নির্ভর শিক্ষার সাথে তাল মিলিয়ে আমাদের ইন্সটিটিউটে রয়েছে আধুনিক ৫টি বিভাগ। প্রতিটি বিভাগ শিক্ষার্থীদের জন্য উন্মুক্ত করছে নতুন নতুন সুযোগ, যেখানে রয়েছে মানসম্মত শিক্ষা, আধুনিক ল্যাব এবং বাস্তব অভিজ্ঞতা অর্জনের সুবিধা।"
        }
      />

      <div className="flex flex-wrap gap-6 md:gap-16 justify-center mt-10">
        {updatedDepartments.map((data) => (
          <DepartmentCard
            key={data.id}
            name={data.name}
            shortName={data.shortName}
            image={data.image}
            description={data.description}
            url={data.url}
          />
        ))}
      </div>
    </section>
  );
};

export default AllDepartment;
