import React from "react";
import textileBg from "@assets/images/Departments_img/department-banner/textile-banner.png";

const textileDepartmentData = {
  id: "textile",
  title: "টেক্সটাইল ইঞ্জিনিয়ারিং",

  heroSection: {
    title: "ফ্যাশন ও শিল্পে টেক্সটাইল ইঞ্জিনিয়ারিং-এর বিপ্লব",
    tagline:
      "দেশের রপ্তানি শিল্পের প্রাণকেন্দ্র — হতে একজন দক্ষ টেক্সটাইল ইঞ্জিনিয়ার!",
    background: textileBg,
    ctaButtons: [
      { text: "সরাসরি ভর্তি হোন", link: "/admission", btnBgColor: "bg-green-600" },
      { text: "ডাউনলোড সিলেবাস", link: "/syllabus/textile", btnBgColor: "bg-orange-500" },
    ],
  },

  aboutDepartment: {
    title: "টেক্সটাইল ইঞ্জিনিয়ারিং: শিল্প ও সৃজনশীলতার মেলবন্ধন",
    description: `এই বিভাগে শিক্ষার্থীরা সুতা, বয়ন, রং ও ফিনিশিং টেকনোলজির উপর ব্যবহারিক জ্ঞান অর্জন করে।
    গার্মেন্টস ও রপ্তানি শিল্পে দক্ষ পেশাজীবী তৈরিই এই বিভাগের মূল লক্ষ্য।`,
  },

  aboutDepartmentVideo: {
    url: "https://www.youtube.com/embed/Ysl5EDvGBXQ",
  },

  whyChooseThisDepartment: {
    title: "কেন বেছে নেবেন টেক্সটাইল ইঞ্জিনিয়ারিং?",
    points: [
      "দেশের বৃহত্তম রপ্তানি শিল্পে নিশ্চিত চাকরির সুযোগ।",
      "Fabric Manufacturing, Dyeing & Finishing বিষয়ে বাস্তব প্রশিক্ষণ।",
      "গার্মেন্টস কারখানায় Production ও Quality Control Officer হিসেবে কাজ।",
      "Textile Design ও Fashion Technology বিষয়ে দক্ষতা বৃদ্ধি।",
      "বিদেশে টেক্সটাইল সেক্টরে উচ্চ বেতনের সুযোগ।",
    ],
  },

  careerOpportunities: {
    title: "ক্যারিয়ার: ফ্যাশন ও শিল্পে সীমাহীন সম্ভাবনা",
    description:
      "টেক্সটাইল ইঞ্জিনিয়াররা বাংলাদেশসহ বিশ্বব্যাপী ফ্যাশন ও গার্মেন্টস শিল্পে গুরুত্বপূর্ণ ভূমিকা রাখে।",

    bangladesh: {
      title: "দেশে চাকরির সুযোগ",
      points: [
        "Readymade Garments (RMG) ফ্যাক্টরিতে Production Officer।",
        "Textile Mills ও Dyeing Units-এ Technician বা Supervisor।",
        "QA, Merchandising ও Buying House-এ কাজের সুযোগ।",
      ],
    },

    abroad: {
      title: "বিদেশে সুযোগ",
      points: [
        "চীন, ভিয়েতনাম, ও ইউরোপে টেক্সটাইল ইঞ্জিনিয়ার হিসেবে চাকরি।",
        "Fashion Design ও Fabric Technology-তে উচ্চ বেতনের সুযোগ।",
      ],
    },
  },

  industrialPartners: {
    title: "ইন্ডাস্ট্রিয়াল ট্রেনিং ও পার্টনার প্রতিষ্ঠান",
    description:
      "আমাদের শিক্ষার্থীরা দেশের শীর্ষস্থানীয় গার্মেন্টস ও টেক্সটাইল ইন্ডাস্ট্রিতে ইন্টার্নশিপের সুযোগ পায়।",
    companies: [
      "Square Textiles Ltd.",
      "DBL Group",
      "Ha-Meem Group",
      "Epyllion Group",
      "Pacific Jeans Ltd.",
    ],
  },

  higherStudy: {
    title: "উচ্চ শিক্ষা: ফ্যাশন ও টেক্সটাইল প্রযুক্তির উন্নত ধাপ",
    description:
      "ডিপ্লোমা শেষে B.Sc. in Textile Engineering এবং বিদেশে Master's করার সুযোগ রয়েছে।",
    bangladesh: {
      title: "দেশে উচ্চ শিক্ষা",
      points: [
        "BUTEX, DUET, ও প্রাইভেট বিশ্ববিদ্যালয়ে ভর্তি সুযোগ।",
      ],
    },
    abroad: {
      title: "বিদেশে স্কলারশিপ",
      points: [
        "চীন, তুরস্ক ও ইউরোপে Fashion & Textile Technology বিষয়ে মাস্টার্স।",
      ],
    },
  },

  entrepreneurship: {
    title: "নিজস্ব উদ্যোগ: ফ্যাশন জগতে উদ্যোক্তা হওয়া",
    description:
      "টেক্সটাইল ইঞ্জিনিয়াররা নিজের পোশাক ব্র্যান্ড, বুটিক হাউস বা রপ্তানি ব্যবসা শুরু করতে পারে।",
    ideas: [
      "Fashion Boutique Business",
      "Garments Manufacturing",
      "Textile Consultancy Firm",
    ],
  },

  whySquarePolytechnic: {
    title: "কেন স্কয়ার পলিটেকনিকে টেক্সটাইল ইঞ্জিনিয়ারিং?",
    points: [
      "Textile Lab, Dyeing Machine ও Loom প্রশিক্ষণ সুবিধা।",
      "অভিজ্ঞ শিক্ষক দ্বারা পরিচালিত বাস্তবভিত্তিক ক্লাস।",
      "স্কলারশিপ ও হোস্টেল সুবিধা।",
      "শিল্প ভিজিট ও ইন্টার্নশিপ সুযোগ।",
    ],
  },

  faq: {
    title: "সাধারণ জিজ্ঞাসা (FAQ)",
    questions: [
      { q: "কোর্সের মেয়াদ কত?", a: "৪ বছর (৮ সেমিস্টার)।" },
      { q: "চাকরির সুযোগ কেমন?", a: "টেক্সটাইল ও গার্মেন্টস ইন্ডাস্ট্রিতে প্রচুর চাহিদা রয়েছে।" },
      {
        q: "যোগাযোগের ঠিকানা?",
        a: "Square Polytechnic Institute, Garidaha, Sherpur, Bogura। ফোন: 017xxxxxxxx",
      },
    ],
  },
};

export default textileDepartmentData;
