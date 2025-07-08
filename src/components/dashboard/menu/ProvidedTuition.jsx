import { FaGraduationCap } from "react-icons/fa";
import useAuthContext from "../../../hooks/useAuthContext";

const ProvidedTuition = () => {
  const { user } = useAuthContext()
  console.log(user)
  return (
    <div className="w-full flex-1 p-6 space-y-3 grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
    
      {user?.provided_tuitions?.map((tuition, index) => (
        <div
          className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-shadow sm:mb-4"
          key={index}
        >
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <FaGraduationCap className="text-blue-600 text-xl" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl overflow-hidden line-clamp-1 font-semibold text-gray-900">
                {tuition?.title}
              </h3>
              <p className="text-base text-gray-700">
                <span className="font-medium">Subject:</span> {tuition?.subjects}
              </p>
              <p className="text-sm text-gray-500">
                Enrollment ID: {tuition?.id}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProvidedTuition;