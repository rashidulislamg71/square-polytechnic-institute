import React from "react";

import computerDetailsPageImg from "../../../assets/images/Departments_img/department-banner/computer-banner.png";

const computerDepartmentData = {
  id: "computer",
  title: "কম্পিউটার ইঞ্জিনিয়ারিং",

  // Hero Section
  heroSection: {
    title: "ডিজিটাল ভবিষ্যৎ নির্মাণে এক মাত্র হাতিয়ার!",
    tagline:
      "প্রোগ্রামিং, কৃত্রিম বুদ্ধিমত্তা ও সফটওয়্যার ডেভেলপমেন্ট— ভবিষ্যতের দক্ষ আইটি পেশাজীবী হতে আজই শুরু হোক কম্পিউটার ইঞ্জিনিয়ারিং শেখা!",
    background: computerDetailsPageImg,
    ctaButtons: [
      {
        text: "সরাসরি ভর্তি হোন",
        link: "/admission",
        btnBgColor: "bg-green-600",
      },
      {
        text: "ডাউনলোড সিলেবাস",
        link: "/syllabus/computer",
        btnBgColor: "bg-orange-500",
      },
    ],
  },

  // 2️⃣ About Department
  aboutDepartment: {
    title: "কম্পিউটার ইঞ্জিনিয়ারিং: ডিজিটাল বিশ্বের মূল ভিত্তি",
    description: `এই বিভাগে শিক্ষার্থীরা প্রোগ্রামিং, নেটওয়ার্কিং, ওয়েব ডেভেলপমেন্ট, ডাটাবেজ ম্যানেজমেন্ট এবং হার্ডওয়্যার সিস্টেম সম্পর্কে হাতে-কলমে শিক্ষা পায়।
    আইটি ইন্ডাস্ট্রির চাহিদা অনুযায়ী আমাদের কোর্স সাজানো হয়েছে, যাতে শিক্ষার্থীরা দক্ষ সফটওয়্যার ও নেটওয়ার্ক প্রফেশনাল হিসেবে গড়ে উঠতে পারে।`,
  },

  aboutDepartmentVideo: {
    url: "https://www.youtube.com/embed/EWv0ekn9hcw",
  },

  // Why Choose
  whyChooseThisDepartment: {
    title: "কেন বেছে নেবেন কম্পিউটার ইঞ্জিনিয়ারিং?",
    points: [
      "প্রোগ্রামিং, ওয়েব ডিজাইন ও সফটওয়্যার ডেভেলপমেন্টে দক্ষতা অর্জন।",
      "AI, Machine Learning ও Cyber Security বিষয়ে আধুনিক প্রশিক্ষণ।",
      "দেশ-বিদেশে আইটি কোম্পানিতে উচ্চ বেতনের চাকরির সুযোগ।",
      "ফ্রিল্যান্সিং ও উদ্যোক্তা হিসেবে কাজ করার স্বাধীনতা।",
      "ইন্ডাস্ট্রিয়াল প্রজেক্ট ও ইন্টার্নশিপ সুবিধা।",
    ],
  },

  // Career Opportunities
  careerOpportunities: {
    title: "ক্যারিয়ার: প্রযুক্তির দুনিয়ায় অফুরন্ত সম্ভাবনা",
    description:
      "ডিপ্লোমা ইন কম্পিউটার ইঞ্জিনিয়ারিং সম্পন্ন করার পর শিক্ষার্থীরা স্থানীয় ও আন্তর্জাতিক আইটি সেক্টরে কাজের সুযোগ পায়।",

    bangladesh: {
      title: "বাংলাদেশে চাকরির ক্ষেত্র",
      points: [
        "আইটি কোম্পানি, সফটওয়্যার ফার্ম ও ব্যাংকিং সেক্টরে প্রোগ্রামার বা টেকনিশিয়ান।",
        "ফ্রিল্যান্সিং প্ল্যাটফর্মে (Upwork, Fiverr, Freelancer) ওয়েব ডেভেলপার বা ডিজাইনার।",
        "সরকারি অফিসে Data Entry Operator ও Network Technician।",
      ],
    },

    abroad: {
      title: "বিদেশে সুযোগ",
      points: [
        "সিঙ্গাপুর, জাপান, কানাডা ও ইউরোপে সফটওয়্যার সেক্টরে চাকরি।",
        "গ্লোবাল আইটি সার্ভিস কোম্পানিতে নেটওয়ার্ক ও সিস্টেম ইঞ্জিনিয়ার হিসেবে কাজ।",
      ],
    },
  },

  // Industrial Partners
  industrialPartners: {
    title: "ইন্ডাস্ট্রিয়াল পার্টনারশিপ ও ইন্টার্নশিপ",
    description:
      "আমাদের শিক্ষার্থীরা স্থানীয় সফটওয়্যার কোম্পানি ও আইটি প্রশিক্ষণ প্রতিষ্ঠানে হাতে-কলমে কাজ করার সুযোগ পায়।",
    companies: [
      "Square IT Solutions",
      "Technohaven Company Ltd.",
      "Basis Member Software Firms",
      "Local IT Support Centers",
    ],
  },
  // Higher Study
  higherStudy: {
    title: "উচ্চ শিক্ষা: ডিজিটাল ইনোভেশনের পরবর্তী ধাপ",
    description:
      "ডিপ্লোমা শেষে B.Sc. in CSE (Computer Science & Engineering) অথবা IT-তে উচ্চ শিক্ষা নেওয়া যায়।",
    bangladesh: {
      title: "দেশে উচ্চ শিক্ষা",
      points: [
        "DUET, AIUB, UIU, DIU, Stamford University-এ ভর্তি।",
        "ল্যাটারাল এন্ট্রি সুবিধা – সরাসরি ২য় বর্ষে ভর্তি।",
      ],
    },
    abroad: {
      title: "বিদেশে উচ্চ শিক্ষা",
      points: [
        "কানাডা, জার্মানি, অস্ট্রেলিয়া, জাপানে স্কলারশিপসহ উচ্চ শিক্ষা।",
        "AI, Data Science ও Software Engineering এ Master's করার সুযোগ।",
      ],
    },
  },

  //  Entrepreneurship
  entrepreneurship: {
    title: "নিজস্ব উদ্যোগ: প্রযুক্তিভিত্তিক উদ্যোক্তা হওয়া",
    description:
      "কম্পিউটার ইঞ্জিনিয়াররা সহজেই নিজস্ব আইটি ব্যবসা, ওয়েব ডেভেলপমেন্ট কোম্পানি বা ইউটিউব/টেক স্টার্টআপ শুরু করতে পারে।",
    ideas: [
      "Software Development Firm",
      "Freelance Business",
      "Tech Consultancy & Training Center",
    ],
  },

  //  Why Square Polytechnic
  whySquarePolytechnic: {
    title: "কেন স্কয়ার পলিটেকনিকে কম্পিউটার ইঞ্জিনিয়ারিং?",
    points: [
      "অভিজ্ঞ শিক্ষক ও আধুনিক ল্যাব সুবিধা।",
      "ওয়েব ডেভেলপমেন্ট, গ্রাফিক ডিজাইন ও প্রোগ্রামিং কোর্স।",
      "ইন্টার্নশিপ ও ক্যারিয়ার কাউন্সেলিং সুবিধা।",
      "স্কলারশিপ ও হোস্টেল সুবিধা।",
      "ফ্রিল্যান্সিং গাইডলাইন ও রিমোট জব ট্রেনিং।",
    ],
  },

  //  FAQ
  faq: {
    title: "সাধারণ জিজ্ঞাসা (FAQ)",
    questions: [
      {
        q: "কোর্সের মেয়াদ কত?",
        a: "৪ বছর (৮ সেমিস্টার)।",
      },
      {
        q: "কোর্স শেষে চাকরির সুযোগ কেমন?",
        a: "আইটি সেক্টরে প্রচুর চাহিদা রয়েছে, দেশ-বিদেশে সহজেই কাজ পাওয়া যায়।",
      },
      {
        q: "যোগাযোগের ঠিকানা?",
        a: "Square Polytechnic Institute, Garidaha, Sherpur, Bogura। ফোন: 017xxxxxxxx",
      },
    ],
  },
};

export default computerDepartmentData;
