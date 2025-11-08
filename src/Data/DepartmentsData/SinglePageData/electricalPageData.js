// electricalDepartmentData_refined.js

import React from "react";
import electricalBg from "@assets/images/Departments_img/department-banner/electrical-banner.png";

const electricalDepartmentData = {
  id: "electrical",
  title: "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং",

  // Hero Section
  heroSection: {
    title: "বিদ্যুৎ প্রযুক্তির দক্ষ হাতে আলোকিত ভবিষ্যৎ",
    tagline:
      "দেশের শিল্প ও প্রযুক্তি উন্নয়নে ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং হচ্ছে সাফল্যের চালিকাশক্তি!",
    background: electricalBg,
    ctaButtons: [
      { text: "সরাসরি ভর্তি হোন", link: "/admission", btnBgColor: "bg-green-600" },
      { text: "ডাউনলোড সিলেবাস", link: "/syllabus/electrical", btnBgColor: "bg-orange-500" },
    ],
  },

  //  About Department
  aboutDepartment: {
    title: "ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং: শক্তি ও প্রযুক্তির সমন্বয়",
    description: `ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং বিভাগটি বিদ্যুৎ উৎপাদন, সঞ্চালন, বিতরণ এবং ইলেকট্রনিক ডিভাইসের ডিজাইন ও কন্ট্রোল নিয়ে কাজ করে।
      এখানে শিক্ষার্থীদের বাস্তবভিত্তিক ট্রেনিং ও হাতে-কলমে ল্যাব অভিজ্ঞতার মাধ্যমে দক্ষ টেকনিশিয়ান ও প্রকৌশলী হিসেবে গড়ে তোলা হয়।`,
  },

  aboutDepartmentVideo: {
    url: "https://www.youtube.com/embed/9mDqVZpDytU",
  },

  // Why Choose This Department
  whyChooseThisDepartment: {
    title: "কেন বেছে নেবেন ইলেকট্রিক্যাল ইঞ্জিনিয়ারিং?",
    points: [
      "Power System, Control System ও Electrical Machines-এর উপর আধুনিক প্রশিক্ষণ।",
      "Solar, Renewable Energy ও Smart Grid প্রযুক্তির বাস্তব ধারণা।",
      "সরকারি বিদ্যুৎ দপ্তর ও বেসরকারি ইলেকট্রনিক ইন্ডাস্ট্রিতে নিশ্চিত চাকরির সুযোগ।",
      "AutoCAD Electrical, PLC & Industrial Automation-এর উপর ট্রেনিং।",
      "নিজস্ব ইলেকট্রনিক সার্ভিস সেন্টার বা বিদ্যুৎ সংক্রান্ত ব্যবসা পরিচালনার সুযোগ।",
    ],
  },

  // Career Opportunities
  careerOpportunities: {
    title: "ক্যারিয়ার: শক্তিশালী ভবিষ্যতের পেশা",
    description:
      "ইলেকট্রিক্যাল ইঞ্জিনিয়াররা শিল্প, শক্তি উৎপাদন, টেলিকম, ও সরকারি খাতে অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে।",

    bangladesh: {
      title: "বাংলাদেশে কর্মক্ষেত্র",
      points: [
        "BPDB, DESCO, PDB, REB, ও LGED-এ উপ-সহকারী প্রকৌশলী হিসেবে চাকরি।",
        "Walton, Singer, ও Energypac-এর মতো প্রতিষ্ঠানে Electrical Supervisor।",
        "Solar & Renewable Energy প্রজেক্টে ফিল্ড ইঞ্জিনিয়ার হিসেবে কাজ।",
      ],
    },

    abroad: {
      title: "বিদেশে উচ্চ বেতনের সুযোগ",
      points: [
        "মধ্যপ্রাচ্য, কানাডা ও ইউরোপে পাওয়ার প্ল্যান্ট ও ইলেকট্রিক্যাল সিস্টেম ডিজাইন ইঞ্জিনিয়ার।",
        "PLC Automation ও Maintenance Engineer হিসেবে কাজের সুযোগ।",
      ],
    },
  },

  //Industrial Partners
  industrialPartners: {
    title: "ইন্ডাস্ট্রিয়াল ট্রেনিং ও পার্টনারশিপ",
    description:
      "শিক্ষার্থীরা পাওয়ার স্টেশন, ইলেকট্রনিক কোম্পানি ও ইন্ডাস্ট্রিয়াল প্রজেক্টে বাস্তব অভিজ্ঞতা অর্জন করে।",
    companies: [
      "BPDB - Bangladesh Power Development Board",
      "DESCO - Dhaka Electric Supply Company",
      "Walton Hi-Tech Industries Ltd.",
      "Energypac Engineering Ltd.",
      "Bangladesh Rural Electrification Board (REB)",
    ],
  },

  // Higher Study
  higherStudy: {
    title: "উচ্চ শিক্ষা: প্রযুক্তির গভীরতায়",
    description:
      "ডিপ্লোমা শেষে B.Sc. in Electrical & Electronic Engineering (EEE) এবং বিদেশে মাস্টার্স করে আরও বিশেষজ্ঞ হওয়া যায়।",
    bangladesh: {
      title: "দেশে উচ্চ শিক্ষা",
      points: [
        "ডুয়েট (DUET), বুয়েট (BUET), AIUB ইত্যাদি বিশ্ববিদ্যালয়ে B.Sc. EEE ভর্তি।",
        "ল্যাটারাল এন্ট্রি মাধ্যমে সরাসরি দ্বিতীয় বর্ষে ভর্তির সুযোগ।",
      ],
    },
    abroad: {
      title: "বিদেশে উচ্চ শিক্ষা ও স্কলারশিপ",
      points: [
        "জার্মানি, জাপান ও কানাডায় Power Electronics, Renewable Energy বিষয়ে উচ্চতর শিক্ষা।",
        "Erasmus, DAAD, বা Commonwealth স্কলারশিপ পাওয়ার সুযোগ।",
      ],
    },
  },

  //  Entrepreneurship
  entrepreneurship: {
    title: "নিজস্ব উদ্যোগে উদ্যোক্তা হওয়ার সুযোগ",
    description:
      "ইলেকট্রিক্যাল জ্ঞান দিয়ে নিজস্ব সার্ভিস সেন্টার, ইনভার্টার-সোলার সিস্টেম ব্যবসা বা কনসালটেন্সি ফার্ম শুরু করা যায়।",
    ideas: [
      "Solar & Inverter Business",
      "Electrical Consultancy Service",
      "Home Automation Installation",
    ],
  },

  //  Why Study at Square Polytechnic
  whySquarePolytechnic: {
    title: "কেন স্কয়ার পলিটেকনিকে ইলেকট্রিক্যাল পড়বেন?",
    points: [
      "অভিজ্ঞ শিক্ষক দ্বারা পরিচালিত ল্যাবভিত্তিক প্রশিক্ষণ।",
      "PLC, Motor Control ও Solar Lab সুবিধা।",
      "নিয়মিত ওয়ার্কশপ ও ইন্ডাস্ট্রিয়াল ভিজিট।",
      "স্কলারশিপ ও ক্যারিয়ার কাউন্সেলিং সুবিধা।",
      "সরকারি-বেসরকারি চাকরিতে সাফল্যের ধারাবাহিক রেকর্ড।",
    ],
  },

  //  FAQ
  faq: {
    title: "সাধারণ জিজ্ঞাসা (FAQ) ও যোগাযোগ",
    questions: [
      {
        q: "ইলেকট্রিক্যাল ডিপ্লোমা কোর্সের মেয়াদ কত?",
        a: "৪ বছর (৮ সেমিস্টার)।",
      },
      {
        q: "কোর্স শেষে চাকরি পাওয়া যায় কি?",
        a: "হ্যাঁ, সরকারি ও বেসরকারি উভয় খাতেই প্রচুর সুযোগ রয়েছে।",
      },
      {
        q: "যোগাযোগের ঠিকানা কী?",
        a: "Square Polytechnic Institute, Garidaha, Sherpur, Bogura। ফোন: 017xxxxxxxx",
      },
    ],
  },
};

export default electricalDepartmentData;
