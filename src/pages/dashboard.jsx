import BarChart from "../components/dashboard/chart/BarChart";
import LineChart from "../components/dashboard/chart/LineChart";
import EnrolledTuition from "../components/dashboard/menu/EnrolledTuition";
import ProvidedTuition from "../components/dashboard/menu/ProvidedTuition";
import useAuthContext from "../hooks/useAuthContext";
import {
  FaUserGraduate,
  FaBookOpen,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Dashboard = () => {
  const { user } = useAuthContext();

  return (
    <div className="mx-auto">
      <div className="sm:m-5 px-4 sm:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mx-auto">
          {/* Total Enrollments */}
          <div className="bg-white pl-10 sm:pl-5 rounded-lg shadow p-3 flex items-center gap-3">
            <FaUserGraduate className="text-blue-500 text-3xl" />
            <div className="flex flex-col items-center ">
              <p className="text-sm text-gray-600 font-medium">
                Total Enrollments
              </p>
              <h3 className="text-xl font-bold text-gray-800">
                {user.applied_tuition.length}
              </h3>
            </div>
          </div>

          {/* Active Courses */}
          <div className="bg-white pl-10 sm:pl-5 rounded-lg shadow p-3 flex items-center gap-3">
            <FaBookOpen className="text-green-500 text-3xl" />
            <div className="flex flex-col items-center ">
              <p className="text-sm text-green-500 font-medium">
                Active Courses
              </p>
              <h3 className="text-xl font-bold text-green-600">
                {user.applied_tuition.length}
              </h3>
            </div>
          </div>

          {/* Upcoming Courses */}
          <div className="bg-white pl-10 sm:pl-5 rounded-lg shadow p-3 flex items-center gap-3">
            <FaCalendarAlt className="text-blue-700 text-3xl" />
            <div className="flex flex-col items-center ">
              <p className="text-sm text-blue-700 font-medium">
                Upcoming Courses
              </p>
              <h3 className="text-xl font-bold text-blue-800">0</h3>
            </div>
          </div>

          {/* Completed Courses */}
          <div className="bg-white pl-10 sm:pl-5 rounded-lg shadow p-3 flex items-center gap-3">
            <FaCheckCircle className="text-red-500 text-3xl" />
            <div className="flex flex-col items-center ">
              <p className="text-sm text-red-500 font-medium">
                Completed Courses
              </p>
              <h3 className="text-xl font-bold text-red-600">0</h3>
            </div>
          </div>
        </div>
      </div>

      {user.role === "Teacher" && (
        <div className="mt-10">
          <h2 className="text-2xl text-gray-600 px-3 rounded-full font-medium">
            Provided Courses
          </h2>
          <ProvidedTuition user={user} />
        </div>
      )}

      {!user.is_staff && (
        <div>
          <h2 className="text-2xl text-gray-700  px-3 rounded-full font-medium ">
            Enrolled Courses
          </h2>
          <EnrolledTuition user={user} />
        </div>
      )}

      {user.is_staff && (
        <div className="mt-10 px-4 grid sm:grid-cols-2 grid-cols-1 justify-between gap-4">
          <div>
            <h2 className="text-xl text-center -mb-8 sm:mb-0 text-gray-700 font-semibold ">
              Course Distribution by Subject
            </h2>
            <BarChart />
            <p className="text-sm text-gray-500 mb-4">
              Visual summary of how many courses are currently available in each
              subject area.
            </p>
          </div>

          <div>
            <h2 className="text-xl text-gray-700 text-center font-semibold ">
              Monthly Course Enrollments (Last 6 Months)
            </h2>
            <LineChart />
            <p className="text-sm text-gray-500 -mt-10">
              Track learner engagement by viewing course enrollment trends over
              the past 6 months.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
