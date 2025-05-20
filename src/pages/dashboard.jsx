import EnrolledTuition from "../components/dashboard/menu/EnrolledTuition";

const Dashboard = () => {
  return (
    <div className="mx-auto">
      <div className=" my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 mx-auto">
          {/* Total Enrollments */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:ring-1 hover:ring-blue-200 transition-all duration-300  flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">Total Enrollments</p>
                <h3 className="text-3xl font-bold mt-1 text-gray-800">142</h3>
              </div>
            </div>
          </div>

          {/* Active Courses */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:ring-1 hover:ring-purple-200 transition-all duration-300 min-h-[200px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">Active Courses</p>
                <h3 className="text-3xl font-bold mt-1 text-gray-800">8</h3>
              </div>
            </div>
          </div>

          {/* Pending Requests */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:ring-1 hover:ring-yellow-200 transition-all duration-300 min-h-[200px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">Upcoming Course</p>
                <h3 className="text-3xl font-bold mt-1 text-gray-800">5</h3>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg hover:ring-1 hover:ring-green-200 transition-all duration-300 min-h-[200px] flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 font-medium">Completed Course</p>
                <h3 className="text-3xl font-bold mt-1 text-gray-800">
                  $2,450
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-red-400 via-pink-600 to-purple-800 bg-clip-text tracking-tight text-transparent ">
          Enrolled Courses
        </h2>
        <EnrolledTuition />
      </div>
    </div>
  );
};

export default Dashboard;
