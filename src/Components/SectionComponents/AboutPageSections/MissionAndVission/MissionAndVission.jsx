import { GiTargetShot } from "react-icons/gi";
import { IoTelescopeSharp } from "react-icons/io5";
import SubTitle from "@components/Shared/Titles/SubTitle/SubTitle";
import GeneralIcons from "@components/Icons/GeneralIcons/GeneralIcons";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";

const instituteContent = {
  visionIcon: IoTelescopeSharp,
  visionTitle: "ভিশন — ভবিষ্যৎ পরিকল্পনা",
  visionText: `দক্ষতা ও উদ্ভাবনের শীর্ষে অবস্থান করে একটি বিশ্বমানের কারিগরি শিক্ষা প্রতিষ্ঠান হিসেবে নিজেদের প্রতিষ্ঠা করা।
আমরা এমন এক প্রজন্মের প্রযুক্তিনির্ভর, সৃজনশীল ও নৈতিকতা-সম্পন্ন পেশাদার তৈরি করতে চাই, যারা চতুর্থ শিল্প বিপ্লবের নেতৃত্ব দেবে এবং জাতীয় ও বৈশ্বিক শিল্পক্ষেত্রে ইতিবাচক পরিবর্তন আনবে।`,

  missionIcon: GiTargetShot,
  missionTitle: "মিশন  — প্রতিশ্রুতি",
  missionPoints: [
    {
      id: 1,
      title: "ব্যবহারিক শ্রেষ্ঠত্ব",
      description:
        "অত্যাধুনিক ল্যাব ও শিল্প-সংশ্লিষ্ট প্রশিক্ষণের মাধ্যমে শিক্ষার্থীদের হাতে-কলমে দক্ষ করে তোলা, যাতে তারা কর্মক্ষেত্রে প্রবেশ করেই উৎপাদনশীল হতে পারে।",
    },
    {
      id: 2,
      title: "উদ্ভাবন ও গবেষণা",
      description:
        "শিক্ষার্থীদের মধ্যে সমালোচনামূলক চিন্তা (Critical Thinking) ও নতুন কিছু উদ্ভাবনের মানসিকতা গড়ে তোলা; প্রযুক্তিগত চ্যালেঞ্জ মোকাবিলায় তাদেরকে সমাধানমুখী করে তোলা।",
    },
    {
      id: 3,
      title: "নৈতিকতা ও পেশাদারিত্ব",
      description:
        "সুনাগরিক হিসেবে গড়ে তোলার লক্ষ্যে দৃঢ় নৈতিকতা, শৃঙ্খলা এবং পেশাগত দায়িত্ববোধের উপর গুরুত্বারোপ।",
    },
    {
      id: 4,
      title: "শিল্পের সাথে সংযোগ",
      description:
        "নিয়মিত সেমিনার, ইন্টার্নশিপ ও অংশীদারিত্বের মাধ্যমে শিল্প-প্রতিষ্ঠানের সাথে নিরবচ্ছিন্ন সম্পর্ক বজায় রাখা, যাতে শিক্ষাক্রম বাজারের চাহিদার সাথে সর্বদা সামঞ্জস্যপূর্ণ থাকে।",
    },
  ],
};

const MissionAndVission = ({ className = "" }) => {
  return (
    <section
      className={`mt-[-30px] md:mt-0 mb-20 md:mb-24  w-full md:max-w-4xl mx-auto p-0 md:p-5
         bg-white md:rounded-lg md:shadow-md ${className}`}
    >
      <SectionTitle title={"আমাদের লক্ষ্য ও উদ্দেশ্য"} />
      <div className="mt-[-10px] md:mt-0">
        {/* Vision Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <GeneralIcons
              icon={instituteContent.visionIcon}
              className="text-3xl text-blue-600"
            />
            <SubTitle
              subTitle={instituteContent.visionTitle}
              className="text-[20px]"
            />
          </div>
          <p className="mb-4 whitespace-pre-line text-gray-800 leading-relaxed">
            {instituteContent.visionText}
          </p>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Mission Section */}
        <div className="flex items-center gap-2 mb-3">
          <GeneralIcons
            icon={instituteContent.missionIcon}
            className="text-3xl text-green-600"
          />
          <SubTitle
            subTitle={instituteContent.missionTitle}
            className="text-[20px]"
          />
        </div>

        <ul className="space-y-3">
          {instituteContent.missionPoints.map((point) => (
            <li
              key={point.id}
              className="border-l-4
             border-green-500 pl-4"
            >
              <div className="text-[16px] font-bold text-green-700">
                {point.title}
              </div>
              <div className="text-[16px] text-gray-800">
                {point.description}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MissionAndVission;
