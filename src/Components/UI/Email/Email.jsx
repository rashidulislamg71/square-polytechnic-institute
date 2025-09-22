const Email = ({ email, color = "black" }) => {
  const colors = {
    gray: "text-gray-500",
    red: "text-red-500",
    green: "text-green-500",
    blue: "text-blue-500",
    black: "text-black",
    white: "text-white",
  };
  const colorClass = colors[color] || colors.black;
  return (
    <div className="flex items-center gap-2">
      <a
        href={`mailto:${email}`}
        className={`${colorClass} hover:text-blue-500 font-semibold`}
      >
        {email}
      </a>
    </div>
  );
};

export default Email;
