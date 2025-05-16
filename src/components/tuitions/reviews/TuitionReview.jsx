import React from "react";
import { RiStarFill, RiStarLine } from "react-icons/ri";

const TuitionReview = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-6 text-gray-800">
          Student Reviews
        </h3>

        <div className="space-y-6">
          {/* Review 1 */}
          <div className="review-card bg-gray-50 p-5 rounded-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Student"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <div className="flex items-center">
                  <RiStarFill className="text-yellow-400" />
                  <RiStarFill className="text-yellow-400" />
                  <RiStarFill className="text-yellow-400" />
                  <RiStarFill className="text-yellow-400" />
                  <RiStarFill className="text-yellow-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              "This course completely changed my perspective on math. The
              instructor explains complex concepts in a way that's easy to
              understand. The problem sets were challenging but extremely
              rewarding."
            </p>
          </div>

          {/* Review 2 */}
          <div className="review-card bg-gray-50 p-5 rounded-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-3">
              <img
                src="https://randomuser.me/api/portraits/men/22.jpg"
                alt="Student"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">Michael Rodriguez</p>
                <div className="flex items-center">
                  <RiStarFill className="text-yellow-400" />
                  <RiStarFill className="text-yellow-400" />
                  <RiStarFill className="text-yellow-400" />
                  <RiStarFill className="text-yellow-400" />
                  <RiStarLine className="text-yellow-400" />
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              "Excellent course material and teaching methodology. I only wish
              there were more practice problems for each concept. Overall,
              highly recommended for anyone looking to strengthen their math
              skills."
            </p>
          </div>
        </div>

        {/* Review Form */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h4 className="text-lg font-medium mb-4">Leave Your Review</h4>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Your Rating</label>
              <div className="flex space-x-1">
                <RiStarLine className="text-2xl text-gray-300 hover:text-yellow-400 cursor-pointer" />
                <RiStarLine className="text-2xl text-gray-300 hover:text-yellow-400 cursor-pointer" />
                <RiStarLine className="text-2xl text-gray-300 hover:text-yellow-400 cursor-pointer" />
                <RiStarLine className="text-2xl text-gray-300 hover:text-yellow-400 cursor-pointer" />
                <RiStarLine className="text-2xl text-gray-300 hover:text-yellow-400 cursor-pointer" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Your Review</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TuitionReview;
