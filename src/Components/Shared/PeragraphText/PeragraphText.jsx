const PeragraphText = ({ peraText1, peraText2 = "" }) => {
  return (
    <div className="text-justify">
      <p className="text-gray-800 text-[16px]">{peraText1}</p>
      <p className="text-gray-800 text-[16px] ">{peraText2}</p>
    </div>
  );
};

export default PeragraphText;
