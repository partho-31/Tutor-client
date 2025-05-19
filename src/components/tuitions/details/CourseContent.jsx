import { MdEdit } from "react-icons/md";

const CourseContent = ({ tuition }) => {
  const lines = tuition.course_content ? tuition.course_content.split(",") : [];

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Course Content
        </h3>
        <div className="space-y-3">
          <div className=" space-x-3">
            {lines?.map((line, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <MdEdit /> {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
