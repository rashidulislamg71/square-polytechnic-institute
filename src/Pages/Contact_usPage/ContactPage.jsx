import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import HeroSection from "@components/Shared/HeroSection/HeroSection";
import CoontentTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import { SocialIconAndName } from "@components/Icons/SocialMediaIcons/SocialMediaIcons";
import AcademyManagementCard from "@components/UI/Cards/AcademyManagementCard/AcademyManagementCard";
import GoogleMap from "@components/Shared/GoogleMap/GoogleMap";
import { FixedEmail } from "@components/UI/Email/Email";

import heroImg from "../../assets/images/Contact-page-img/স্কয়ার পলিটেকনিক ইন্সটিটিউট.png";
import vicePrincipal from "../../assets/images/aboutUs_image/leaders_image/asfakur-rahman-square-polytechnic-bogura.jpg";
import principal from "../../assets/images/aboutUs_image/leaders_image/sm-mehedi-hassn-principal-square-polytechnic-bogura.jpg";

const managementTeam = [
  {
    name: "Md. Rashidul Islam Rashed",
    designation: "Accountant",
    phone: "01849-267660",
    email: "jrashidulislam0103@gmail.com",
    image: null,
  },
  {
    name: "Engr. S. M. Mehedi Hasan",
    designation: "Principal",
    phone: "01719-043487",
    email: "principal@squarepoly.com",
    image: principal,
  },
  {
    name: "Engr. Md. Asadul Islam",
    designation: "Vice Principal",
    phone: "01760-998164",
    email: "vp@squarepoly.com",
    image: vicePrincipal,
  },
];

const ContactPage = () => {
  return (
    <main className="bg-gray-50">
      {/* SEO tags */}

      {/* Hero Section */}
      <HeroSection title="যোগাযোগ করুন" bgImage={heroImg} />

      <div className="max-w-7xl mx-auto py-12 px-4 space-y-20">
        {/*Office Contact Section */}
        <section
          className="text-center space-y-8"
          aria-label="Office Contact Information"
        >
          <CoontentTitle title="অফিস যোগাযোগ" />
          <p className="max-w-2xl mx-auto text-gray-600">
            আপনার জিজ্ঞাসা, মতামত বা ভর্তি সংক্রান্ত তথ্যের জন্য আমাদের সাথে
            যোগাযোগ করুন।
            <br />
            Square Polytechnic Institute সর্বদা আপনার পাশে।
          </p>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center gap-3 border border-green-100">
              <FaPhone className="text-emerald-600 text-3xl" />
              <h3 className="font-semibold text-gray-800">ফোন</h3>
              <p className="text-gray-700">
                <a href="tel:+8801719043487" className="hover:text-emerald-600">
                  01719-043487
                </a>
                <br />
                <a href="tel:+8801760998164" className="hover:text-emerald-600">
                  01760-998164
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center gap-3 border border-blue-100">
              <FaEnvelope className="text-blue-600 text-3xl" />
              <h3 className="font-semibold text-gray-800">ইমেইল</h3>
              <FixedEmail />
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center gap-3 border border-red-100">
              <FaMapMarkerAlt className="text-red-500 text-3xl" />
              <h3 className="font-semibold text-gray-800">ঠিকানা</h3>
              <p className="text-gray-700 leading-relaxed">
                গাড়িদহ, শেরপুর, বগুড়া <br /> (পল্লী একাডেমির দক্ষিণ পাশে)
              </p>
            </div>
          </div>

          <div className="mt-6 text-gray-700">
            <strong>অফিস সময়সূচি:</strong> রবি–বৃহস্পতি | সকাল ৯টা – বিকেল ৫টা{" "}
            <br />
            শুক্রবার ও সরকারি ছুটির দিন বন্ধ
          </div>

          {/*  Social Media */}
          <div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl border-t-4 border-amber-500 p-8 flex flex-col items-center gap-4 shadow-md">
            <h3 className="text-gray-800 font-semibold text-lg">
              আমাদের Social Media / Follow Us
            </h3>
            <p className="text-gray-700 text-center text-base">
              শিক্ষাবিষয়ক সকল খবর ও আপডেট পেতে আমাদের সোশ্যাল মিডিয়া ফলো করুন।
            </p>
            <div className="flex justify-center gap-6 pt-2">
              <SocialIconAndName iconSize={30} textSize={16} />
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section aria-label="Google Map Location">
          <GoogleMap className="rounded-2xl shadow-lg border border-gray-200" />
        </section>

        {/*Management Team */}
        <section aria-label="Management Team" className="text-center">
          <CoontentTitle title="প্রশাসনিক যোগাযোগ" />
          <div className="flex justify-center flex-wrap gap-10">
            {managementTeam.map((member, index) => (
              <AcademyManagementCard key={index} {...member} />
            ))}
          </div>
        </section>

        {/* ✅ Motivational Quote */}
        <section className="text-center py-10 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl shadow-inner">
          <blockquote className="text-xl italic font-medium text-gray-700">
            “শিক্ষা শুধু ডিগ্রির জন্য নয়, বরং জীবন গড়ার সর্বশ্রেষ্ঠ হাতিয়ার।”
          </blockquote>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
