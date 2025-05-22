import { FaGraduationCap } from "react-icons/fa";
import useAuthContext from "../../../hooks/useAuthContext";

const ProvidedTuition = () => {
  const { user } = useAuthContext()
  return (
    <div className="w-full flex-1 p-6 md:p-10 space-y-6">
    
      {user?.provided_tuition?.map((tuition, index) => (
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
                {tuition.details.title}
              </h3>
              <p className="text-base text-gray-700">
                <span className="font-medium">Subject:</span> {tuition.details.subjects}
              </p>
              <p className="text-sm text-gray-500">
                Enrollment ID: {tuition.details.id}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProvidedTuition;