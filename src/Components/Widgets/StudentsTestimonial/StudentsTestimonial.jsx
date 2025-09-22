import React from "react";
import StudentsTestimonialCard from "./GuardiansTestimonial";
import "./index.css";

import student1 from "../../../assets/images/StudentTestimonial/student1.jpeg";
import student2 from "../../../assets/images/StudentTestimonial/student2.jpeg";
import student3 from "../../../assets/images/StudentTestimonial/student.jpeg";

import studentsData from "../../../Data/TestimonialJsonData/StudentsData.json";

const images = {
  "student1.jpeg": student1,
  "student2.jpeg": student2,
  "student3.jpeg": student3,
};

function StudentsTestimonial() {
  // Duplicate items for seamless scroll
  const testimonials = [...studentsData, ...studentsData];

  return (
    <div className="wrapper px-0 overflow-hidden block select-none py-7 bg-green-100 ">
      <ul className="runer flex gap-5 [min-width:max-content]">
        {testimonials.map((student, index) => {
          const image = images[student.image]; // Import থেকে নেওয়া image

          return (
            <li key={index} className="list-none flex-shrink-0">
              <StudentsTestimonialCard
                image={image}
                name={student.name}
                department={student.department}
                session={student.session}
                comments={student.comment}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StudentsTestimonial;
