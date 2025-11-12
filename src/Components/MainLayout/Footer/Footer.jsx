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
  { to: "/galleryEvent", label: "সাফল্য & ইভেন্ট" },
  { to: "/about", label: "আমাদের সম্পর্কে" },
  { to: "/notice", label: "নোটিশ" },
  { to: "#", label: "রেজাল্ট" },
  { to: "/contuctUs", label: "যোগাযোগ" },
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
      className="bg-gray-900 text-gray-200 mt-16 rounded-t-4xl shadow-2xl"
      aria-label="Square Polytechnic Institute Footer"
    >
      <meta
        name="description"
        content="Square Polytechnic Institute – modern technical education,
         skilled teachers, and hands-on training to create skilled technologists of tomorrow."
      />
      <meta
        name="keywords"
        content="Polytechnic, Education, Technical Education, Square Polytechnic, Square Polytechnic Institute, Diploma, Bogura, Bangladesh"
      />

      {/* Main Footer Content */}
      <section className="px-6 sm:px-10 md:px-20 py-14 flex flex-col md:flex-row justify-between flex-wrap gap-10">
        {/* About & Contact Section */}
        <article
          className="flex flex-col items-start w-full md:w-auto"
          aria-labelledby="footer-about"
        >
          <div className="mb-4 bg-green-600 p-2 rounded w-full max-w-[320px]">
            <Logo />
          </div>
          <p
            id="footer-about"
            className="text-sm leading-6 text-gray-300 mb-4 max-w-[320px]"
          >
            আধুনিক কারিগরি শিক্ষা, দক্ষ শিক্ষক ও হাতে-কলমে প্রশিক্ষণের মাধ্যমে
            আমরা শিক্ষার্থীদের গড়ে তুলছি আগামী দিনের দক্ষ প্রযুক্তিবিদ হিসেবে।
          </p>

          <address className="not-italic">
            <h3 className="text-lg font-semibold text-orange-400 mb-2">
              Contact Us
            </h3>
            <div className="flex flex-col gap-1">
              <div className="flex gap-1 items-center">
                <FaLocationDot
                  className="text-green-600 text-[17px]"
                  aria-hidden="true"
                />
                <InstituteAddress className="text-sm text-white" />
              </div>
              <FixedNumbers iconClass="text-sm text-orange-400" />
              <div className="flex items-center gap-2">
                <FixedEmail className="text-white" />
              </div>
            </div>
          </address>
        </article>

        {/* Quick Links */}
        <nav aria-labelledby="footer-quick-links" className="flex flex-col">
          <h3
            id="footer-quick-links"
            className="text-xl font-semibold text-green-600 mb-5 border-b border-gray-700 pb-2 inline-block"
          >
            Quick Links
          </h3>
          <ul className="space-y-2" role="list">
            {QUICK_LINKS.map((link, index) => (
              <li key={index}>
                <FooterLink to={link.to}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Extra Links */}
        <nav aria-labelledby="footer-extra-links" className="flex flex-col">
          <h3
            id="footer-extra-links"
            className="text-xl font-semibold text-green-600 mb-5 border-b border-gray-700 pb-2 inline-block"
          >
            More Links
          </h3>
          <ul className="space-y-2" role="list">
            {EXTRA_LINKS.map((link, index) => (
              <li key={index}>
                <FooterLink to={link.to}>{link.label}</FooterLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Section */}
        <section
          aria-labelledby="footer-social-links"
          className="flex flex-col items-center w-full sm:w-auto"
        >
          <h3
            id="footer-social-links"
            className="text-xl font-semibold text-green-600 mb-5 border-b border-gray-700 pb-2 inline-block"
          >
            Follow Us
          </h3>
          <div className="flex flex-wrap md:gap-4 gap-2 mt-4 text-xl md:text-lg text-green-400 hover:text-green-300 transition">
            <SocialIcons />
          </div>
        </section>
      </section>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-300">
        <small>
          © {new Date().getFullYear()}{" "}
          <strong>Square Polytechnic Institute</strong>. All Rights Reserved.
          [Developed by{" "}
          <a
            href="https://www.linkedin.com/in/rashidulislam71/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline"
          >
            RASHIDUL ISLAM RASHED
          </a>
          ]
        </small>
      </div>
    </footer>
  );
};

export default Footer;
