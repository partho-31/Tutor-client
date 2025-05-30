import { FaSearch } from "react-icons/fa";

const BlogHeroSec = () => {
  return (
       <section className="bg-cyan-50 h-[60lvh] py-12 flex justify-center items-center"> 
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Welcome to BlogZone</h1>
          <p className="text-xl text-gray-600 mb-8">Discover amazing content about technology, design, and more.</p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full py-2 px-4 rounded-lg border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] border-2 focus:border-transparent"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#3b82f6] text-white p-2 rounded-lg hover:bg-[#2563eb]">
              <FaSearch className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHeroSec;
