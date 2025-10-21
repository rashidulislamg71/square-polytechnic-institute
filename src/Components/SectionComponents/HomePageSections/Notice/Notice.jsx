import React from "react";


import { Link} from "react-router-dom";

import { GiNotebook } from "react-icons/gi";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import SubTitle from "@components/Shared/Titles/SubTitle/SubTitle";

const Notice = () => {
  // src/data/notices.js
  const notices = [
    {
      id: 1,
      type: "একাডেমিক",
      title: "পরবর্তী সেমিস্টারের রেজিস্ট্রেশন শুরু",
      date: "07-09-2025",
      link: "#",
    },
    {
      id: 2,
      type: "সরকারি",
      title: "জাতীয় ছুটির দিন ঘোষণা",
      date: "05-09-2025",
      link: "#",
    },
    {
      id: 3,
      type: "একাডেমিক",
      title: "পরীক্ষার সময়সূচি প্রকাশ",
      date: "06-09-2025",
      link: "#",
    },
    {
      id: 4,
      type: "সরকারি",
      title: "নতুন শিক্ষা নীতির ঘোষণা",
      date: "01-09-2025",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-15">
      {/* Title */}
      <SectionTitle title="নোটিশ" />

      {/* Notices Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Academic Notices */}
        <div className="bg-[#f9f9f9] p-4 rounded shadow flex-1">
          <div className="mb-4 border-b-2 border-green-600 pb-2">
            <SubTitle subTitle="একাডেমিক নোটিশ" />
          </div>
          <div className="p-4">
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="flex gap-2 items-center">
                  <span className="text-[12px] text-green-600">
                    <GiNotebook />
                  </span>
                  <p className="text-[14px] border-b hover:border-b-green-500">
                    পরীক্ষার সময়সূচি প্রকাশ
                  </p>
                </Link>
                <small className="text-[12px] text-gray-500">
                  প্রকাশন তারিখ : 2025-09-06
                </small>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <span className="text-[12px] text-green-600">
                    <GiNotebook />
                  </span>
                  <p className="text-[14px] border-b hover:border-b-green-500">
                    পরবর্তী সেমিস্টারের রেজিস্ট্রেশন শুরু
                  </p>
                </Link>
                <small className="text-[12px] text-gray-500">
                  প্রকাশন তারিখ : 2025-09-07
                </small>
              </li>
            </ul>

            <div className="text-right mt-3">
              <Link to="/notice" className="text-[12px] bg-green-600 text-white hover:bg-green-700 py-0.5 px-2 rounded cursor-pointer">
                সকল নোটিশ
              </Link>
            </div>
          </div>
        </div>

        {/* BTEB Notices */}
        <div className="bg-[#f9f9f9] p-4 rounded shadow flex-1">
          <div className="mb-4 border-b-2 border-amber-500 pb-2">
            <SubTitle subTitle="সরকারি নোটিশ (BTEB)" />
          </div>
          <div className="p-4">
            <ul className="flex flex-col gap-3">
              <li>
                <Link className="flex gap-2 items-center">
                  <span className="text-[12px] text-amber-600">
                    <GiNotebook />
                  </span>
                  <p className="text-[14px] border-b hover:border-b-amber-500">
                    ২০২৫-২৬ শিক্ষাবর্ষে ডিপ্লোমা পর্যায়ে ভর্তি পরীক্ষা
                  </p>
                </Link>
                <small className="text-[12px] text-gray-500">
                  প্রকাশন তারিখ : 2025-07-27
                </small>
              </li>
              <li>
                <Link className="flex gap-2 items-center">
                  <span className="text-[12px] text-amber-600">
                    <GiNotebook />
                  </span>
                  <p className="text-[14px] border-b hover:border-b-amber-500">
                    নতুন সিলেবাস অনুযায়ী পাঠ্যপুস্তক প্রকাশ
                  </p>
                </Link>
                <small className="text-[12px] text-gray-500">
                  প্রকাশন তারিখ : 2025-06-15
                </small>
              </li>
            </ul>

            <div className="text-right mt-3">
              <Link to="/notice" className="text-[12px] bg-amber-500 text-white hover:bg-amber-600 py-0.5 px-2 rounded cursor-pointer">
                সকল নোটিশ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
