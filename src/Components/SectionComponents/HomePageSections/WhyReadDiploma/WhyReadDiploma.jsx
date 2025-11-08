import React from "react";
import { Helmet } from "react-helmet-async";
import {
  diplomaIntro,
  diplomaFeatures,
} from "../../../../Data/HomePageJsonData/whyReadDiploma.js";
import SectionTitle from "./../../../Shared/Titles/SectionTitle/SectionTitle";
import GeneralPeragraphText from "../../../Shared/GeneralParagraphText/GeneralParagraphText.jsx";
import SubTitle from "./../../../Shared/Titles/SubTitle/SubTitle";

const WhyStudyDiploma = () => {
  return (
    <section className="relative">
      <Helmet>
        <title>
          কেন পড়বেন ডিপ্লোমা ইন ইঞ্জিনিয়ারিং | Square Polytechnic Institute
        </title>
        <meta
          name="description"
          content="ডিপ্লোমা ইন ইঞ্জিনিয়ারিং এর মাধ্যমে হাতে-কলমে শিক্ষা, দ্রুত দক্ষতা অর্জন, চাকরির সুযোগ, বিদেশে কর্মসংস্থান এবং উদ্যোক্তা হওয়ার সুযোগ।"
        />
        <meta
          name="keywords"
          content="ডিপ্লোমা ইন ইঞ্জিনিয়ারিং, কারিগরি শিক্ষা, চাকরি, দক্ষতা, উদ্যোক্তা"
        />
      </Helmet>

      <div className="container mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12" data-aos="fade-down">
          <SectionTitle title={"কেন পড়বেন ডিপ্লোমা ইন ইঞ্জিনিয়ারিং?"} />
          <div className="mt-[-15px]">
            {diplomaIntro.map((para, i) => (
              <GeneralPeragraphText
                key={i}
                text={para}
                className="mt-0 text-justify md:text-center"
              />
            ))}
          </div>
        </header>

        {/* Feature Cards */}
        <ul
          data-aos="fade-left"
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none"
        >
          {diplomaFeatures.map((feature) => {
            const Icon = feature.icon; // React component
            return (
              <li
                key={feature.id}
                className="bg-white p-4 shadow-lg rounded-lg hover:shadow-2xl transition duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon
                    className={`text-lg text-green-600`}
                    aria-hidden="true"
                  />
                  <SubTitle subTitle={feature.title} />
                </div>
                <p className="text-gray-700 text-sm">{feature.desc}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default WhyStudyDiploma;
