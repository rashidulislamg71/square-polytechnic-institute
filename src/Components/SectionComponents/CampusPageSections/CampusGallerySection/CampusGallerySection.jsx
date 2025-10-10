import React from "react";

// Images import
import campus1 from "../../../../assets/images/Campus_images/CampusGallery_images/campus1.jpg";
import campus2 from "../../../../assets/images/Campus_images/CampusGallery_images/campus2.png";
import campus3 from "../../../../assets/images/Campus_images/CampusGallery_images/campus3.png";
import campus4 from "../../../../assets/images/Campus_images/CampusGallery_images/campus4.jpg";
import campus5 from "../../../../assets/images/Campus_images/CampusGallery_images/campus5.jpg";
import campus6 from "../../../../assets/images/Campus_images/CampusGallery_images/campus6.jpg";
import campus7 from "../../../../assets/images/Campus_images/CampusGallery_images/campus7.jpg";
import campus8 from "../../../../assets/images/Campus_images/CampusGallery_images/campus8.jpg";
import campus9 from "../../../../assets/images/Campus_images/CampusGallery_images/campus9.jpg";
import campus10 from "../../../../assets/images/Campus_images/CampusGallery_images/campus10.jpg";
import campus11 from "../../../../assets/images/Campus_images/CampusGallery_images/campus11.jpg";
import campus12 from "../../../../assets/images/Campus_images/CampusGallery_images/campus12.jpg";
import ImageGallery from "../../../Shared/ImageGallery/ImageGallery";
import SectionTitle from "../../../Shared/Titles/SectionTitle/SectionTitle";
import GeneralParagraphText from "../../../Shared/GeneralParagraphText/GeneralParagraphText";
import ActionButton from "../../../UI/ActionButton/ActionButton";

const campusGalleryImages = [
  {
    src: campus1,
    title: "কম্পিউটার ল্যাব",
    description:
      "আধুনিক কম্পিউটার ল্যাব যেখানে শিক্ষার্থীরা প্র্যাকটিক্যাল কাজ শিখে।",
  },
  {
    src: campus2,
    title: "কম্পিউটার ল্যাব",
    description: "সর্বাধুনিক প্রযুক্তি সমৃদ্ধ ল্যাব, হাতে-কলমে শেখার সুযোগ।",
  },
  {
    src: campus3,
    title: "কম্পিউটার ল্যাব",
    description:
      "শিক্ষার্থীরা এখানে সফটওয়্যার ও হার্ডওয়্যার উভয় বিষয়ে অনুশীলন করে।",
  },
  {
    src: campus4,
    title: "কম্পিউটার ল্যাব কম্পিউটার ল্যাব",
    description:
      "কম্পিউটার ল্যাবের একটি ভিউ যেখানে একসাথে অনেক শিক্ষার্থী কাজ করে।",
  },
  {
    src: campus5,
    title: "কম্পিউটার ল্যাব",
    description: "নতুন কম্পিউটার ও নেটওয়ার্ক সুবিধা সমৃদ্ধ ল্যাব।",
  },
  {
    src: campus6,
    title: "কম্পিউটার ল্যাব",
    description: "প্রশিক্ষণমূলক কার্যক্রমের জন্য ব্যবহৃত কম্পিউটার ল্যাব।",
  },
  {
    src: campus7,
    title: "কম্পিউটার ল্যাব",
    description:
      "শিক্ষার্থীরা তাদের প্রোজেক্ট ও অ্যাসাইনমেন্ট এখানে সম্পন্ন করে।",
  },
  {
    src: campus8,
    title: "কম্পিউটার ল্যাব",
    description: "ব্যবহারিক জ্ঞান অর্জনের অন্যতম জায়গা এই ল্যাব।",
  },
  {
    src: campus9,
    title: "টেক্সটাইল ল্যাব",
    description:
      "টেক্সটাইল ইঞ্জিনিয়ারিং শিক্ষার্থীদের জন্য ব্যবহারিক শিক্ষা কেন্দ্র।",
  },
  {
    src: campus10,
    title: "কম্পিউটার ল্যাব",
    description: "বিভিন্ন কম্পিউটার কোর্স পরিচালনার জন্য ব্যবহৃত ল্যাব।",
  },
  {
    src: campus11,
    title: "কম্পিউটার ল্যাব",
    description: "উন্নত সফটওয়্যার শেখার জন্য বিশেষায়িত ল্যাব।",
  },
  {
    src: campus12,
    title: "কম্পিউটার ল্যাব",
    description: "শিক্ষার্থীদের প্রজেক্ট ও গবেষণার জন্য খোলা ল্যাবরেটরি।",
  },
];

const CampusGallerySection = () => {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
      <SectionTitle title={"ক্যাম্পাস গ্যালারি"} />
      <GeneralParagraphText
        text={`স্কয়ার পলিটেকনিক ইন্সটিটিউটে প্রতিটি কোণে লুকিয়ে আছে শেখার আনন্দ ও অনুপ্রেরণার গল্প। এই গ্যালারিতে আপনি দেখতে পাবেন **আধুনিক ল্যাব**, **সুপরিসর ক্লাসরুম ও লাইব্রেরি**, **খোলামেলা মাঠ**
এই গ্যালারির প্রতিটি ছবি আমাদের ক্যাম্পাসের প্রাণবন্ত শিক্ষাজীবন ও আধুনিক অবকাঠামোর এক অনন্য ঝলক উপহার দেবে।`}
      />

      <ImageGallery images={campusGalleryImages} />
      <div className="text-center mt-10">
        <ActionButton link={"/galleryEvent"} text={"আরও দেখুন..."} />
      </div>
    </section>
  );
};

export default CampusGallerySection;
