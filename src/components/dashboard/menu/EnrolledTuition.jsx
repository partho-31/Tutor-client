import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router";

const EnrolledTuition = ({user}) => {
  return (
    <div className="w-full flex-1 p-6 space-y-3 grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
      {user?.applied_tuition?.map((tuition, index) => (
        <Link to={`/courses/${tuition.details.id}/` }  key={index}>
          <div
            className=" bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow sm:mb-4"
           
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                <FaGraduationCap className="text-blue-600 text-xl" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl overflow-hidden line-clamp-1 font-semibold text-gray-900">
                  {tuition.details.title}
                </h3>
                <p className="text-base text-gray-700">
                  <span className="font-medium">Subject:</span>{" "}
                  {tuition.details.subjects}
                </p>
                <p className="text-sm text-gray-500">
                  Enrollment ID: {tuition.details.id}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default EnrolledTuition;
