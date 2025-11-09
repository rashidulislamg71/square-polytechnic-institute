import React from "react";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import PeragraphText from "@components/Shared/PeragraphText/PeragraphText";
import industrialTrainingImg from "@assets/images/Industral-training.png";
import { SingleBigImage } from "@components/UI/GeneralImage/GeneralImage";
import { FaCheckCircle } from "react-icons/fa";
// Data array
const trainingData = {
  mainText:
    "স্কয়ার পলিটেকনিক ইনস্টিটিউটে আমরা শুধু তত্ত্বের আলোচনায় সীমাবদ্ধ থাকি না। শিক্ষার্থীরা হাতে-কলমে বাস্তব অভিজ্ঞতা অর্জন করে যোগ্য হয়ে ওঠে। আমাদের বাধ্যতামূলক এবং সুপরিকল্পিত শিল্প প্রশিক্ষণ ও ইন্টার্নশিপ প্রোগ্রাম শিক্ষার্থীদের শিক্ষাজীবনকে সরাসরি কর্মজগতের চাহিদার সাথে সংযুক্ত করে।",
  listItems: [
    "ইন্ডাস্ট্রি-গ্রেড প্রজেক্টে কাজ করে হাতে-কলমে অভিজ্ঞতা অর্জন।",
    "বিশেষজ্ঞ প্রকৌশলী ও অভিজ্ঞ শিক্ষকদের তত্ত্বাবধানে পেশাদারিত্ব শেখা।",
    "ইন্টার্নশিপ শেষে বাস্তব ইন্ডাস্ট্রি দক্ষতা, সমস্যা সমাধানের ক্ষমতা ও প্রজেক্ট পোর্টফোলিও অর্জন।",
  ],
  closingText:
    "আমরা শিক্ষার্থীদের এমনভাবে তৈরি করি যাতে তারা শুধু চাকরিপ্রার্থী না হয়ে, আগামী দিনের ইন্ডাস্ট্রিয়াল লিডার হতে পারে। আমাদের লক্ষ্য: ১০০% ক্যারিয়ার প্রস্তুতি নিশ্চিত করা।",
};

const IndustrialTraining = () => {
  const imageLoadControl = industrialTrainingImg || null;

  return (
    <section
      id="internship"
      itemScope
      itemType="https://schema.org/EducationalOrganization"
    >
      {/* Section Title */}
      <div className="text-center">
        <SectionTitle title="শিল্প প্রশিক্ষণ ও ইন্টার্নশিপ" />
      </div>

      {/* Flex Layout */}
      <div className="flex flex-col-reverse lg:flex-row items-start gap-10 md:gap-16">
        {/* Left - Text Content */}
        <div className="flex-1" itemProp="description">
          <PeragraphText peraText1={trainingData.mainText} />

          <ul className="my-3 space-y-3">
            {trainingData.listItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <FaCheckCircle className="mt-1 text-green-500" />
                {item}
              </li>
            ))}
          </ul>

          <PeragraphText
            peraText1={trainingData.closingText}
            className="mt-6"
          />
        </div>

        {/* Right - Image */}
        <div className="flex-1">
          <SingleBigImage
            image={imageLoadControl}
            alt="Industrial Training and Internship at Square Polytechnic Institute"
            className="rounded w-full object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default IndustrialTraining;
