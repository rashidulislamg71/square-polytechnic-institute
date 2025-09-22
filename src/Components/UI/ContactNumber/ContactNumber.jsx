const fontSizes = {
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  custom: "text-[16px]",
};

const colors = {
  gray: "text-gray-500",
  red: "text-red-500",
  green: "text-green-500",
  blue: "text-blue-500",
  black: "text-black",
  white: "text-white",
};

export const ContactNumber = ({
  number,
  fontSize = "custom", // default 16px
  color = "gray", // default gray
}) => {
  const fontClass = fontSizes[fontSize] || fontSizes.custom;
  const colorClass = colors[color] || colors.gray;

  return (
    <div>
      <a
        href={`tel:${number}`}
        className={`${colorClass} ${fontClass} hover:text-blue-500 font-semibold`}
      >
        {number}
      </a>
    </div>
  );
};
