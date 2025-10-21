import React, { useState } from "react";
import SectionTitle from "@components/Shared/Titles/SectionTitle/SectionTitle";
import { FixedNumbers } from "@components/UI/ContactNumber/ContactNumber";
import { InstituteAddress } from "@components/UI/InstituteAddress/InstituteAddress";
import { FixedEmail } from "@components/UI/Email/Email";
import GoogleMap from "@components/Shared/GoogleMap/GoogleMap";
import { InputUI, SelectInput } from "@components/UI/InputUI/InputUI";

// Form fields centralized
const formFields = [
  {
    name: "studentName",
    label: "শিক্ষার্থীর নাম*",
    placeholder: "শিক্ষার্থীর নাম",
    type: "text",
  },
  {
    name: "studentMobile",
    label: "শিক্ষার্থীর মোবাইল নাম্বার*",
    placeholder: "শিক্ষার্থীর মোবাইল নাম্বার",
    type: "tel",
  },
  {
    name: "guardianMobile",
    label: "অভিভাবকের মোবাইল নাম্বার",
    placeholder: "অভিভাবকের মোবাইল নাম্বার",
    type: "tel",
  },
  {
    name: "sscRoll",
    label: "SSC রোল নাম্বার",
    placeholder: "SSC রোল নাম্বার",
    type: "number",
  },
  {
    name: "sscReg",
    label: "SSC রেজিস্ট্রেশন নাম্বার",
    placeholder: "SSC রেজিস্ট্রেশন নাম্বার",
    type: "number",
  },
  {
    name: "sscGroup",
    label: "শিক্ষার্থী কোন বিভাগ থেকে SSC পাস করেছে",
    type: "select",
    options: [
      { value: "", label: "বিভাগ নির্বাচন করুন" },
      { value: "science", label: "বিজ্ঞান" },
      { value: "commerce", label: "ব্যবসায় শিক্ষা" },
      { value: "arts", label: "মানবিক" },
      { value: "vocational", label: "ভোকেশনাল" },
    ],
  },
  {
    name: "sscYear",
    label: "SSC পাসের সাল ২০২৫",
    placeholder: "SSC পাসের সাল",
    type: "number",
  },
  {
    name: "sscBoard",
    label: "শিক্ষার্থী কোন বোর্ড থেকে SSC পাশ করেছে",
    type: "select",
    options: [
      { value: "", label: "বোর্ড নির্বাচন করুন" },
      { value: "rajshahi", label: "রাজশাহী" },
      { value: "comilla", label: "কুমিল্লা" },
      { value: "jessore", label: "যশোর" },
      { value: "chittagong", label: "চট্টগ্রাম" },
      { value: "barisal", label: "বরিশাল" },
      { value: "sylhet", label: "সিলেট" },
      { value: "dinajpur", label: "দিনাজপুর" },
      { value: "mymensingh", label: "ময়মনসিংহ" },
      { value: "BTEB", label: "BTEB" },
    ],
  },
  {
    name: "department",
    label: "শিক্ষার্থী কোন বিভাগে ভর্তি ইচ্ছুক",
    type: "select",
    options: [
      { value: "", label: "বিভাগ নির্বাচন করুন" },
      { value: "civil", label: "সিভিল" },
      { value: "electrical", label: "ইলেকট্রিক্যাল" },
      { value: "computer", label: "কম্পিউটার" },
      { value: "mechanical", label: "মেকানিক্যাল" },
      { value: "textile", label: "টেক্সটাইল" },
    ],
  },
  {
    name: "address",
    label: "পূর্ণ ঠিকানা",
    placeholder: "পরিপূর্ণ ঠিকানা লিখুন",
    type: "textarea",
    rows: 1,
  },
];

