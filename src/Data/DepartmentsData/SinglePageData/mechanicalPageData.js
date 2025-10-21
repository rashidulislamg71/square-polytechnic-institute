import React from "react";
import mechanicalBg from "@assets/images/Departments_img/mechnical.jpg";

const mechanicalDepartmentData = {
  id: "mechanical",
  title: "মেকানিক্যাল ইঞ্জিনিয়ারিং",

  heroSection: {
    title: "যন্ত্র প্রকৌশলের মাধ্যমে আধুনিক শিল্পের ভিত্তি গড়ুন",
    tagline:
      "যন্ত্র, ডিজাইন ও উৎপাদন— শিল্পোন্নত বাংলাদেশের মেরুদণ্ডে যুক্ত হোন আজই!",
    background: mechanicalBg,
    ctaButtons: [
      { text: "সরাসরি ভর্তি হোন", link: "/admission", btnBgColor: "bg-green-600" },
      { text: "ডাউনলোড সিলেবাস", link: "/syllabus/mechanical", btnBgColor: "bg-orange-500" },
    ],
  },

  aboutDepartment: {
    title: "মেকানিক্যাল ইঞ্জিনিয়ারিং: প্রকৌশল উদ্ভাবনের হৃদয়",
    description: `এই বিভাগে শিক্ষার্থীরা মেশিন ডিজাইন, উৎপাদন প্রযুক্তি, থার্মাল সিস্টেম ও CAD সফটওয়্যার সম্পর্কে বাস্তব প্রশিক্ষণ লাভ করে।
    শিল্প কারখানা, পাওয়ার প্ল্যান্ট ও অটোমেশন ইন্ডাস্ট্রিতে কাজের জন্য এটি অন্যতম জনপ্রিয় বিভাগ।`,
  },

  aboutDepartmentVideo: {
    url: "https://www.youtube.com/embed/bjV3Z8G5odE",
  },

  whyChooseThisDepartment: {
    title: "কেন বেছে নেবেন মেকানিক্যাল ইঞ্জিনিয়ারিং?",
    points: [
      "AutoCAD, SolidWorks ও CNC মেশিনের উপর প্রশিক্ষণ।",
      "পাওয়ার প্ল্যান্ট ও ইন্ডাস্ট্রিয়াল মেশিন মেইনটেন্যান্সে বাস্তব অভিজ্ঞতা।",
      "সরকারি ও বেসরকারি ইন্ডাস্ট্রিতে বিশাল চাকরির বাজার।",
      "আন্তর্জাতিক লেভেলে টেকনিশিয়ান হিসেবে কাজের সুযোগ।",
      "নিজস্ব গ্যারেজ, মেকানিক্যাল ওয়ার্কশপ বা ফার্ম শুরু করার সুযোগ।",
    ],
  },

  careerOpportunities: {
    title: "ক্যারিয়ার: শিল্প প্রকৌশলের সম্ভাবনা",
    description:
      "মেকানিক্যাল ইঞ্জিনিয়াররা প্রায় সব ধরনের শিল্প কারখানায় অপরিহার্য ভূমিকা পালন করে।",

    bangladesh: {
      title: "বাংলাদেশে কর্মক্ষেত্র",
      points: [
        "বিদ্যুৎ কেন্দ্র, গ্যাস কোম্পানি ও কারখানায় Supervisor/Technician।",
        "বেসরকারি সেক্টরে Factory Maintenance Engineer।",
        "শিপইয়ার্ড, টেক্সটাইল, ও অটোমোবাইল ইন্ডাস্ট্রিতে Production Engineer।",
      ],
    },

    abroad: {
      title: "বিদেশে চাকরির সুযোগ",
      points: [
        "মধ্যপ্রাচ্য, ইউরোপ ও কানাডায় Mechanical Supervisor হিসেবে কাজ।",
        "Industrial Plant & Maintenance সেক্টরে উচ্চ বেতন।",
      ],
    },
  },

  industrialPartners: {
    title: "ইন্ডাস্ট্রিয়াল ট্রেনিং ও পার্টনার",
    description:
      "শিক্ষার্থীরা স্থানীয় শিল্প প্রতিষ্ঠান ও কারখানায় ইন্টার্নশিপের মাধ্যমে বাস্তব অভিজ্ঞতা অর্জন করে।",
    companies: [
      "Bashundhara Industrial Complex",
      "Walton Factory",
      "Titas Gas Transmission Company",
      "Bangladesh Machine Tools Factory",
    ],
  },

  higherStudy: {
    title: "উচ্চ শিক্ষা ও বিশেষায়ন",
    description:
      "ডিপ্লোমা শেষে B.Sc. in Mechanical Engineering ও বিদেশে Master's করার সুযোগ রয়েছে।",
    bangladesh: {
      title: "দেশে উচ্চ শিক্ষা",
      points: [
        "DUET, BUET, RUET-এ ভর্তি সুযোগ।",
        "ল্যাটারাল এন্ট্রি সুবিধা।",
      ],
    },
    abroad: {
      title: "বিদেশে স্কলারশিপ সুযোগ",
      points: [
        "কানাডা, জার্মানি ও অস্ট্রেলিয়ায় Industrial Engineering-এ উচ্চ শিক্ষা।",
      ],
    },
  },

  entrepreneurship: {
    title: "নিজস্ব উদ্যোগ: উদ্ভাবনের মাধ্যমে সাফল্য",
    description:
      "মেকানিক্যাল ইঞ্জিনিয়াররা নিজের গ্যারেজ, কারখানা বা সার্ভিস সেন্টার খুলে উদ্যোক্তা হতে পারেন।",
    ideas: [
      "Auto Workshop",
      "Mechanical Parts Manufacturing",
      "AC/Fridge Maintenance Business",
    ],
  },

  whySquarePolytechnic: {
    title: "কেন স্কয়ার পলিটেকনিকে মেকানিক্যাল পড়বেন?",
    points: [
      "Modern Workshop Lab ও CNC Training।",
      "অভিজ্ঞ প্রশিক্ষক ও প্র্যাকটিক্যাল ক্লাস।",
      "স্কলারশিপ ও হোস্টেল সুবিধা।",
      "ইন্ডাস্ট্রিয়াল ভিজিট ও ট্রেনিং প্রোগ্রাম।",
    ],
  },

  faq: {
    title: "সাধারণ জিজ্ঞাসা (FAQ)",
    questions: [
      { q: "কোর্সের মেয়াদ কত?", a: "৪ বছর (৮ সেমিস্টার)।" },
      { q: "ইন্টার্নশিপ কি বাধ্যতামূলক?", a: "হ্যাঁ, শেষ সেমিস্টারে ইন্ডাস্ট্রিয়াল ট্রেনিং আবশ্যক।" },
      {
        q: "যোগাযোগের ঠিকানা?",
        a: "Square Polytechnic Institute, Garidaha, Sherpur, Bogura। ফোন: 017xxxxxxxx",
      },
    ],
  },
};

export default mechanicalDepartmentData;
