import React from "react";


import DepartmentCard from "../../UI/Cards/DepartmentCard/DepartmentCard";

// json data import
import DepartmentData from "../../../Data/DepartmentPageJsonData/departmentPage.json";

// images
import computerImg from "../../../assets/images/Departments_img/computer.png";
import civilImg from "../../../assets/images/Departments_img/civil.png";
import electricalImg from "../../../assets/images/Departments_img/electircal.jpg";
import textileImg from "../../../assets/images/Departments_img/textile.jpeg";
import mechImg from "../../../assets/images/Departments_img/mechnical.jpg";
import SectionTitle from "../Titles/SectionTitle/SectionTitle";
import GeneralParagraphText from "../GeneralParagraphText/GeneralParagraphText";

const AllDepartment = () => {
  const { title, departments } = DepartmentData.departmentInfo;

  const departmentImages = [
    electricalImg,
    computerImg,
    civilImg,
    textileImg,
    mechImg,
  ];

  // Map images to departments
  departments.forEach((dept, index) => {
    dept.image = departmentImages[index];
  });

  return (
    <div>
      <section className="bg-[#f9fafb] px-4 lg:px-20 py-12 md:py-15">
        <SectionTitle title={title} />
        <GeneralParagraphText text={"বর্তমান সময়ের প্রযুক্তি নির্ভর শিক্ষার সাথে তাল মিলিয়ে আমাদের ইন্সটিটিউটে রয়েছে আধুনিক ৫টি বিভাগ। প্রতিটি বিভাগ শিক্ষার্থীদের জন্য উন্মুক্ত করছে নতুন নতুন সুযোগ, যেখানে রয়েছে মানসম্মত শিক্ষা, আধুনিক ল্যাব এবং বাস্তব অভিজ্ঞতা অর্জনের সুবিধা।"} />

        <div className="flex flex-wrap gap-6 md:gap-16  justify-center mt-10">
          {departments.map((dept) => (
            <DepartmentCard
              key={dept.id}
              name={dept.name}
              shortName={dept.shortName}
              image={dept.image}
              description={dept.description}
              url={dept.url}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllDepartment;
