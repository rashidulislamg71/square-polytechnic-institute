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
import hostelImage2 from "@assets/images/Hostel_image/hostel.png";
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
    <section className="pt-4" id="hostel">
      {/* Section Title */}
      <div className="text-center mb-12">
        <SectionTitle title="হোস্টেল সুবিধা" />
        <GeneralParagraphText
          text={`স্কয়ার পলিটেকনিক ইন্সটিটিউট শিক্ষার্থীদের জন্য নিশ্চিত করে নিরাপদ, আধুনিক এবং সম্পূর্ণ আরামদায়ক আবাসনের ব্যবস্থা। আমাদের হোস্টেল শুধু কেবল থাকার জায়গা নয়; এটি শিক্ষার্থীদের জন্য এক নিরাপদ দ্বিতীয় বাড়ি (Second Home)। পড়াশোনা, পর্যাপ্ত বিশ্রাম ও ব্যক্তিগত বিকাশের জন্য এটি এক নিখুঁত ও আদর্শ পরিবেশ তৈরি করে, যা শিক্ষার্থীদের উজ্জ্বল ভবিষ্যতের ভিত্তি গড়ে তোলে।`}
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
            <SubTitle
              className="text-xl"
              subTitle={"আমাদের হোস্টেলের- বিশেষ বৈশিষ্ট্য"}
            />
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
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6 mt-6">
            {/* বিস্তারিত জানুন Button */}
            <ActionButton text="বিস্তারিত জানুন..." link="/hostel" />

            {/* Google Map Link */}
            <a
              href="https://www.google.com/maps/place/Square+Polytechnic+Institute+Hostel-002+%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%B0+%E0%A6%AA%E0%A6%B2%E0%A6%BF%E0%A6%9F%E0%A7%87%E0%A6%95%E0%A6%A8%E0%A6%BF%E0%A6%95+%E0%A6%87%E0%A6%A8%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%89%E0%A6%9F+%E0%A6%B9%E0%A7%8B%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%B2-%E0%A7%A6%E0%A7%A6%E0%A7%A8/@24.7047819,89.3977361,3a,90y,55.88h,113.52t/data=!3m7!1e1!3m5!1sdFV743n70D9My91_M7xc1g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-23.521801807261596%26panoid%3DdFV743n70D9My91_M7xc1g%26yaw%3D55.87627295584224!7i16384!8i8192!4m14!1m7!3m6!1s0x39fc4d00435f31e9:0x6089ef19cebf5375!2zU3F1YXJlIFBvbHl0ZWNobmljIEluc3RpdHV0ZSBIb3N0ZWwtMDAyIOCmuOCnjeCmleCmr-CmvOCmvuCmsCDgpqrgprLgpr_gpp_gp4fgppXgpqjgpr_gppUg4KaH4Kao4Ka44KeN4Kaf4Ka_4Kaf4Ka_4KaJ4KafIOCmueCni-CmuOCnjeCmn-Cnh-Cmsi3gp6bgp6bgp6g!8m2!3d24.7047927!4d89.3977863!16s%2Fg%2F11w_t0htxk!3m5!1s0x39fc4d00435f31e9:0x6089ef19cebf5375!8m2!3d24.7047927!4d89.3977863!16s%2Fg%2F11w_t0htxk?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline transition-colors"
            >
              আমাদের হোস্টেল Google Map এ দেখুন !
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostelSection;
