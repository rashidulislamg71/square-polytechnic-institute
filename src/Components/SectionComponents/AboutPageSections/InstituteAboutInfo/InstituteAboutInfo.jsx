import React from "react";
import { motion } from "framer-motion";
import { FiBookOpen, FiTarget, FiInfo } from "react-icons/fi"; // React Icons
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import GeneralParagraphText from "@components/Shared/GeneralParagraphText/GeneralParagraphText";
import { GeneralCard } from "@components/UI/Cards/GeneralCard/GeneralCard";

const instituteAboutInfoData = [
  {
    title: "অনুমোদন",
    icon: <FiBookOpen />,
    description:
      "স্কয়ার পলিটেকনিক ইন্সটিটিউট গণপ্রজাতন্ত্রী বাংলাদেশ সরকার এবং বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) কর্তৃক অনুমোদিত একটি বেসরকারি কারিগরি শিক্ষা প্রতিষ্ঠান।",
  },
  {
    title: "ইতিহাস ও উদ্দেশ্য",
    icon: <FiTarget />,
    description:
      "দেশের কারিগরি শিক্ষায় দক্ষ জনশক্তি তৈরি করার লক্ষ্যে ২০১৬ সালে প্রতিষ্ঠিত হয় এই ইন্সটিটিউট। প্রতিষ্ঠার পর থেকেই এটি বাস্তব ও কর্মমুখী জ্ঞান প্রদানের মাধ্যমে শিল্প-কারখানাগুলোর চাহিদা পূরণে নিরলস কাজ করে যাচ্ছে।",
  },
  {
    title: "প্রাতিষ্ঠানিক তথ্য",
    icon: <FiInfo />,
    details: [
      { label: "প্রতিষ্ঠিত", value: "২০১৬" },
      {
        label: "অবস্থান",
        value:
          "গাড়িদহ বাসস্ট্যান্ড, শেরপুর, বগুড়া (পল্লী উন্নয়ন একাডেমি দক্ষিণ পাশে - RDA)",
      },
      { label: "প্রতিষ্ঠান কোড", value: "20294" },
      { label: "EIIN নম্বর", value: "139309" },
    ],
  },
];

function InstituteAboutInfo() {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      {/* Section Intro */}
      <div className="text-center mb-12">
        <SectionTitle title={"আমাদের সম্পর্কে"} />
        <GeneralParagraphText
          text={
            " স্কয়ার পলিটেকনিক ইনস্টিটিউট বাংলাদেশের অন্যতম মানসম্মত কারিগরি শিক্ষা প্রতিষ্ঠান। আমরা শিক্ষার্থীদের হাতে-কলমে বাস্তব অভিজ্ঞতা প্রদান করি যাতে তারা দক্ষ পেশাজীবী হিসেবে প্রস্তুত হতে পারে।"
          }
        />
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {instituteAboutInfoData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <GeneralCard
              icon={item.icon}
              subTitle={item.title}
              description={item.description}
              isDescriptionArray={item.details}
              parentClassName="w-[350px] lg:w-[380px] h-[220px] border-t-3 border-amber-400"
              iconTitleClassName="flex gap-2"
              descriptionClassName="text-[16px] "
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default InstituteAboutInfo;
