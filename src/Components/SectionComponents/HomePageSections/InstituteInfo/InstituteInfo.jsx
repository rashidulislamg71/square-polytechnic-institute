import React from "react";
import ActionButton from "../../../UI/ActionButton/ActionButton";
import {
  FixedNumbers,
} from "../../../UI/ContactNumber/ContactNumber";
import PeragraphText from "../../../Shared/PeragraphText/PeragraphText";
import SubTitle from "../../../Shared/Titles/SubTitle/SubTitle";

/**
 * Static data for Institute Information.
 * Since the data is fixed and does not change dynamically,
 * it is declared outside the component for performance and clarity.
 */
const instituteInfo = {
  title: "ইন্সটিটিউট পরিচিতি",
  welcomeMessage: "স্কয়ার পলিটেকনিক ইন্সটিটিউট আপনাকে স্বাগতম!!",
  description:
    "স্কয়ার পলিটেকনিক ইন্সটিটিউট গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষা মন্ত্রণালয়াধীন কারিগরি শিক্ষা অধিদপ্তরের একটি কারিগরি বেসরকারি শিক্ষা প্রতিষ্ঠান। দেশের কারিগরি শিক্ষায় দক্ষ জনশক্তি তৈরি করার লক্ষ্যে ২০১৬ সালে প্রতিষ্ঠিত হয় স্কয়ার পলিটেকনিক ইনস্টিটিউট। এটি বগুড়া জেলা শেরপুর উপজেলা গাড়ীদহ বাসস্ট্যান্ড, পল্লী উন্নয়ন একাডেমী দক্ষিণ পাশে অবস্থিত।",
  details: [
    { label: "প্রতিষ্ঠিত", value: "2016" },
    {
      label: "অবস্থান",
      value: "গাড়িদহ বাস স্ট্যান্ড, শেরপুর, বগুড়া (পল্লী উন্নয়ন একাডেমি দক্ষিণ পাশে (RDA))",
    },
    { label: "প্রতিষ্ঠান কোড", value: "20294" },
    { label: "EIIN নম্বর", value: "139309" },
  ],
};

/**
 * Component: InfoList
 * This sub-component renders the list of institute details.
 * It checks if the detail is a phone number to render ContactNumber component.
 */
const InfoList = ({ details }) => (
  <ul>
    {details.map((detail, idx) => (
      <li key={idx}>
        <strong className="text-[#122436]">{detail.label}:</strong>
        <span className="text-gray-700">{detail.value}</span>
      </li>
    ))}
    {/* FixedNumbers component always displayed at the end */}
    <FixedNumbers />
  </ul>
);

/**
 * Component: InstituteInfo
 * This is the main component to display Institute information.
 * It includes a subtitle, description, list of details, and a "Read More" button.
 */
const InstituteInfo = () => {
  return (
    // Wrapper section with flex layout and vertical gap
    <section className="flex flex-col gap-3">
      {/* Welcome message as subtitle */}
     <div className="border-b-3 border-amber-500">
       <SubTitle subTitle={instituteInfo.welcomeMessage} />
     </div>

      {/* Description paragraph */}
      <PeragraphText
        peraText1={instituteInfo.description}
        className="text-gray-700 leading-relaxed text-base"
      />

      {/* Render institute details */}
      <InfoList details={instituteInfo.details} />

      {/* Action button for more details */}
      <div className="mt-2">
        <ActionButton
          text="আরও জানুন..."
          link="/about"
          bg_color="bg-[#27ae60] hover:bg-green-600"
          aria-label="Read more about the Institute"
        />
      </div>
    </section>
  );
};

export default InstituteInfo;
