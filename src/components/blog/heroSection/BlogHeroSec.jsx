import { FiSearch, FiX } from "react-icons/fi";

const BlogHeroSec = ({ searchKeyword, setSearchKeyword }) => {
  return (
    <section className="bg-cyan-50 h-[40lvh] py-12 flex justify-center items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl sm:text-5xl font-bold text-gray-800 mb-4">
            Welcome to BlogZone
          </h1>
          <p className="sm:text-xl text-gray-600 mb-4 sm:mb-8">
            Discover amazing content about technology, design, and more.
          </p>
          <div className="relative max-w-md mx-auto">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search Subjects"
                className="w-full pl-10 pr-4 py-2 border-2 outline-0 border-blue-600 rounded-lg  "
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              {searchKeyword && (
                <button
                  onClick={() => setSearchKeyword("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <FiX />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSec;
