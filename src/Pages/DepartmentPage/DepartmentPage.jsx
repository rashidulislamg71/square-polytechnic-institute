import React from "react";
// import ContentTitle from "../../Components/UI/Titles/ContentTitle/ContentTitle";
import AllDepartment from "../../Components/Shared/AllDepartment/AllDepartment";
import HeroSection from "../../Components/Shared/HeroSection/HeroSection";
import deptHero from "../../assets/images/Departments_img/department_banner.png";
import LabInfoParents from "../../Components/SectionComponents/DepartmentPageSections/LabInfo/LabInfoPreante";
import SectionTitle from "../../Components/Shared/Titles/SectionTitle/SectionTitle";

import AboutSyllabus from "../../Components/SectionComponents/DepartmentPageSections/AboutSyllabus/AboutSyllabus";
import IndustrialTrainin from "../../Components/Shared/IndustryInternshipTraining/IndustrialTraining";

const DepartmentPage = () => {
  return (
    <main>
      <section>
        <HeroSection
          title={"আমাদের ডিপার্টমেন্ট"}
          extraText={
            "আমাদের ইন্সটিটিউটে বর্তমানে ৫টি বিভাগ চালু আছে... প্রতিটি বিভাগেই রয়েছে আধুনিক ল্যাব, দক্ষ শিক্ষক, আর হাতে-কলমে শিক্ষা।"
          }
          bgImage={deptHero}
        />
      </section>
      <div>
        <section>
          <AllDepartment />
        </section>

        <section>
          <div className="pt-15 mb-[-50px]">
            <SectionTitle title={"আমাদের ল্যাব ফেসিলিটি"} />
          </div>
          <LabInfoParents />
        </section>

        <section>
          <AboutSyllabus />
        </section>
        <section>
          <IndustrialTrainin />
        </section>
      </div>
    </main>
  );
};
export default DepartmentPage;
