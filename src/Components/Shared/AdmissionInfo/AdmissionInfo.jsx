import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import DepartmentAboutsIcon from "@components/SectionComponents/SingleDepartmentSections/DepartmentAboutsIcon";

import ActionButton from "@components/UI/ActionButton/ActionButton";
import SubTitle from "@components/Shared//Titles/SubTitle/SubTitle";

const admissionInfo = [
  {
    id: 1,
    title: "ভর্তির যোগ্যতা",
    points: [
      "এসএসসি/দাখিল/ভোকেশনাল/উন্মুক্ত বা সমমান পরীক্ষায় যে কোনো বিভাগ থেকে উত্তীর্ণ হতে হবে।",
      "ন্যূনতম GPA 2.00 প্রাপ্ত হতে হবে।",
    ],
  },
  {
    id: 2,
    title: "প্রয়োজনীয় কাগজপত্র",
    points: [
      "এসএসসি / সমমান পরীক্ষার মূল নম্বরপত্র (মার্কশিট) ও প্রশংসাপত্র।",
      "সম্প্রতি তোলা ৪ কপি পাসপোর্ট সাইজের রঙিন ছবি।",
      "শিক্ষার্থীর জাতীয় পরিচয়পত্র / জন্মনিবন্ধনের ফটোকপি।",
      "পিতা ও মাতার ভোটার আইডি কার্ডের ফটোকপি।",
    ],
  },
];

function AdmissionInfo({ showIcon = true }) {
  return (
    <section className="py-10 md:py-15 px-5 md:px-10 ">
      <div className="max-w-6xl mx-auto text-center">
        {/* 🔹 Header */}
        <div className="flex flex-col items-center mb-3">
          {/* Icon Optional */}
          {showIcon && (
            <DepartmentAboutsIcon
              icon={FaUserGraduate}
              className="inline-block"
            />
          )}

          <div className="border-b-2 border-amber-400 inline-block px-4  ">
            <SubTitle subTitle="ভর্তি সংক্রান্ত বিস্তারিত তথ্য" />
          </div>
        </div>

        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed ">
          স্কয়ার পলিটেকনিক ইন্সটিটিউটে ৪ বছর মেয়াদী ডিপ্লোমা ইন ইঞ্জিনিয়ারিং
          কোর্সে ভর্তির সুযোগ পেতে নিচের তথ্যগুলো ভালোভাবে পড়ে নাও।
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
          {admissionInfo.map((data) => (
            <div
              key={data.id}
              className="bg-white p-4 rounded shadow-md border-t-4 border-green-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-1">
                {data.title}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                {data.points.map((point, i) => (
                  <li
                    key={i}
                    className="hover:text-green-700 transition-colors duration-200"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdmissionInfo;
