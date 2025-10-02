import { FaSquarePhone } from "react-icons/fa6";
import { FixedNumbers } from "./../../../UI/ContactNumber/ContactNumber";
import ActionButton from "../../../UI/ActionButton/ActionButton";
import {
  InstituteAddress,
  InstituteName,
} from "../../../UI/InstituteAddress/InstituteAddress";

/**
 * BannerText: Static text content for the Home Hero Section.
 * 👉 Later, this can be fetched dynamically from backend / CMS.
 */
const BannerText = {
  title: "প্রযুক্তির পথে আপনার প্রথম পদক্ষেপ!",
  description: [
    "আধুনিক প্রযুক্তি শিক্ষা ও হাতে-কলমে প্রশিক্ষণের মাধ্যমে দক্ষ প্রকৌশলী গড়ে তোলার লক্ষ্যেই আমাদের যাত্রা। স্কয়ার পলিটেকনিক ইনস্টিটিউট-এ আপনি পাবেন বাস্তবভিত্তিক ক্লাস, অভিজ্ঞ শিক্ষক, উন্নত ল্যাব, এবং ক্যারিয়ার গড়ার অমূল্য সুযোগ। আপনার স্বপ্নের ভবিষ্যৎ শুরু হোক এখান থেকেই!"
  ],
};

/**
 * HomeHeroContent Component
 *Displays hero banner with background image, institute info, contact & CTA buttons.
 *
 * Props:
 * @param {string} sliderImage - Background banner image
 * @param {number} index - Current slider index (used for alt text)
 */
export const HomeHeroContent = ({ sliderImage, index }) => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <img
        src={sliderImage}
        alt={`স্কয়ার পলিটেকনিক ইনস্টিটিউট ব্যানার ${index + 1}`} // ✅ SEO friendly ALT
        className="w-full h-full object-cover transition-opacity duration-2000 ease-in-out brightness-90  "
        loading="lazy" // ✅ SEO optimization (lazy loading)
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/*Title & Description Section */}
        <div className="bg-gray-900/35 p-4 md:p-8 w-full md:rounded-2xl max-w-3xl mt-4 text-left">
          {/* Banner Title */}
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 text-[28px] md:text-[40px] font-extrabold mb-2">
            {BannerText.title}
          </h1>
          <div className="text-[#e5ebea] text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
            {BannerText.description.map((line, i) => (
              <p key={i}>
                {line}
              </p>
            ))}
            <p className="pt-4 ">
              আমাদের সম্পর্কে জানতে বা যেকোনো তথ্যের জন্য সরাসরি যোগাযোগ করুন।
            </p>
          </div>
          {/* Contact Numbers */}
          <FixedNumbers className={"text-green-400 text-sm md:text-lg"} />
       

          {/* Divider */}
          <hr className="my-3 border-gray-500" />

          {/* Institute Address */}
          <div className="text-center">
            <InstituteName className={"text-white text-sm md:text-[18px]  "} />
            <InstituteAddress className={"text-white text-sm"} />
          </div>
        </div>
      </div>
    </div>
  );
};