const AdmissionPage = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  // Input change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simple form validation
  const validateForm = () => {
    const newErrors = {};
    formFields.forEach((field) => {
      if (!formData[field.name] || formData[field.name].trim() === "") {
        newErrors[field.name] = `${field.label} প্রয়োজন।`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data Submitted:", formData);
      alert("ফরম সফলভাবে সাবমিট করা হয়েছে!");
      setFormData({});
      setErrors({});
    }
  };

  return (
    <div className="mt-[-23px]">
      {/* Hero */}
      <header className="bg-gradient-to-r from-green-500 to-cyan-300 text-white p-12 shadow-lg text-center mb-8">
        <div className="max-w-3xl m-auto">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            স্কয়ার পলিটেকনিক ইন্সটিটিউট-এ আপনাকে স্বাগতম!
          </h1>
          <p className="md:text-lg mb-6">
            একটি সঠিক সিদ্ধান্তই আপনার জীবনকে আলোকিত করতে পারে! সিদ্ধান্ত আপনার,
            ভবিষ্যৎ গড়ে তোলার দায়িত্ব আমাদের। (ইন-শা-আল্লাহ)
          </p>
          <a
            href="#admission-form"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded shadow"
          >
            ভর্তি ফরম পূরণ করুন
          </a>
        </div>
      </header>

      <div className="mt-15 px-4 md:px-10 lg:px-20">
        {/* Instructions */}
        <SectionTitle title="ভর্তি নির্দেশনা" />
        <section className="flex flex-col md:flex-row gap-10 md:gap-14 justify-center">
          <div className="flex-1">
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>ফরম পূরণ করুন</li>
              <li>প্রয়োজনীয় ডকুমেন্ট জমা দিন</li>
              <li>ফি জমা দিন</li>
              <li>ফাইনাল সিলেকশন ফলাফল পাবেন ইমেইলে</li>
            </ul>

            {/* Downloads */}
            <section>
              <h2 className="text-sky-500 text-xl font-semibold mb-4">
                ভর্তি তথ্য ডাউনলোড
              </h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-4 py-2"
                >
                  ভর্তি নিয়মাবলী PDF
                </a>
                <a
                  href="#"
                  className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-4 py-2"
                >
                  ফি কাঠামো PDF
                </a>
                <a
                  href="#"
                  className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-4 py-2"
                >
                  সময়সূচি PDF
                </a>
              </div>
            </section>
          </div>

          {/* Video */}
          <div className="flex-1">
            <iframe
              src="https://www.youtube.com/embed/tK7pb5rEusY?si=CdR9dQYo3r921f1f"
              title="Department Overview Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full aspect-video rounded shadow-md"
            />
          </div>
        </section>

        {/* Admission Form */}
        <section
          id="admission-form"
          className=" p-3 md:p-6 mb-6 mt-10 md:mt-15"
        >
          <SectionTitle title="ভর্তি ফরম পূরন করুন" />
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {formFields.map((field, idx) => {
              if (field.type === "select") {
                return (
                  <div key={idx}>
                    <SelectInput
                      name={field.name}
                      label={field.label}
                      options={field.options}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                );
              } else if (field.type === "textarea") {
                return (
                  <div key={idx} className="">
                    <label className="text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                    </label>
                    <textarea
                      name={field.name}
                      rows={field.rows || 4}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-blue-400"
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                );
              } else {
                return (
                  <div key={idx}>
                    <InputUI
                      name={field.name}
                      type={field.type}
                      label={field.label}
                      placeholder={field.placeholder}
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    />
                    {errors[field.name] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                );
              }
            })}

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className=" bg-green-600 hover:bg-green-700 cursor-pointer
                 text-white font-semibold px-7 py-2 rounded shadow transition"
              >
                ফরম জমা দিন
              </button>
            </div>
          </form>
        </section>

        {/* Contact & Map */}
        <section>
          <SectionTitle title="যোগাযোগ" />
          <div className="flex flex-col md:flex-row gap-8 md:gap-14 justify-center">
            <div className="flex-1 space-y-2 max-w-xl">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt placeat quos repudiandae explicabo quis quae autem.
                Nihil porro earum suscipit.
              </p>
              <FixedNumbers />
              <FixedEmail />
              <InstituteAddress />
            </div>
            <div className="flex-1">
              <GoogleMap />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdmissionPage;
