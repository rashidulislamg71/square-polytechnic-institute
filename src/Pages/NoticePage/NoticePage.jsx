import React, { useEffect, useState, useMemo } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import notices from "../../Data/NoticesData/NoticesData";
import Error from "../../Components/UI/Error/Error";
import Loader from "../../Components/UI/Loader/Loader";
import NoticeList from "../../Components/SectionComponents/NoticePageSections/NoticeList/NoticeList";
import FilterButton from "../../Components/UI/FilterButton/FilterButton";
import useFetchingData from "../../hooks/useFetchData";

const NoticePage = () => {
  const noticesData = useMemo(() => notices || [], [notices]);

  const buttons = ["All", "Academy", "BTEB"];

  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [itemsToShow, setItemsToShow] = useState(10);

  // Load  notice data
  const {
    data: allNotices,
    loading,
    error,
  } = useFetchingData(noticesData, null, 500);

  // Filter notices
  const filteredNotices = useMemo(() => {
    const sorted = [...allNotices].sort(
      (a, b) =>
        new Date(b.date.split("-").reverse().join("-")) -
        new Date(a.date.split("-").reverse().join("-"))
    );

    return sorted.filter((notice) => {
      const matchType = active === "All" || notice.type === active;
      const query = search.toLowerCase();
      const matchSearch =
        notice.title?.toLowerCase().includes(query) ||
        notice.shortDescription?.toLowerCase().includes(query);

      const [d, m, y] = notice.date.split("-");
      const matchDay = day ? d === day.padStart(2, "0") : true;
      const matchMonth = month ? m === month.padStart(2, "0") : true;
      const matchYear = year ? y === year : true;

      return matchType && matchSearch && matchDay && matchMonth && matchYear;
    });
  }, [allNotices, active, search, day, month, year]);

  const limitedNotices =
    itemsToShow === "All"
      ? filteredNotices
      : filteredNotices.slice(0, Number(itemsToShow));

  const days = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const years = ["2024", "2025", "2026"];

  if (loading) return <Loader message="নোটিশ লোড হচ্ছে..." />;
  if (error) return <Error message={error} />;

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-gradient-to-b mt-[-20px] from-green-600 to-green-400 text-white py-10 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-2">নোটিশ বোর্ড</h3>
          <p className="opacity-90">
            সকল Academic ও BTEB নোটিশ এখান থেকে খুঁজে নিন।
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 md:gap-8 mt-6 max-w-4xl mx-auto">
        {buttons.map((btn) => (
          <FilterButton
            key={btn}
            label={btn}
            active={active}
            onClick={setActive}
          />
        ))}
      </div>

      {/* Search + Date Filter + Show Entries */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-md mt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative w-full md:max-w-md ">
            <HiOutlineSearch className="absolute top-3 left-3 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="নোটিস শিরোনাম বা বিবরণ দিয়ে খুঁজুন..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-full pl-10 pr-10 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute top-3 right-3 text-red-400 hover:text-gray-600 font-bold"
              >
                <RxCross2 />
              </button>
            )}
          </div>

          {/* Date filters */}
          <div className="flex gap-2 w-full md:w-auto">
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-2.5 w-1/3 md:w-auto text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Day</option>
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-2.5 w-1/3 md:w-auto text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Month</option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border border-gray-300 rounded-lg px-2 py-2.5 w-1/3 md:w-auto text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <option value="">Year</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Show entries */}
        <div className="flex items-center gap-2 mt-4 justify-start">
          <label className="text-gray-700 text-sm font-medium">Show:</label>
          <select
            value={itemsToShow}
            onChange={(e) => setItemsToShow(e.target.value)}
            className="border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none text-sm"
          >
            <option value="10">1–10</option>
            <option value="20">1–20</option>
            <option value="30">1–30</option>
            <option value="All">All ({filteredNotices.length})</option>
          </select>
          <span className="text-gray-500 text-xs ml-3">
            Showing {limitedNotices.length} of {filteredNotices.length} matching
            notices.
          </span>
        </div>
      </div>

      {/* Notice List */}
      <NoticeList limitedNotices={limitedNotices} />
    </div>
  );
};

export default NoticePage;
