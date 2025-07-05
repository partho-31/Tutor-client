import {
  FiChevronDown,
  FiFilter,
  FiSearch,
  FiX,
} from "react-icons/fi";

const Filter = ({
  showMobileFilters,
  handleMobileFilter,
  searchBySub,
  handleSearchBySub,
  searchByClass,
  handleSearchByClass,
  ordering,
  setOrdering
}) => {

  const orderingOptions = [
    { option: "Newest First", value: "-created_at" },
    { option: "Oldest First", value: "created_at" },
  ];

  const clearFiltering = () => {
      handleSearchBySub(""),
      handleSearchByClass(""),
      setOrdering("")
  };

  return (
    <div className="">
      <div className="w-full sm:w-1/4  flex items-center justify-between">
        <button
          onClick={() => handleMobileFilter(!showMobileFilters)}
          className="md:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <FiFilter /> Filters
        </button>
      </div>

      <div
        className={`${
          showMobileFilters ? "block" : "hidden"
        } md:block w-full md:w-64 lg:w-72 space-y-6`}
      >
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              <FiFilter className="text-gray-500" /> Filters
            </h2>
            <button
              onClick={clearFiltering}
              className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
            >
              Clear all
            </button>
          </div>

          {/* Search by Course*/}
          <div className="mb-8">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Subjects"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={searchBySub}
                onChange={(e) => handleSearchBySub(e.target.value)}
              />
              {searchBySub && (
                <button
                  onClick={() => handleSearchBySub("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FiX />
                </button>
              )}
            </div>
          </div>

          {/* Search by Class*/}
          <div className="mb-8">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Class e.g 11"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={searchByClass}
                onChange={(e) =>   handleSearchByClass(e.target.value)}
              />
              {searchByClass && (
                <button
                  onClick={() => handleSearchByClass("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FiX />
                </button>
              )}
            </div>
          </div>

          {/* Sorting */}
          <div className="relative w-full sm:w-56 mb-8">
            <select
              className="w-full p-2 pl-3 pr-8 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-white transition-all"
              value={ordering}
              onChange={(e) => setOrdering(e.target.value)}
            >
              <option>Select Order</option>
              {orderingOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.option}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;