import { HiOutlineDownload, HiOutlineEye, HiOutlineSearch } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";

const NoticeList = ({ limitedNotices }) => {
  return (
    <div>
      <div className="max-w-4xl mx-auto mt-10 space-y-4">
        {limitedNotices.length > 0 ? (
          limitedNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-white p-3 rounded shadow hover:shadow-xl transition duration-300"
            >
              <div className="flex items-start  justify-between">
                <h3 className="font-bold text-gray-800 flex-grow">
                  {notice.title}
                </h3>
                <span
                  className={`text-[12px] font-semibold px-2 py-1 rounded-full  sm:mt-0 ${
                    notice.type === "Academy"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {notice.type}
                </span>
              </div>

              <p className="text-gray-600 text-sm mt-1">
                {notice.shortDescription}
              </p>

              <div className="flex items-center justify-between mt-3 border-t border-gray-100 pt-3">
                <span className="text-sm flex items-center gap-1 text-gray-500 font-medium">
                  <MdOutlineDateRange className="w-4 h-4" /> প্রকাশিত:{" "}
                  {notice.date}
                </span>

                {notice.file && (
                  <div className="flex gap-3 mt-3 sm:mt-0">
                    <a
                      href={notice.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition"
                    >
                      <HiOutlineEye className="w-4 h-4" /> View PDF
                    </a>
                    <a
                      href={notice.file}
                      download
                      className="flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 transition"
                    >
                      <HiOutlineDownload className="w-4 h-4" /> Download
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center ">
            <HiOutlineSearch className="mx-auto text-4xl mb-3 text-red-400" />
            <p className="text-xl text-red-500 font-medium">
              কোনো নোটিশ খুঁজে পাওয়া যায়নি।
            </p>
            <p className="text-gray-500 mt-2">
              আপনার সার্চ বা ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeList;
