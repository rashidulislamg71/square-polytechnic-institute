import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        {/* Big 404 */}
        <h1 className="text-9xl font-extrabold text-indigo-600 mb-4 animate-pulse">
          404
        </h1>

        {/* Message */}
        <p className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Oops! Page Not Found
        </p>
        <p className="text-gray-700 mb-6">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow hover:bg-indigo-700 transition-colors duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
