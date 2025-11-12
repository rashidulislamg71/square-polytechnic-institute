import React from "react";
import ActionButton from "@components/UI/ActionButton/ActionButton";
import { FixedNumbers } from "@components/UI/ContactNumber/ContactNumber";
import PeragraphText from "@components/Shared/PeragraphText/PeragraphText";
import SubTitle from "@components/Shared/Titles/SubTitle/SubTitle";

const instituteInfo = {
  title: "ইন্সটিটিউট পরিচিতি",
  welcomeMessage: "স্কয়ার পলিটেকনিক ইন্সটিটিউট আপনাকে স্বাগতম!!",
  description:
    "স্কয়ার পলিটেকনিক ইন্সটিটিউট গণপ্রজাতন্ত্রী বাংলাদেশ সরকারের শিক্ষা মন্ত্রণালয়াধীন কারিগরি শিক্ষা অধিদপ্তরের একটি কারিগরি বেসরকারি শিক্ষা প্রতিষ্ঠান। দেশের কারিগরি শিক্ষায় দক্ষ জনশক্তি তৈরি করার লক্ষ্যে ২০১৬ সালে প্রতিষ্ঠিত হয় স্কয়ার পলিটেকনিক ইন্সটিটিউট। বগুড়া জেলার শেরপুর উপজেলার গাড়িদহ বাসস্ট্যান্ড, পল্লী উন্নয়ন একাডেমীর দক্ষিণ পাশে মনোরম পরিবেশে আমাদের এই ক্যাম্পাসটি অবস্থিত।",
  details: [
    { label: "প্রতিষ্ঠিত", value: "2016" },
    {
      label: "অবস্থান",
      value:
        "গাড়িদহ বাসস্ট্যান্ড, শেরপুর, বগুড়া (পল্লী উন্নয়ন একাডেমির দক্ষিণ পাশে (RDA))",
    },
    { label: "প্রতিষ্ঠান কোড", value: "20294" },
    { label: "EIIN নম্বর", value: "139309" },
  ],
};

const InfoList = ({ details }) => (
  <ul>
    {details.map((detail, idx) => (
      <li key={idx}>
        <strong className="text-[#122436]">{detail.label}:</strong>
        <span className="text-gray-700">{detail.value}</span>
      </li>
    ))}
    <FixedNumbers />
  </ul>
);

const InstituteInfo = () => {
  return (
    // Wrapper section with flex layout and vertical gap
    <section className="flex flex-col gap-3">
      {/* Welcome message as subtitle */}
      <div className="border-b-3 border-amber-500 text-left">
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
