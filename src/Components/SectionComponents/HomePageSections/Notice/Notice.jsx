import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { GiNotebook } from "react-icons/gi";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import SubTitle from "@components/Shared/Titles/SubTitle/SubTitle";
import notices from "@data/NoticesData/NoticesData";

const Notice = () => {
  const { academicNotices, btebNotices } = useMemo(() => {
    const sorted = [...notices].sort(
      (a, b) =>
        new Date(b.date.split("-").reverse().join("-")) -
        new Date(a.date.split("-").reverse().join("-"))
    );

    const academic = sorted
      .filter((n) => n.type?.toLowerCase() === "academy")
      .slice(0, 2);

    const bteb = sorted
      .filter((n) => n.type?.toLowerCase() === "bteb")
      .slice(0, 2);

    return { academicNotices: academic, btebNotices: bteb };
  }, [notices]);

  return (
    <div className="container mx-auto px-0 py-8 md:py-15">
      <SectionTitle title="নোটিশ" />

      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* 🔹 Academic Notice Section */}
        <div className=" w-full bg-[#f9f9f9] p-4 rounded shadow flex-1">
          <div className="mb-4 border-b-2 border-green-600 pb-2">
            <SubTitle subTitle="একাডেমিক নোটিশ" />
          </div>

          <ul className="flex flex-col gap-3 p-4">
            {academicNotices.length > 0 ? (
              academicNotices.map((notice) => (
                <li key={notice.id}>
                  <a
                    target="_blank"
                    href={notice.file}
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center"
                  >
                    <span className="text-[12px] text-green-600">
                      <GiNotebook />
                    </span>
                    <p className="text-[14px] border-b hover:border-b-green-500">
                      {notice.title}
                    </p>
                  </a>
                  <small className="text-[12px] text-gray-500">
                    প্রকাশন তারিখ : {notice.date}
                  </small>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-sm">কোনো নোটিশ পাওয়া যায়নি</p>
            )}
          </ul>

          <div className="text-right mt-3">
            <Link
              to="/notice?category=academic"
              className="text-[12px] bg-green-600 text-white hover:bg-green-700 py-0.5 px-2 rounded cursor-pointer"
            >
              সকল নোটিশ
            </Link>
          </div>
        </div>

        {/* 🔹 BTEB Notice Section */}
        <div className="bg-[#f9f9f9] p-4 rounded shadow flex-1">
          <div className="mb-4 border-b-2 border-amber-500 pb-2">
            <SubTitle subTitle="সরকারি নোটিশ (BTEB)" />
          </div>

          <ul className="flex flex-col gap-3 p-4">
            {btebNotices.length > 0 ? (
              btebNotices.map((notice) => (
                <li key={notice.id}>
                  <a
                    target="_blank"
                    href={notice.file}
                    rel="noopener noreferrer"
                    className="flex gap-2 items-center"
                  >
                    <span className="text-[12px] text-amber-600">
                      <GiNotebook />
                    </span>
                    <p className="text-[14px] border-b hover:border-b-amber-500">
                      {notice.title}
                    </p>
                  </a>
                  <small className="text-[12px] text-gray-500">
                    প্রকাশন তারিখ : {notice.date}
                  </small>
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-sm">কোনো নোটিশ পাওয়া যায়নি</p>
            )}
          </ul>

          <div className="text-right mt-3">
            <Link
              to="/notice?category=bteb"
              className="text-[12px] bg-amber-500 text-white hover:bg-amber-600 py-0.5 px-2 rounded cursor-pointer"
            >
              সকল নোটিশ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
