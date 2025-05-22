import useFetchTeachers from "../../../hooks/useFetchTeachers";

const TeachersList = () => {
  const {teachers,loading} = useFetchTeachers()

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-indigo-100 pb-2">
        Teachers List
      </h2>
      {loading ? (
        <div className="w-full flex justify-center">
          <span className="loading loading-spinner text-info"></span>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gradient-to-r from-indigo-50 to-blue-50 text-gray-700 uppercase text-sm leading-normal">
                <tr>
                  <th className="py-4 px-6 text-left font-semibold border-b border-gray-200">
                    Name
                  </th>
                  <th className="py-4 px-6 text-center font-semibold border-b border-gray-200">
                    Email
                  </th>
                  <th className="py-4 px-6 text-center font-semibold border-b border-gray-200">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {teachers?.results.map((teacher) => (
                  <tr
                    key={teacher.id}
                    className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="py-3 px-6 text-left whitespace-nowrap border-r border-gray-100">
                      <span className="font-medium text-gray-500">
                        {teacher.first_name} {teacher.last_name}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-center font-medium text-gray-500">
                      {teacher.email}
                    </td>
                    <td className="py-3 px-6 text-center font-medium text-red-400 border-r border-gray-100">
                      Delete
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4 p-4">
            {teachers?.results.map((teacher, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium text-indigo-600 text-sm">
                    {teacher.first_name} {teacher.last_name}
                  </span>
                  <span className="bg-blue-50 text-blue-700 py-1 px-2 rounded-full text-xs">
                    {teacher.email}
                  </span>
                </div>
                <div className="text-gray-700 mb-1">delete</div>
              </div>
            ))}
          </div>

          {teachers?.results.length === 0 && (
            <div className="py-8 text-center text-gray-500 italic">
              No teachers available
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TeachersList;
