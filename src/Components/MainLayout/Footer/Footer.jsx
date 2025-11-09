// src/components/Footer/Footer.js
import React from "react";
import Logo from "@components/UI/SPILogo/SPILogo";
import { FixedNumbers } from "../../UI/ContactNumber/ContactNumber";
import { FixedEmail } from "../../UI/Email/Email";
import { SocialIcons } from "../../Icons/SocialMediaIcons/SocialMediaIcons";
import FooterLink from "../../UI/FooterLink/FooterLink";
import { InstituteAddress } from "../../UI/InstituteAddress/InstituteAddress";
import { FaLocationDot } from "react-icons/fa6";

const QUICK_LINKS = [
  { to: "/", label: "হোম" },
  { to: "/departments", label: "ডিপার্টমেন্টস্" },
  { to: "/campus", label: "ক্যাম্পাস" },
  { to: "/events", label: "সাফল্য & ইভেন্ট" },
  { to: "/about", label: "আমাদের সম্পর্কে" },
  { to: "/notice", label: "নোটিশ" },
  { to: "/results", label: "রেজাল্ট" },
  { to: "/contact", label: "যোগাযোগ" },
  { to: "/student-care", label: "Students Care" },

];

const EXTRA_LINKS = [
  { to: "/admission", label: "ভর্তি" },
  { to: "", label: "শিক্ষার্থীদের মতামত" },
  { to: "", label: "অভিভাবক মতামত" },
  { to: "", label: "শিক্ষকদের মতামত" },
];

const Footer = () => {
  return (
    <footer
      className="bg-gray-900 text-gray-200 mt-16 rounded-t-3xl shadow-2xl"
      aria-label="Footer"
    >
      {/* Main Content */}
      <div className="px-6 sm:px-10 md:px-20 py-14 flex flex-col md:flex-row justify-between flex-wrap gap-10">
        {/* About & Contact Section */}
        <div className="flex flex-col items-start w-full md:w-auto">
          <div className="mb-4 bg-green-600 p-2 rounded w-full max-w-[320px]">
            <Logo />
          </div>
          <p className="text-sm leading-6 text-gray-400 mb-4 max-w-[320px]">
            আধুনিক কারিগরি শিক্ষা, দক্ষ শিক্ষক ও হাতে-কলমে প্রশিক্ষণের মাধ্যমে
            আমরা শিক্ষার্থীদের গড়ে তুলছি আগামী দিনের দক্ষ প্রযুক্তিবিদ হিসেবে।
          </p>

          <h3 className="text-lg font-semibold text-orange-400 mb-2">
            Contact Us
          </h3>

          <div className="flex flex-col gap-1">
            <div className="flex gap-1 items-center ">
            <FaLocationDot className="text-green-600 text-[17px]" />
            <InstituteAddress className={"text-sm text-white"} />
          </div>
            <FixedNumbers iconClass="text-sm text-orange-400" />
            <div className="flex items-center gap-2">
      
              <FixedEmail className="text-white" />
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-green-600 mb-5 border-b border-gray-700 pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {QUICK_LINKS.map((link, index) => (
              <FooterLink key={index} to={link.to}>
                {link.label}
              </FooterLink>
            ))}
          </ul>
        </div>

        {/* Extra Links Section */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-green-600 mb-5 border-b border-gray-700 pb-2 inline-block">
            More Links
          </h3>
          <ul className="space-y-2">
            {EXTRA_LINKS.map((link, index) => (
              <FooterLink key={index} to={link.to}>
                {link.label}
              </FooterLink>
            ))}
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-center w-full sm:w-auto">
          <h3 className="text-xl font-semibold text-green-600 mb-5 border-b border-gray-700 pb-2 inline-block">
            Follow Us
          </h3>
          <div className="flex flex-wrap gap-4 mt-4 text-lg text-green-400 hover:text-green-300 transition">
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Square Polytechnic Institute. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
