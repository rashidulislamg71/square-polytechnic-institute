import React from "react";
import { Link } from "react-router-dom"; // React Router
import PeragraphText from "../../../Shared/PeragraphText/PeragraphText";
import SubTitle from "../../../Shared/Titles/SubTitle/SubTitle";
import GeneralList from "../../../UI/GeneralList/GeneralList";
import SectionTitle from "../../../Shared/Titles/SectionTitle/SectionTitle";
import careerAndHigherEdu_img from "../../../../assets/images/Departments_img/career_and_higher_education_img.jpg";
import { SingleBigImage } from "../../../UI/GeneralImage/GeneralImage";

// Static data for the section
const careerAndHigherStudyData = {
  sectionTitle: "ক্যারিয়ার ও উচ্চশিক্ষার সুযোগ",
  image: careerAndHigherEdu_img,
  subTitle: "ডিপ্লোমা শেষে আপনার সাফল্যের নিশ্চিত পথ",
  paragraph:
    "আমাদের ডিপ্লোমা কোর্স আপনাকে স্থানীয় ও আন্তর্জাতিক চাকরির বাজারে দ্রুত প্রবেশাধিকার দেয় এবং একইসাথে দেশের প্রথম সারির প্রকৌশল বিশ্ববিদ্যালয়গুলোতে উচ্চশিক্ষার দ্বার উন্মুক্ত করে।",
  careerList: [
    "জুনিয়র প্রকৌশলী: শিল্প, সরকারি ও বহুজাতিক কোম্পানি",
    "প্রযুক্তি বিশেষজ্ঞ: আইটি ও সফটওয়্যার ফার্ম",
    "স্বনির্ভর উদ্যোক্তা: ফ্রিল্যান্সিং বা নিজস্ব ফার্ম",
    "বিএসসি ইঞ্জিনিয়ারিং: ডুয়েট (DUET) সহ অন্যান্য বিশ্ববিদ্যালয়ে সুযোগ",
    "আন্তর্জাতিক সার্টিফিকেশন: উন্নত প্রশিক্ষণের মাধ্যমে বৈশ্বিক মান অর্জন",
  ],
  // Departments list for links
  departments: [
    { name: "Civil", link: "/civil_page" },
    { name: "Electrical", link: "/electrical_page" },
    { name: "Computer", link: "/computer_page" },
    { name: "Textile", link: "/textile_page" },
    { name: "Mechanical", link: "/mechanical_page" },
  ],
};

const CareerAndHigherStudy = () => {
  const data = careerAndHigherStudyData;

  return (
    <section className="bg-white">
      {/* Section Title */}
      <SectionTitle title={data.sectionTitle} />

      <div className="flex flex-wrap gap-8 md:gap-13 lg:gap-15">
        {/* Section Image */}
        <SingleBigImage image={data.image} />

        {/* Section Text */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="border-b-3 border-amber-400">
            <SubTitle subTitle={data.subTitle} />
          </div>

          <PeragraphText peraText1={data.paragraph} />
          <GeneralList items={data.careerList} idColon="true" />
          {/* Departments Links */}
          <div className="mt-2">
            <h4 className="font-semibold text-gray-800">
              ডিপার্টমেন্ট অনুযায়ী ক্যারিয়ার ও উচ্চশিক্ষা সম্পর্কে বিস্তারিত
              জানুন
            </h4>
            <ul className="flex items-center gap-3 text-green-600 bold">
              {data.departments.map((dept, idx) => (
                <li key={idx}>
                  <Link to={dept.link} className="hover:underline">
                    {dept.name}
                  </Link>
                  {idx < data.departments.length - 1 && <span className="ml-3 text-orange-500 samebold" >|</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerAndHigherStudy;
