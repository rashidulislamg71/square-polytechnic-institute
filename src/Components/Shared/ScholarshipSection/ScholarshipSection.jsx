import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

// 🎯 Scholarship Data Object
const scholarshipData = {
  left: {
    title: "🏆 100% ফীতে",
    subtitle: "আপনার স্বপ্নের পথ চলা শুরু হোক",
    institute: "SQUARE POLYTECHNIC",
    bottomText: "এর সাথে!",
  },
  right: {
    heading1: "100% স্কলারশিপ",
    heading2: "আপনার শেখার পথ হোক উন্মুক্ত_",
    description:
      "“শিক্ষাই ভবিষ্যৎ” — আমরা বিশ্বাস করি প্রতিটি মেধাবী শিক্ষার্থীই সাফল্যের সুযোগ পাওয়ার যোগ্য। স্কয়ার পলিটেকনিক ইন্সটিটিউটের স্কলারশিপ প্রোগ্রাম আপনাকে স্বপ্ন থেকে সাফল্যের পথে নিয়ে যাবে।",
    buttonText: "এখনই আবেদন করুন",
    link: "/admission",
  },
};

const ScholarshipSection = () => {
  const { left, right } = scholarshipData;

  return (
    <section
      className="flex flex-col md:flex-row justify-between items-stretch 
      text-center md:text-left bg-green-100 shadow-md overflow-hidden "
    >
      {/* Left side */}
      <div
        className="flex items-center justify-center text-center w-full md:w-1/3 
        bg-green-500 text-white p-4 relative"
      >
        <h3 className="text-xl sm:text-2xl font-bold leading-relaxed">
          <span
            className="bg-white text-green-500 py-1 px-4 sm:px-5 text-lg sm:text-xl 
            rounded-full inline-block mb-2 shadow-md animate-bounce"
          >
            {left.title}
          </span>
          <br />
          {left.subtitle} <br />
          <span className="text-yellow-300">{left.institute}</span> <br />
          {left.bottomText}
        </h3>
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-center w-full md:w-2/3 text-center h-full p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-relaxed">
          {right.heading1} <br />
          <span className="text-orange-600">{right.heading2}</span>
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
          {right.description}
        </p>

        <Link
          to={right.link}
          className="m-auto flex items-center gap-2 bg-orange-500 text-white font-semibold py-2 px-5 
          rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md cursor-pointer mb-5 md:mb-0 group"
        >
          {right.buttonText}
          <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </section>
  );
};

export default ScholarshipSection;
