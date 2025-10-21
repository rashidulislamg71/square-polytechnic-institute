import React from "react";
import {
  FaShieldAlt,
  FaMapMarkerAlt,
  FaBed,
  FaWifi,
  FaUsers,
  FaUtensils,
  FaPrayingHands,
  FaFirstAid,
} from "react-icons/fa";
import ActionButton from "@components/UI/ActionButton/ActionButton";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import { DoubleMediumImage } from "@components/UI/GeneralImage/GeneralImage";

import hostelImage1 from "@assets/images/Hostel_image/hostel.jpeg";
import hostelImage2 from "@assets/images/Hostel_image/hostelb.jpeg";
import GeneralParagraphText from "@components/Shared/GeneralParagraphText/GeneralParagraphText";
import SubTitle from "@components/Shared/Titles/SubTitle/SubTitle";
  const features = [
    {
      id: 1,
      icon: <FaShieldAlt className="text-green-600 text-2xl" />,
      title: "নিরাপদ ও ২৪/৭ সিকিউরিটি",
    },
    {
      id: 2,
      icon: <FaMapMarkerAlt className="text-green-600 text-2xl" />,
      title: "ক্যাম্পাসের কাছাকাছি সুবিধাজনক অবস্থান",
    },
    {
      id: 3,
      icon: <FaBed className="text-green-600 text-2xl" />,
      title: "আরামদায়ক একক, ডাবল এবং ট্রিপল রুম",
    },
    {
      id: 4,
      icon: <FaWifi className="text-green-600 text-2xl" />,
      title: "দ্রুতগতির ওয়াই-ফাই সংযোগ",
    },
    {
      id: 5,
      icon: <FaUsers className="text-green-600 text-2xl" />,
      title: "কমন এরিয়া ও লাউঞ্জ স্পেস",
    },
    {
      id: 6,
      icon: <FaUtensils className="text-green-600 text-2xl" />,
      title: "স্বাস্থ্যকর এবং সুষম খাবার",
    },
    {
      id: 7,
      icon: <FaPrayingHands className="text-green-600 text-2xl" />,
      title: "নামাজের জায়গা",
    },
    {
      id: 8,
      icon: <FaFirstAid className="text-green-600 text-2xl" />,
      title: "প্রাথমিক চিকিৎসা ও স্বাস্থ্যসেবা",
    },
  ];

const HostelSection = () => {
  return (
    <section className="py-16 bg-gray-50" id="hostel">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <SectionTitle title="হোস্টেল সুবিধা" />
          <GeneralParagraphText
            text={`স্কয়ার পলিটেকনিক ইন্সটিটিউট শিক্ষার্থীদের জন্য নিশ্চিত করে **নিরাপদ, আধুনিক এবং সম্পূর্ণ আরামদায়ক** আবাসনের ব্যবস্থা। আমাদের হোস্টেল পরিবেশ এমনভাবে ডিজাইন করা হয়েছে, যেখানে প্রতিটি শিক্ষার্থী নিরিবিলি পরিবেশে **মনোযোগ সহকারে পড়াশোনা** করতে পারবে। এটি শুধু থাকার জায়গা নয়, এটি একটি **শিক্ষার্থীদের দ্বিতীয় বাড়ি (Second Home)**, যা পড়াশোনা, বিশ্রাম ও ব্যক্তিগত বিকাশের এক নিখুঁত পরিবেশ তৈরি করে।`}
          />
        </div>

        {/* Flex Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - Image */}
          <div className="flex-1 w-full lg:w-1/2 mt-[-80px] md:mt-[-40px]  ">
            <DoubleMediumImage image1={hostelImage1} image2={hostelImage2} />
          </div>

          {/* Right - Features */}
          <div className="flex-1 w-full lg:w-1/2">
            <div className="mb-3 border-b-2 border-amber-500">
              <SubTitle subTitle={"হোস্টেল বিশেষ বৈশিষ্ট্য"} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-white px-4 py-2 rounded  shadow-sm hover:shadow-md hover:bg-green-50 transition"
                >
                  {item.icon}
                  <span className="text-gray-700 font-medium text-sm sm:text-base">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <ActionButton text="বিস্তারিত জানুন..." link={"/hostel"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostelSection;
