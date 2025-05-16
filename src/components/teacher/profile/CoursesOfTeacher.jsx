import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const CoursesOfTeacher = ({ teacher }) => {
  return (
    <div>
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
          Courses Taught
        </h2>
        <div className="w-full flex-1 p-6 md:p-10 space-y-6">
          {teacher?.provided_tuitions?.map((tuition, index) => (
            <div
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow"
              key={index}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <FaGraduationCap className="text-blue-600 text-xl" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {tuition.title}
                  </h3>
                  <p className="text-base text-gray-700">
                    <span className="font-medium">Subject:</span>{" "}
                    {tuition.subjects}
                  </p>
                  <p className="text-sm text-gray-500">
                    Enrollment ID: {tuition.id}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CoursesOfTeacher;
