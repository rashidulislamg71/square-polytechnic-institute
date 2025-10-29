import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Error = ({ message = "(Error) ত্রুটি! একটু পরে আবার চেষ্টা করুন.....।" }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-red-50 p-6">
      <div className="text-center p-8 bg-white rounded-xl shadow-lg border-2 border-red-400">
        <HiOutlineExclamationCircle className="mx-auto text-6xl text-red-600 mb-4" />
        <h2 className="text-2xl font-bold text-red-600 mb-3">Error</h2>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default Error;
