// TestimonialCard.jsx
import GeneralParagraphText from "@components/Shared/GeneralParagraphText/GeneralParagraphText";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ item }) => {
  if (!item || !item.id) return null;

  const { id, name, department, comment, image, session } = item;

  return (
    <div
      key={id}
      className="max-w-sm bg-white rounded-xl shadow-xl p-6 space-y-4 hover:shadow-xl transition-shadow duration-300"
    >
      {/* Quote Icon */}
      <div className="text-emerald-600 text-lg">
        <FaQuoteLeft />
      </div>

      {/* Comment */}
      <GeneralParagraphText
        text={comment}
        className="text-gray-700 text-[15px] italic leading-relaxed"
      />

      {/* Quote Icon */}
      <div className="text-emerald-600 text-lg text-right">
        <FaQuoteRight />
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 mt-4">
        <img
          className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover shadow"
          src={image}
          alt={name}
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">
            {department}
            <span className="text-orange-700 font-medium"> | </span>
            {session}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
