const studntTestimonialsData = [
  {
    id: 1,
    name: "Rashedul Islam",
    session: "2019-20",
    department: "Computer",
    comment:
      "কম্পিউটার ল্যাবে কাজ করতে গিয়ে আমি অনেক কিছু শিখেছি যা বইতে ছিল না। শিক্ষকরা সবসময় পাশে ছিলেন।",
    image: "student1.jpeg",
    studentType: "old",
  },
  {
    id: 2,
    name: "Sumiya Khan",
    session: "2020-21",
    department: "Electrical",
    comment:
      "ক্লাসে সবসময় প্র্যাকটিক্যাল উদাহরণ দেখানো হয়, তাই তত্ত্ব সহজে মনে থাকে।",
    image: "student2.jpeg",
    studentType: "old",
  },
  {
    id: 3,
    name: "Farhan Ahmed",
    session: "2019-20",
    department: "Civil",
    comment:
      "ল্যাবের সরঞ্জাম ব্যবহার করে প্রকল্প তৈরি করতে পারা সত্যিই শিক্ষণীয় অভিজ্ঞতা ছিল।",
    image: "student3.jpeg",
    studentType: "old",
  },
  {
    id: 4,
    name: "Micheal Rakib",
    session: "2021-22",
    department: "Textile",
    comment:
      "শুধু পড়াশোনা নয়, সাংস্কৃতিক ও খেলার সুযোগও থাকায় কলেজে আসা সবসময় আনন্দের।",
    image: "student1.jpeg",
    studentType: "present",
  },
  {
    id: 5,
    name: "Nur Touhid",
    session: "2019-20",
    department: "Mechanical",
    comment:
      "হ্যান্ডস-অন ক্লাসে কাজ করলে বিষয়গুলো অনেক ভালোভাবে মনে থাকে। প্রকৃত অভিজ্ঞতা পেলাম।",
    image: "student2.jpeg",
    studentType: "old",
  },
  {
    id: 6,
    name: "Rita Akter",
    session: "2020-21",
    department: "Computer",
    comment:
      "শিক্ষকরা সবসময় আমার সমস্যা শুনে সমাধান দেন। ক্লাসে আসা সবসময় আনন্দদায়ক।",
    image: "student3.jpeg",
    studentType: "old",
  },
  {
    id: 7,
    name: "Safiul Islam",
    session: "2021-22",
    department: "Electrical",
    comment:
      "হোস্টেল সুবিধা এবং নিরাপত্তা খুব ভালো। তাই আমি শান্তি এবং মনোযোগ দিয়ে পড়তে পারি।",
    image: "student1.jpeg",
    studentType: "present",
  },
  {
    id: 8,
    name: "Tasnima Hossain",
    session: "2019-20",
    department: "Civil",
    comment:
      "অতিরিক্ত কার্যক্রমে অংশ নিয়ে অনেক নতুন বন্ধু হয়েছে। শেখার পরিবেশও অসাধারণ।",
    image: "student2.jpeg",
    studentType: "old",
  },
  {
    id: 9,
    name: "Akash Chowdhury",
    session: "2020-21",
    department: "Textile",
    comment:
      "ল্যাব এবং প্রযুক্তিগত সরঞ্জামের ব্যবহার শিখে প্রকল্প তৈরি করা সহজ হয়েছে।",
    image: "student3.jpeg",
    studentType: "old",
  },
  {
    id: 10,
    name: "Sohana Afrin",
    session: "2021-22",
    department: "Mechanical",
    comment:
      "শিক্ষক এবং শিক্ষার্থীদের সমন্বয় এত ভালো যে কাজ করতে খুব আনন্দ লাগে।",
    image: "student1.jpeg",
    studentType: "present",
  },
  {
    id: 11,
    name: "Rana Biswas",
    session: "2024-25",
    department: "Computer",
    comment:
      "ল্যাবের কাজ করার অভিজ্ঞতা আমাকে সত্যিই আত্মবিশ্বাসী করেছে। শিক্ষকরা সবসময় সাহায্য করেন।",
    image: "student1.jpeg",
    studentType: "present",
  },
  {
    id: 12,
    name: "Nusrat Jahan",
    session: "2024-25",
    department: "Electrical",
    comment:
      "ক্লাসে শেখানো উদাহরণগুলো খুবই বাস্তবিক। হ্যান্ডস-অন প্রশিক্ষণ সত্যিই সাহায্য করেছে।",
    image: "student2.jpeg",
    studentType: "present",
  },
  {
    id: 13,
    name: "Shahriar Hossain",
    session: "2025-26",
    department: "Civil",
    comment:
      "প্রকল্প করার সময় শিক্ষকের সাহায্য সত্যিই উপকারী। শিক্ষার্থীদের জন্য ক্লাসের পরিবেশ খুব প্রফেশনাল।",
    image: "student3.jpeg",
    studentType: "present",
  },
  {
    id: 14,
    name: "Tanisha Akter",
    session: "2025-26",
    department: "Mechanical",
    comment:
      "প্র্যাকটিক্যাল এবং থিওরির সমন্বয় অনেক ভালো। ক্লাসে সব বিষয় সহজে বোঝা যায়।",
    image: "student1.jpeg",
    studentType: "present",
  },
  {
    id: 15,
    name: "Rifat Ahmed",
    session: "2022-23",
    department: "Textile",
    comment:
      "শিক্ষক এবং সহপাঠীদের সহযোগিতা অসাধারণ। প্রকল্প করতে অনেক সহজ হয়েছে।",
    image: "student2.jpeg",
    studentType: "old",
  },
  {
    id: 16,
    name: "Sadia Hossain",
    session: "2023-24",
    department: "Mechanical",
    comment:
      "প্র্যাকটিক্যাল ক্লাসগুলোতে কাজ করে আমার দক্ষতা অনেক বেড়েছে। থিওরি ও প্র্যাকটিক্যালের সমন্বয় অসাধারণ।",
    image: "student1.jpeg",
    studentType: "present",
  },
  {
    id: 17,
    name: "Tanvir Rahman",
    session: "2021-22",
    department: "Electrical",
    comment:
      "ল্যাব এবং ক্লাসের সমন্বয় আমার শেখার প্রক্রিয়াকে আরও কার্যকর করেছে।",
    image: "student2.jpeg",
    studentType: "present",
  },
  {
    id: 18,
    name: "Mousumi Roy",
    session: "2020-21",
    department: "Electrical",
    comment:
      "শিক্ষকরা ধৈর্যশীল। হ্যান্ডস-অন প্রশিক্ষণ খুব কার্যকর। বিষয়গুলো দ্রুত মনে থাকে।",
    image: "student3.jpeg",
    studentType: "old",
  },
  {
    id: 19,
    name: "Jahidul Islam",
    session: "2019-20",
    department: "Civil",
    comment:
      "ল্যাবের সরঞ্জাম ব্যবহার করে প্রকল্প তৈরি করা অভিজ্ঞতার দিক থেকে অসাধারণ। শিক্ষকরা সবসময় পাশে থাকেন।",
    image: "student1.jpeg",
    studentType: "old",
  },
  {
    id: 20,
    name: "Nadia Akter",
    session: "2023-24",
    department: "Textile",
    comment:
      "সাংস্কৃতিক কার্যক্রমে অংশ নিয়ে শিক্ষার্থীরা আনন্দ পায় এবং বন্ধুত্ব গড়ে ওঠে।",
    image: "student2.jpeg",
    studentType: "present",
  },
];

export default studntTestimonialsData;
