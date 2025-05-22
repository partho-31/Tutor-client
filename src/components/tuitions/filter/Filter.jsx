import { GrAddCircle } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router";

const Filter = ({
  searchBySub,
  handleSearchBySub,
  searchByClass,
  handleSearchByClass,
  searchByTeacher,
  handleSearchByTeacher
}) => {
  return (
    <div className="flex justify-center items-center py-5 px-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-md border border-blue-100">
      <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 w-full max-w-6xl px-3 justify-center items-center">
        
        {/* Search Inputs Container */}
        <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0 w-full md:w-auto">
          {/* Subject Filter */}
          <div className="relative">
            <input
              id="subject"
              type="text"
              value={searchBySub}
              onChange={(e) => handleSearchBySub(e.target.value)}
              placeholder="PHYSICS,MATHEMATICS"
              className="w-full md:w-52 px-4 py-2 pl-10 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-white text-gray-700 placeholder-gray-400"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          {/* Class Filter */}
          <div className="relative">
            <input
              id="class"
              type="number"
              value={searchByClass}
              onChange={(e) => handleSearchByClass(e.target.value)}
              placeholder="Class By Number"
              className="w-full md:w-52 px-4 py-2 pl-10 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-white text-gray-700 placeholder-gray-400"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          {/* Teacher Filter */}
          <div className="relative">
            <input
              id="teacher"
              type="number"
              value={searchByTeacher}
              onChange={(e) => handleSearchByTeacher(e.target.value)}
              placeholder="Teacher By ID"
              className="w-full md:w-52 px-4 py-2 pl-10 border border-blue-200 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all duration-200 bg-white text-gray-700 placeholder-gray-400"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full md:w-auto px-5 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg hover:from-emerald-600 hover:to-teal-700 focus:outline-none transition-all duration-200 shadow hover:shadow-md font-medium">
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;
