
import React from "react";


const Loader = ({ message = "লোড হচ্ছে..." }) => {
  return (
    <div className="min-h-screen flex gap-3 justify-center items-center">
      <div className="w-10 h-10 border-4 border-gray-700 border-t-transparent rounded-full animate-spin"></div>
      <p className=" text-gray-800 font-medium">{message}</p>
    </div>
  );
};


export default Loader;