import { useEffect, useState } from "react";
import authApiClient from "../../../services/authApiClient";

const StudentsOfCourse = ({ tuition }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchingOfStudents = async () => {
      try {
        const res = await authApiClient.get(
          `api/tuitions/${tuition.id}/applicants/`
        );
        setStudents(res.data);
      } catch (error) {
        console.log("Error while fetching students", error);
      }
    };
    fetchingOfStudents();
  }, [tuition.id]);

  return (
    <div className="bg-gray-100 p-5 font-sans text-gray-800 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-dark relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-14 after:h-1 after:rounded after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
            Enrolled Students
          </h2>
        </div>

        <div className="space-y-4">
          {students?.map((student, index) => (
            <div
              key={index}
              className="flex items-center p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border-l-4 border-l-transparent hover:border-l-blue-500"
            >
              <img
                src={student.user.profile_info.image}
                alt="photo"
                className="w-14 h-14 rounded-full border-3 border-gray-200 object-cover mr-5 transition-all duration-300 hover:border-blue-500"
              />
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800">
                  {student.user.first_name} {student.user.last_name}
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  {student.user.profession}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentsOfCourse;
