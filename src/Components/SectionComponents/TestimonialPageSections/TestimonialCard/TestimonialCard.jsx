import GeneralParagraphText from "./../../../Shared/GeneralParagraphText/GeneralParagraphText";

const TestimonialCard = ({ data }) => {
  const { id, name, department, comment, image } = data;

  return (
    <div key={id} >
      <div className="w-[360px] bg-white rounded
       shadow-lg p-5  space-y-3">
        {/* Name & Department */}
        <div className="flex items-center gap-2">
          <img
            className="w-16 h-16 rounded-full border-2 border-gray-400 object-cover"
            src={image}
            alt={name}
          />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">{department}</p>
          </div>
        </div>

        {/* Comment */}

        <GeneralParagraphText
          text={comment}
          className="text-justify text-[15px]  italic mt-[0] md:mt-[0] "
        />
      </div>
    </div>
  );
};

export default TestimonialCard;
