import React from "react";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa"; // Phone icon

import HeroSection from "../../Components/Shared/HeroSection/HeroSection";
import heroImg from "../../assets/images/home_hero_img/bg_1.png";
import CoontentTitle from "../../Components/Shared/Titles/SectionTitle/SectionTitle";
import { SocialIconAndName } from "../../Components/Icons/SocialMediaIcons/SocialMediaIcons";

import Img from "../../assets/images/2.jpg";
import AcademyManagementCard from "../../Components/UI/Cards/AcademyManagementCard/AcademyManagementCard";
import GoogleMap from "../../Components/Shared/GoogleMap/GoogleMap";

const ContactPage = () => {
  // Management team data (name, designation, phone, email, image)
  const managementTeam = [
    {
      name: "Md. Rashidul Islam Rashed",
      designation: "Accountant",
      phone: "01849-267660",
      email: "jrashidulislam02103@gmail.com",
      image: Img,
    },
    {
      name: "Engr. S. M. Mehedi Hasan",
      designation: "Principal",
      phone: "01849-267660",
      email: "principal@squarepoly.edu.bd",
      image: Img,
    },
    {
      name: "Engr. Md. Asadul Islam",
      designation: "Vice Principal",
      phone: "01849-267660",
      email: "vp@squarepoly.edu.bd",
      image: Img,
    },
  ];

  return (
    <main className="bg-gray-50 mt-[-30px]">
      {/* Hero Section - Page header with background image */}
      <HeroSection
        title="যোগাযোগ করুন"
        subtitle="আপনার জিজ্ঞাসা বা মতামত জানাতে, কিংবা যেকোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা সবসময় আপনার পাশে আছি – আপনার প্রশ্নের দ্রুত উত্তর দিতে, আমরা প্রতিশ্রুতিবদ্ধ।"
        extraText=""
        bgImage={heroImg}
      />

      <div className="max-w-7xl mx-auto py-12 px-4 space-y-16">
        {/* Office Contact Section */}
        <section
          aria-label="Office Contact Information"
          className="text-center space-y-8"
        >
          <CoontentTitle title="অফিস যোগাযোগ" />

          {/* Description text */}
          <p className="max-w-2xl mx-auto text-gray-600">
            ভর্তি, কোর্স বা অন্য যে কোনো তথ্যের জন্য আমাদের সাথে যোগাযোগ করুন।
            আমরা সবসময় আপনার পাশে আছি।
          </p>

          {/* Cards for Phone, Email, and Address */}
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow">
              <div className="text-emerald-600 text-3xl">
                <FaPhone />
              </div>
              <h3 className="font-semibold text-gray-800">ফোন</h3>
              <p className="text-gray-600">
                <a href="tel:+8801760998164" className="hover:text-blue-600">
                  01760-998164
                </a>
                <br />
                <a href="tel:+8801760998165" className="hover:text-blue-600">
                  01760-998165
                </a>
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 text-3xl">
                <FaEnvelope />
              </div>
              <h3 className="font-semibold text-gray-800">ইমেইল</h3>
              <p className="text-gray-600">
                <a
                  href="mailto:squarepoly@gmail.com"
                  className="hover:text-blue-600"
                >
                  squarepoly@gmail.com
                </a>
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 hover:shadow-xl transition-shadow">
              <div className="text-red-500 text-3xl">
                <FaMapMarkerAlt />
              </div>
              <h3 className="font-semibold text-gray-800">ঠিকানা</h3>
              <p className="text-gray-600">
                গারিদহ, শেরপুর, বগুড়া <br />
                (পল্লী একাডেমির দক্ষিণে)
              </p>
            </div>
          </div>

          {/* Office hours */}
          <div className="mt-6 text-gray-500">
            <strong>অফিস সময়সূচি:</strong> রবি–বৃহস্পতি | সকাল ৯টা – বিকেল ৫টা{" "}
            <br />
            (শুক্রবার ও সরকারি ছুটির দিন বন্ধ)
          </div>

          {/* Social Media Section */}
          <div className="max-w-3xl mx-auto mt-10 bg-white border-t-4 border-amber-500 p-6 flex flex-col items-center gap-4 ">
            <h3 className="text-gray-800 font-semibold text-lg">
              আমাদের Social Media / Follow Us
            </h3>
            <p className="text-gray-600 text-center text-base">
              শিক্ষাবিষয়ক সব খবর এবং প্রয়োজনীয় আপডেট পেতে এখনই আমাদের সোশ্যাল
              <br /> মিডিয়াগুলো ফলো করুন! <br />
              Follow us on social media for all educational updates.
            </p>
            <div className="flex justify-center gap-6 pt-2">
              <SocialIconAndName iconSize={30} textSize={16} />
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section aria-label="Google Map Location">
          <GoogleMap className="rounded-2xl shadow-lg" />
        </section>

        {/* Management Team Section */}
        <section aria-label="Management Team">
          <CoontentTitle title="প্রশাসনিক যোগাযোগ" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <AcademyManagementCard
                key={index}
                image={member.image}
                name={member.name}
                designation={member.designation}
                phone={member.phone}
                email={member.email}
              />
            ))}
          </div>
        </section>

        {/* Motivational Quote Section */}
        <section aria-label="Motivational Quote" className="text-center py-12">
          <blockquote className="text-xl italic font-medium text-gray-700">
            “শিক্ষা শুধু ডিগ্রির জন্য নয়, বরং জীবন গড়ার সর্বশ্রেষ্ঠ হাতিয়ার।”
          </blockquote>
        </section>
      </div>
    </main>
  );
};

export default ContactPage;
