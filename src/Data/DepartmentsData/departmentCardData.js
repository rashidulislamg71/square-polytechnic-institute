// ============================
//  Department Data File
// ============================

import civilImage from "../../assets/images/Departments_img/department-card-img/civil.png"
import textileImage from "../../assets/images/Departments_img/department-card-img/textile.png"
import mechnicalImage from "../../assets/images/Departments_img/department-card-img/mechnical.png"
import computerImage from "../../assets/images/Departments_img/department-card-img/computer.png"
import electicalImage from "../../assets/images/Departments_img/department-card-img/electical.png"

const departmentCardData = {
  id: "department",
  title: "আমাদের ডিপার্টমেন্ট সমুহ",
  departments: [
    {
      id: 1,
      name: "ইলেকট্রিক্যাল",
      shortName: "ET",
      image: electicalImage,
      description:
        "দেশের বিদ্যুৎ ব্যবস্থার ভবিষ্যৎ আপনার হাতে! পাওয়ার স্টেশন থেকে শুরু করে সোলার টেকনোলজি—সবখানে কাজের সুযোগ। নিশ্চিত করুন সরকারি-বেসরকারি ক্ষেত্রে আপনার উজ্জ্বল ভবিষ্যৎ।",
      url: "/electrical",
    },
    {
      id: 2,
      name: "কম্পিউটার",
      shortName: "CST",
      image: computerImage,
      description:
        "AI, প্রোগ্রামিং, ওয়েব ডেভেলপমেন্ট, সাইবার সিকিউরিটি ও সফটওয়্যার তৈরি ইত্যাদি প্রযুক্তি শিখে ফ্রিল্যান্সিং বা কর্পোরেট চাকরির সুযোগ। আপনার দক্ষতা আন্তর্জাতিক বাজারেও সমাদৃত!",
      url: "/computer",
    },
    {
      id: 3,
      name: "সিভিল ",
      shortName: "CT",
      image: civilImage,
      description:
        "আপনার হাতেই আধুনিক বিশের নির্মাণ। রাস্তা, ব্রিজ, এবং বহুতল আধুনিক ভবনের ডিজাইন শিখে দেশের প্রকৌশল খাতে নেতৃত্ব দেওয়ার জন্য প্রস্তুতি নিন।।",
      url: "/civil",
    },
    {
      id: 4,
      name: "টেক্সটাইল ",
      shortName: "TT",
      image: textileImage,
      description:
        "বিশ্বের ফ্যাশন শিল্পে বাংলাদেশের প্রতিনিধিত্ব! পোশাকের মান নিয়ন্ত্রণ (QC), ডিজাইন ও প্রোডাকশন শিখে গার্মেন্টস সেক্টরে দ্রুত ক্যারিয়ার গড়ুন।",
      url: "/textile",
    },
    {
      id: 5,
      name: "মেকানিক্যাল ",
      shortName: "MT",
      image: mechnicalImage,
      description:
        "ইন্ডাস্ট্রিয়াল আধুনিক মেশিন, প্রোডাকশন ও অটোমেশন প্রযুক্তিতে আধুনিক ও বাস্তবভিত্তিক শিক্ষার নিশ্চয়তা। অটোমেশন ও রোবটিক্স শিখে শিল্প জগতে নিজের অবস্থান তৈরি নিশ্চিত করন",
      url: "/mechanical",
    },
  ],
};

export default departmentCardData;
