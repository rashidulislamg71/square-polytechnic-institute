import React, { useState } from "react";
import SectionTitle from "../../Components/Shared/Titles/SectionTitle/SectionTitle";

import FilterButton from "../../Components/UI/FilterButton/FilterButton";
import studntTestimonialsData from "../../Data/TestimonialJsonData/studentsData";
import useFetchingData from "../../hooks/useFetchData";
import Loader from "../../Components/UI/Loader/Loader";
import Error from "../../Components/UI/Error/Error";
import TestimonialCard from "../../Components/SectionComponents/TestimonialPageSections/TestimonialCard/TestimonialCard";
const buttons = [
  "Students Testimonial",
  "Guardian Testimonial",
  "Teachers Testimonial",
];

const AllTestimonialPage = () => {
  const localData = studntTestimonialsData || [];
  const [active, setActive] = useState("Students Testimonial");
  const { data: testimonials, loading, error } = useFetchingData(localData);

  if (loading) return <Loader message="নোটিশ লোড হচ্ছে..." />;
  if (error) return <Error message={error} />;
  return (
    <div className="py-10">
      {/* Title */}
      <SectionTitle title="মতামত" />

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 md:gap-8 mt-6 max-w-4xl mx-auto">
        {buttons.map((btn) => (
          <FilterButton
            key={btn}
            label={btn}
            active={active}
            onClick={setActive}
          />
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="mt-10 mx-auto">
        {active === "Students Testimonial" && (
          <div>
            <p className="text-center text-gray-700 mb-4">
              🎓 Student testimonials show here...
            </p>
        
            <div className="flex flex-wrap justify-center gap-8 md:gap-10">
              {testimonials.map((item) => (
              <TestimonialCard data={item} />
            ))}
            </div>
          </div>
        )}
        {active === "Guardian Testimonial" && (
          <p className="text-center text-gray-700">
            👨‍👩‍👧 Guardian testimonials show here...
          </p>
        )}
        {active === "Teachers Testimonial" && (
          <p className="text-center text-gray-700">
            👩‍🏫 Teacher testimonials show here...
          </p>
        )}
      </div>
    </div>
  );
};

export default AllTestimonialPage;
