import React, { useState } from "react";
import studntTestimonialsData from "../../../../Data/TestimonialJsonData/studentsData";
import useFetchingData from "../../../../hooks/useFetchData";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const StudentsTestimonialSection = () => {
  const localData = studntTestimonialsData || [];
  const [active, setActive] = useState("Students");
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
        {active === "Students" && (
          <div>
            <p className="text-center text-gray-700 mb-4">
              Student testimonials show here...
            </p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-10">
              {testimonials.map((item) => (
                <TestimonialCard data={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsTestimonialSection;
