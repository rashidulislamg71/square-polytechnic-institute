import {
  FaBookOpen,
  FaClock,
  FaChalkboardTeacher,
  FaFileAlt,
  FaPenFancy,
  FaDownload,
} from "react-icons/fa";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";

const AboutSyllabus = () => {
  const syllabusInfo = [
    {
      id: 1,
      icon: <FaBookOpen  />,
      title: "কোর্সের নাম",
      desc: "ডিপ্লোমা ইন ইঞ্জিনিয়ারিং",
    },
    {
      id: 2,
      icon: <FaClock />,
      title: "কোর্সের সময়কাল",
      desc: "৪ বছর (৮ সেমিস্টার) | প্রতি ৬ মাসে ১ সেমিস্টার",
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher />,
      title: "শেখার পদ্ধতি",
      desc: "তাত্ত্বিক পাঠ, ল্যাব, প্র্যাকটিক্যাল ও প্রজেক্ট ভিত্তিক শিক্ষা",
    },
    {
      id: 4,
      icon: <FaFileAlt />,
      title: "প্রবিধান/কারিকুলাম",
      desc: "সর্বশেষ প্রকাশিত (২০২২ সেশন)",
    },
    {
      id: 5,
      icon: <FaPenFancy />,
      title: "পরীক্ষা ব্যবস্থা",
      desc: "সেমিস্টারভিত্তিক লিখিত, মৌখিক ও ব্যবহারিক পরীক্ষা",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-8 bg-green-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <SectionTitle title={"ডিপ্লোমা কোর্স সিলেবাস"} />
        </div>
        <div className="max-w-3xl m-auto">
          {/* List Style Info */}
          <ul className=" border border-amber-500 rounded p-3">
            {syllabusInfo.map((item) => (
              <li key={item.id} className="flex items-center gap-2">
                <span className="mt-1 border-1 border-gray-400 text-green-600  p-1 rounded">{item.icon}</span>
                <div className="flex-1">
                  <span className="font-semibold text-gray-800">
                    {item.title}
                  </span>
                  <span className="text-gray-600"> : {item.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Download Button */}
        <div className="text-center mt-8">
          <a
            href="/RUHAN 2.pdf"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            <FaDownload className="text-xl" />
            সম্পূর্ণ সিলেবাস PDF ডাউনলোড করুন
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSyllabus;
