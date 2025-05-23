import React from "react";
import { GrAddCircle } from "react-icons/gr";

const BlogFilter = () => {
  return (
    <div
      className="bg-white py-8 sticky top-0 z-10 shadow-xl mt-5"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        <button className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all">
          Science
        </button>
          <button className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all">
            Travel
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-300 hover:border-gray-400 transition-all">
            Art
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all">
            Life
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all">
            Philosophy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogFilter;
