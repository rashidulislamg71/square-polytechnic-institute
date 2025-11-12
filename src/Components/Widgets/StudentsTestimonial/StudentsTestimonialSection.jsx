import React from "react";
import StudentsTestimonial from "./StudentsTestimonial";
import GeneralParagraphText from "@components/Shared/GeneralParagraphText/GeneralParagraphText";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import ActionButton from "@components/UI/ActionButton/ActionButton";

function StudentsTestimonialSection() {
  return (
    <section className="py-15 bg-white mb-[-60px] " aria-label="Students Testimonial">
      <SectionTitle title={"শিক্ষার্থীদের মতামত"} />
      <div className="mb-10 px-4">
        <GeneralParagraphText
          text={
            "আমাদের প্রাক্তন ও বর্তমান শিক্ষার্থীরা শিক্ষার মান, ক্যাম্পাসের পরিবেশ, শিক্ষকদের আন্তরিকতা, আধুনিক ল্যাব ও ব্যবহারিক ক্লাসের মান এবং অন্যান্য সুযোগ-সুবিধা নিয়ে তাদের মূল্যবান মতামত শেয়ার করেছেন। এখানে শিক্ষার্থীরা কেবল জ্ঞান অর্জন করে না, বরং ব্যক্তিগত দক্ষতা, নেতৃত্বগুণ এবং ভবিষ্যতের জন্য নিজেকে প্রস্তুত করে তোলে।"
          }
        />
      </div>
      <StudentsTestimonial />
      <div className="text-center mt-10">
        <ActionButton text={"আরও পড়ুন..."} link="/all_testimonial" />
      </div>
    </section>
  );
}

export default StudentsTestimonialSection;
