import React, { useState } from "react";
import SectionTitle from "../../Components/Shared/Titles/SectionTitle/SectionTitle";
import FilterButton from "../../Components/UI/FilterButton/FilterButton";
import studntTestimonialsData from "../../Data/TestimonialJsonData/studentsData";
import useFetchingData from "../../hooks/useFetchData";
import Loader from "../../Components/UI/Loader/Loader";
import Error from "../../Components/UI/Error/Error";
import TestimonialCard from "../../Components/SectionComponents/TestimonialPageSections/TestimonialCard/TestimonialCard";
import { FaExclamationTriangle } from "react-icons/fa";

const buttons = ["Students", "Guardian", "Teachers"];

const AllTestimonialPage = () => {
  const localData = studntTestimonialsData || [];
  console.log(studntTestimonialsData);
  console.log(localData);
  const [active, setActive] = useState("Students");
  const { data: testimonials, loading, error } = useFetchingData(localData);

  if (loading) return <Loader message="টেস্টিমোনিয়াল লোড হচ্ছে..." />;
  if (error) return <Error message={error} />;

  return (
    <div className="mt-[100px] py-10 px-5 md:px-10">
      {/* Page Title */}
      <SectionTitle title="আমাদের ছাত্র, অভিভাবক ও শিক্ষকদের মতামত" />

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 my-8 flex-wrap">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => setActive(btn)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              active === btn
                ? "bg-emerald-600 text-white shadow-lg"
                : " bg-gray-300 text-gray-700 hover:bg-emerald-100"
            }`}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {active === "Students" &&
          testimonials.map((item, index) =>
            item ? <TestimonialCard key={index} item={item} /> : null
          )}

        {active === "Guardian" && (
          <div className="col-span-full text-center ">
            <div className="flex flex-col items-center justify-centertext-center">
              <FaExclamationTriangle className="text-yellow-500 text-4xl mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                কোন মতামত খুঁজে পাওয়া যায়নি!
              </h2>
            </div>
          </div>
        )}

        {active === "Teachers" && (
          <div className="col-span-full text-center">
            <div className="flex flex-col items-center justify-center text-center">
              <FaExclamationTriangle className="text-yellow-500 text-4xl mb-4" />
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                কোন মতামত খুঁজে পাওয়া যায়নি!
              </h2>
            </div>
          </div>
        )}
      </div>

      {/* Motivational Quote */}
      <div className="text-center mt-16">
        <p className="italic text-gray-600 text-lg">
          “ভালো শিক্ষা একজন মানুষের জীবনের সবচেয়ে বড় সম্পদ।”
        </p>
      </div>
    </div>
  );
};

export default AllTestimonialPage;
