import Video from "../../../Video/Video";
import SectionTitle from "../../../Shared/Titles/SectionTitle/SectionTitle";
import PeragraphText from "./../../../Shared/PeragraphText/PeragraphText";

const aboutCampus = [
  " আমাদের ক্যাম্পাসটি বগুড়া জেলা, শেরপুর উপজেলাধীন গাড়ীদহ বাসস্ট্যান্ডে, পল্লী উন্নয়ন একাডেমী (RDA)-এর ঠিক দক্ষিণ পাশে অবস্থিত। এই মনোরম অবস্থানটি শহর ও গ্রামাঞ্চলের চমৎকার সংযোগস্থল, যা শিক্ষার্থীদের জন্য যাতায়াতকে অত্যন্ত সহজ করে তোলে।",
  "ক্যাম্পাসটি একটি সুপরিকল্পিত ও আধুনিক স্থাপত্যের সমন্বয়ে গঠিত, যেখানে পর্যাপ্ত খোলা জায়গা এবং সবুজ প্রাঙ্গণ রয়েছে। বিশাল আয়তনের এই ক্যাম্পাসটি একদিকে যেমন শিক্ষামূলক কার্যক্রমের জন্য প্রশস্ত জায়গা নিশ্চিত করে, অন্যদিকে তেমনই শিক্ষার্থীদের জন্য একটি শান্ত ও অনুকূল পরিবেশ প্রদান করে।",
  "আশেপাশের সবুজ প্রকৃতি এবং কোলাহলমুক্ত পরিবেশ অধ্যয়নের জন্য বিশেষভাবে সহায়ক। ক্যাম্পাসের ভেতরে সুসজ্জিত খেলার মাঠ,এবং পরিচ্ছন্ন অবকাঠামো নিশ্চিত করে যে, শিক্ষার্থীরা শুধু দক্ষতাই অর্জন করবে না, বরং একটি স্বাস্থ্যকর ও প্রাণবন্ত ক্যাম্পাস জীবন উপভোগ করবে।",
];

const CampusTourSection = () => {
  return (
    <section
      className="px-4 md:px-10 lg:px-20 py-12"
      aria-label="Campus Tour Section"
    >
      {/* Section Title */}
      <SectionTitle title="ভিজুয়াল ক্যাম্পাস ট্যুর" />

      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mt-4">
        {/* Left Column: Description */}
        <div className="md:flex-1 mt-[-30px] lg:mt-[-0] text-justify">
          <PeragraphText peraText1={aboutCampus[0]} />
          <PeragraphText peraText1={aboutCampus[1]} />
          <PeragraphText peraText1={aboutCampus[2]} />
        </div>

        {/* Right Column: Video */}
        <div className="md:flex-1">
          <Video height={"300"} />
        </div>
      </div>
    </section>
  );
};

export default CampusTourSection;
