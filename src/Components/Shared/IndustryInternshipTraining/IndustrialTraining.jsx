import React from "react";
import SectionTitle from "./../Titles/SectionTitle/SectionTitle";
import PeragraphText from "../PeragraphText/PeragraphText";

import Image from "../../../assets/images/Departments_img/textile.jpeg";
import { SingleBigImage } from "../../UI/GeneralImage/GeneralImage";

const IndustrialTraining = () => {
  return (
    <section className="py-16 " id="internship">
      {/* Section Title */}
      <div className="text-center mb-12">
        <SectionTitle title="শিল্প প্রশিক্ষণ ও ইন্টার্নশিপ" />
      </div>
      {/* Flex Layout */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-10 lg:gap-15 ">
        {/* Left - Text Content */}
        <div className="flex-1 mt-[-20px] md:mt-[0px] ">
          <PeragraphText
            peraText1="স্কয়ার পলিটেকনিক ইনস্টিটিউট শিক্ষার্থীদের জন্য বাস্তবভিত্তিক শিল্প প্রশিক্ষণ এবং ইন্টার্নশিপের সুযোগ প্রদান করে। এই প্রশিক্ষণ শিক্ষার্থীদের শিক্ষাজীবনকে ইন্ডাস্ট্রির সাথে সংযুক্ত করে, যেখানে তারা প্রজেক্ট ভিত্তিক কাজ ও বাস্তব অভিজ্ঞতা অর্জন করতে পারে।"
            peraText2="ইন্টার্নশিপ চলাকালীন শিক্ষার্থীরা অভিজ্ঞ প্রকৌশলী এবং শিক্ষকদের তত্ত্বাবধানে কাজ করবে, প্রজেক্ট সম্পন্ন করবে এবং প্রতিবেদন জমা দেবে। প্রশিক্ষণ শেষে শিক্ষার্থীরা বাস্তব ইন্ডাস্ট্রি দক্ষতা অর্জন করবে যা তাদের ক্যারিয়ারে সহায়ক হবে।"
          />
        </div>
        {/* Right - Image */}
        <div>
          <SingleBigImage image={Image} />
        </div>
      </div>
    </section>
  );
};

export default IndustrialTraining;
