import React from "react";
import { MdEdit } from "react-icons/md";

const CourseContent = ({tuition}) => {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Course Content
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <MdEdit />
            <span>{tuition.course_content}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
