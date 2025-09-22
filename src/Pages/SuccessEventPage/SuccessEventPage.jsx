import React from "react";
import { FaUsers, FaTrophy, FaCalendarAlt, FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const achievements = [
  { title: "আন্তঃকলেজ বিতর্ক প্রতিযোগিতায় প্রথম স্থান", date: "2025-01-15", img: "/images/ach1.jpg", category: "শিক্ষা", desc: "ছাত্রদের দুর্দান্ত পারফরমেন্স।" },
  { title: "জাতীয় ক্রিকেট টুর্নামেন্ট বিজয়ী", date: "2024-12-20", img: "/images/ach2.jpg", category: "খেলাধুলা", desc: "খেলাধুলায় সাফল্যের নজির।" },
];

const events = [
  { title: "বার্ষিক সাংস্কৃতিক সন্ধ্যা ২০২৩", date: "2023-12-05", place: "কলেজ অডিটোরিয়াম", img: "/images/event1.jpg", desc: "সকল শিক্ষার্থী অংশগ্রহণ করেছে।" },
  { title: "টেক ওয়ার্কশপ", date: "2024-03-10", place: "IT Lab", img: "/images/event2.jpg", desc: "প্রযুক্তি বিষয়ক প্রশিক্ষণ।" },
];

const testimonials = [
  { name: "রাশেদ", role: "প্রাক্তন শিক্ষার্থী", text: "কলেজের পরিবেশ সত্যিই অসাধারণ!", img: "/images/student1.jpg" },
  { name: "সালমা", role: "অভিভাবক", text: "শিক্ষকরা খুব যত্নশীল।", img: "/images/parent1.jpg" },
];

export default function SuccessEventsPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white z-10">আমাদের গৌরব: সাফল্য ও ইভেন্ট</h1>
      </div>

      {/* Tabs */}
      <div className="sticky top-0 z-50 bg-white shadow-md flex justify-center gap-8 p-4">
        <a href="#achievements" className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><FaTrophy /> সাফল্য</a>
        <a href="#events" className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><FaCalendarAlt /> ইভেন্ট</a>
        <a href="#testimonials" className="flex items-center gap-2 text-gray-700 hover:text-blue-600"><FaUsers /> মতানত</a>
      </div>

      {/* Achievements */}
      <section id="achievements" className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">আমাদের সাফল্যগাথা</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
              <img src={a.img} alt={a.title} className="rounded-lg mb-3" />
              <h3 className="font-semibold text-lg">{a.title}</h3>
              <p className="text-sm text-gray-500">{a.date} | {a.category}</p>
              <p className="mt-2 text-gray-700">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">সক্রিয়তা ও অনুষ্ঠানমালা</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((e, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition p-4">
              <img src={e.img} alt={e.title} className="rounded-lg mb-3" />
              <h3 className="font-semibold text-lg">{e.title}</h3>
              <p className="text-sm text-gray-500">{e.date} | {e.place}</p>
              <p className="mt-2 text-gray-700">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">মানুষের চোখে আমাদের কলেজ</h2>
        <Swiper spaceBetween={20} slidesPerView={1} autoplay={{ delay: 3000 }}>
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center text-center">
                <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full mb-3" />
                <p className="italic text-gray-700 mb-2">“{t.text}”</p>
                <h4 className="font-semibold">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
