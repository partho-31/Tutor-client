import React from "react";

const StateContainer = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10"
    >
      {/* Stats container */}
      <div className="bg-white rounded-lg shadow-md md:mx-20  flex flex-wrap">
        {/* Stat item - Courses */}
        <div className="w-1/2 sm:w-1/2 md:w-1/4 p-2 sm:p-5 md:p-6 text-center border-b sm:border-b md:border-b-0 border-r border-gray-200">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-600">
            40
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mt-1">
            Courses
          </p>
        </div>

        {/* Stat item - Online Courses */}
        <div className="w-1/2 sm:w-1/2 md:w-1/4 p-2 sm:p-5 md:p-6 text-center border-b sm:border-b md:border-b-0 md:border-r border-gray-200">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-600">
            90
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mt-1">
            Online Courses
          </p>
        </div>

        {/* Stat item - Students Placed */}
        <div className="w-1/2 sm:w-1/2 md:w-1/4 p-2 sm:p-5 md:p-6 text-center border-r md:border-r border-gray-200">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-600">
            200
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mt-1">
            Students Placed
          </p>
        </div>

        {/* Stat item - Students */}
        <div className="w-1/2 sm:w-1/2 md:w-1/4 p-2 sm:p-5 md:p-6 text-center">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-600">
            900+
          </h2>
          <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mt-1">
            Students
          </p>
        </div>
      </div>
    </div>
  );
};

export default StateContainer;
