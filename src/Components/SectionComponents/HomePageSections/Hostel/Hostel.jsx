import React from "react";
import GereralParagraphText from "../../../Shared/GeneralParagraphText/GeneralParagraphText";
import SectionTitle from "../../../Shared/Titles/SectionTitle/SectionTitle";

const HostelSection = () => {
  const features = [
    
    {
      id: 2,
      title: "সুবিধাজনক অবস্থান",
      desc: "হোস্টেলগুলি ক্যাম্পাসের কাছেই অবস্থিত, যা শিক্ষার্থীদের ক্লাস এবং অন্যান্য একাডেমিক কার্যক্রমে সহজে অংশগ্রহণে সহায়তা করে।",
    },
    {
      id: 3,
      title: "বিভিন্ন ধরণের রুমের ব্যবস্থা",
      desc: "একক, ডাবল বা ট্রিপল শেয়ারিং রুম – প্রতিটি পরিষ্কার-পরিচ্ছন্ন এবং প্রয়োজনীয় আসবাবপত্র দিয়ে সজ্জিত।",
    },
    {
      id: 4,
      title: "সর্বাধুনিক সুবিধা",
      desc: "দ্রুতগতির ওয়াইফাই, নিরবচ্ছিন্ন বিদ্যুৎ (জেনারেটর ব্যাকআপ সহ), ২৪ ঘণ্টা সিসিটিভি নজরদারি ও অগ্নিনির্বাপণ ব্যবস্থা।",
    },
    {
      id: 5,
      title: "কমন এরিয়া",
      desc: "শিক্ষার্থীদের বিশ্রাম ও বিনোদনের জন্য কমন রুম, যেখানে সামাজিক ও সাংস্কৃতিক কার্যক্রম হয়।",
    },
  ];

  return (
    <section className="py-12 bg-gray-50" id="hostel">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
       <SectionTitle title="হোস্টেল সুবিধা" />

        {/* Intro */}
       <div>
        <GereralParagraphText text="স্কয়ার পলিটেকনিক ইনস্টিটিউট শিক্ষার্থীদের জন্য নিরাপদ ও আরামদায়ক আবাসনের গুরুত্ব গভীরভাবে উপলব্ধি করে। আমাদের প্রতিটি হোস্টেল ভবন যত্ন সহকারে ডিজাইন করা হয়েছে যাতে শিক্ষার্থীরা একটি অনুকূল পরিবেশে তাদের পড়াশোনা চালিয়ে যেতে পারে এবং সুস্থ জীবনযাপন করতে পারে।" />
       </div>
        {/* Hostel Im
        age */}
        <div className="mb-10">
          <img
            src="https://i.ibb.co/Yp7LCtq/hostel-building.jpg"
            alt="Hostel Building"
            className="w-full h-[400px] object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6"
            >
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-12 bg-green-50 rounded-2xl p-8 shadow-sm">
          <p className="text-gray-700 text-lg">
            আমাদের হোস্টেল ভবনসমূহ শিক্ষার্থীদের জন্য শুধু একটি থাকার জায়গা নয়,
            বরং একটি <span className="font-semibold">দ্বিতীয় বাড়ি</span>, যেখানে
            তারা নিজেদের সুরক্ষিত এবং স্বাচ্ছন্দ্যবোধ করবে।
          </p>
        </div>
      </div>
    </section>
  );
};

export default HostelSection;

