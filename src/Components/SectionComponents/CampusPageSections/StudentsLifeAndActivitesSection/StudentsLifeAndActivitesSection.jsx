import React from "react";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import GeneralParagraphText from "@components/Shared/GeneralParagraphText/GeneralParagraphText";
import ImageGallery from "@components/Shared/ImageGallery/ImageGallery";
import ActionButton from "@components/UI/ActionButton/ActionButton";

// Images import
import campus1 from "@assets/images/Campus_images/CampusGallery_images/campus1.jpg";
import campus2 from "@assets/images/Campus_images/CampusGallery_images/campus2.png";
import campus3 from "@assets/images/Campus_images/CampusGallery_images/campus3.png";
import campus4 from "@assets/images/Campus_images/CampusGallery_images/campus4.jpg";
import campus5 from "@assets/images/Campus_images/CampusGallery_images/campus5.jpg";
import campus6 from "@assets/images/Campus_images/CampusGallery_images/campus6.jpg";
import campus7 from "@assets/images/Campus_images/CampusGallery_images/campus7.jpg";
import campus8 from "@assets/images/Campus_images/CampusGallery_images/campus8.jpg";
import campus9 from "@assets/images/Campus_images/CampusGallery_images/campus9.jpg";
import campus10 from "@assets/images/Campus_images/CampusGallery_images/campus10.jpg";
import campus11 from "@assets/images/Campus_images/CampusGallery_images/campus11.jpg";
import campus12 from "@assets/images/Campus_images/CampusGallery_images/campus12.jpg";

const studentLifeAndActivitesImageGallery = [
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

function StudentsLifeAndActivites() {
  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 bg-gray-100">
      <SectionTitle title={"শিক্ষার্থীদের লাইফ ও কার্যকলাপ "} />
      <GeneralParagraphText
        text={`স্কয়ার পলিটেকনিকের শিক্ষার্থীদের জীবন হলো **সৃষ্টিশীল ও গতিশীল**। ক্লাস, ল্যাবের পাশাপাশি তারা অংশ নেয় **ইন্ডাস্ট্রি ভিজিট** ও **প্রজেক্ট ভিত্তিক কাজে**, যা তাদের বাস্তব দক্ষতা ও অভিজ্ঞতা অর্জনে সাহায্য করে। এছাড়াও, শিক্ষার্থীদের মানসিক ও শারীরিক সুস্থতা নিশ্চিত করতে খেলাধুলা ও সাংস্কৃতিক কার্যক্রমে মেতে ওঠার কিছু **প্রাণবন্ত মুহূর্ত**।`}
      />
      <ImageGallery images={studentLifeAndActivitesImageGallery} />
      <div className="text-center mt-10">
        <ActionButton link={"/galleryEvent"} text={"আরও দেখুন..."} />
      </div>
    </section>
  );
}

export default StudentsLifeAndActivites;
