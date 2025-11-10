
import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

function DataNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
          <FaExclamationTriangle className="text-yellow-500 text-6xl mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            কোন তথ্য খুঁজে পাওয়া যায়নি!
          </h2>
          <p className="text-gray-700 mb-4">
            অনুগ্রহ করে “Go Back” করুন অথবা “Reload” দিন।
          </p>
    
          <div className="flex gap-4">
            <button
              onClick={() => window.history.back()}
              className="cursor-pointer px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Go Back
            </button>
            <button
              onClick={() => window.location.reload()}
              className="cursor-pointer px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Reload
            </button>
          </div>
        </div>
  )
}

export default DataNotFound